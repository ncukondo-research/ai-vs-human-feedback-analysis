-- meta-ref.lua
-- 仕様:
--   - {{title}}, {{authors[1].family}} などを YAML メタデータから展開
--   - MetaList は "; " 区切りで連結
--   - キーが存在しない場合 [[key(name) not found]] を返す
--   - 条件付きインデックス:
--       {{authors[corresponding].family}}
--       -> authors (MetaList) の各要素(MetaMap)のうち
--          field "corresponding" が
--             * MetaBool true  または
--             * それ以外の型で「存在している」
--          最初の要素を選択する

local utils = require 'pandoc.utils'

----------------------------------------------------------------
-- "a.b[1].c" / "authors[corresponding].family" のようなパス文字列を分解
-- 例:
--   "authors[1].family"
--     -> { {key="authors", index=1}, {key="family"} }
--   "authors[corresponding].family"
--     -> { {key="authors", cond="corresponding"}, {key="family"} }
----------------------------------------------------------------
local function parse_keypath(expr)
  local parts = {}
  for part in expr:gmatch("[^%.]+") do
    -- 数値インデックス [1] のパターン
    local key, num_index = part:match("^(.-)%[(%d+)%]$")
    if key then
      table.insert(parts, { key = key ~= "" and key or nil, index = tonumber(num_index) })

    else
      -- 条件付きインデックス [corresponding] 等のパターン
      local key2, cond = part:match("^(.-)%[([_%w]+)%]$")
      if key2 and cond then
        table.insert(parts, {
          key  = key2 ~= "" and key2 or nil,  -- "authors[cond]" の場合 key="authors"
          cond = cond                         -- "[cond]" の場合 key=nil, cond="cond"
        })
      else
        -- 単純な key ("title", "authors" 等)
        table.insert(parts, { key = part })
      end
    end
  end
  return parts
end

----------------------------------------------------------------
-- MetaList から条件付きインデックスで要素を選ぶ
-- list: MetaList
-- field: フィールド名 (例: "corresponding")
-- ルール:
--   - item[field] が存在しない -> スキップ
--   - type == MetaBool -> true のときマッチ
--   - その他の型        -> 値が存在すればマッチ
----------------------------------------------------------------
local function find_in_list_by_field(list, field)
  if utils.type(list) ~= "MetaList" and utils.type(list) ~= "List" then
    return nil
  end

  for i, item in ipairs(list) do
    if utils.type(item) == "MetaMap" or utils.type(item) == "Meta"  or utils.type(item) == "table" then

      local v = item[field]
      if v ~= nil then
        local t = utils.type(v)
        local ok = false

        if t == "MetaBool" then
          ok = (v.boolean == true)
        else
          -- それ以外の型は「存在しているだけ」で真とみなす
          ok = true
        end

        if ok then
          return item
        end
      end
    end
  end

  return nil
end

----------------------------------------------------------------
-- メタデータツリーからパスに従って値を取得
-- path: "authors[1].family", "authors[corresponding].family" 等
-- 戻り値: MetaValue または nil
----------------------------------------------------------------
local function get_meta_value(meta, path)
  local parts = parse_keypath(path)

  local current = meta
  for _, part in ipairs(parts) do
    if not current then
      return nil
    end

    local ctype = utils.type(current)

    -- key でたどる (MetaMap 想定)
    if part.key and part.key ~= "" then
      if ctype == "MetaMap" or ctype == "Meta" then
        current = current[part.key]
      else
        -- MetaMap 以外に key アクセスはできないので失敗
        return nil
      end
      if not current then
        return nil
      end
      ctype = utils.type(current)
    end

    -- 数値インデックス [n]
    if part.index then
      ctype = utils.type(current)
      if ctype == "MetaList" or ctype =="List" then
        current = current[part.index]
        if not current then
          return nil
        end
      else
        return nil
      end
      ctype = utils.type(current)
    end

    -- 条件付きインデックス [field]
    if part.cond then
      -- current が MetaList であることを期待
      ctype = utils.type(current)
      io.stderr:write("DEBUG: before conditional index, current type=" .. ctype .. "\n")
      if ctype == "MetaList" or ctype == "List" then
        current = find_in_list_by_field(current, part.cond)
        if not current then
          return nil
        end
      else
        return nil
      end
    end
  end

  return current
end

----------------------------------------------------------------
-- MetaValue を文字列に変換
-- - MetaList: 要素を stringify して ", " で連結
-- - その他: utils.stringify に委譲
----------------------------------------------------------------
local function meta_to_string(value)
  if not value then
    return nil
  end

  -- pandoc.utils.type() を使って型を判定
  local value_type = utils.type(value)

  if value_type == "List" or value_type == "MetaList" then
    local items = {}
    for _, v in ipairs(value) do
      table.insert(items, utils.stringify(v))
    end
    return table.concat(items, "; ")
  end

  -- その他の MetaString, MetaInlines, MetaBlocks, MetaMap など
  return utils.stringify(value)
end

----------------------------------------------------------------
-- Pandoc 関数でドキュメント全体を処理
----------------------------------------------------------------
function Pandoc(doc)
  local meta = doc.meta
  


  -- Str 要素をフックして {{...}} を置換するフィルター
  local filter = {
    Str = function(el)
      -- 完全に "{{...}}" だけの文字列にマッチする場合のみ対象
      local expr = el.text:match("^{{%s*(.-)%s*}}$")
      if not expr or expr == "" then
        return nil
      end

      local value = get_meta_value(meta, expr) 
      if not value then
        -- キーが存在しない場合は指定のメッセージを返す
        return pandoc.Str("[[key(" .. expr .. ") not found]]")
      end

      local s = meta_to_string(value)
      if not s then
        return pandoc.Str("[[key(" .. expr .. ") not found]]")
      end

      return pandoc.Str(s)
    end
  }

  -- ドキュメントのブロックにフィルターを適用
  doc.blocks = doc.blocks:walk(filter)
  return doc
end
