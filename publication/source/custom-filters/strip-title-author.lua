function Meta(meta)
  -- Quarto/Pandoc が使う FORMAT 変数で出力形式を判定
  if FORMAT:match("docx") then
    meta.title = nil
    meta.subtitle = nil
    meta.author = nil
    meta.authors = nil
    meta.date = nil
  end
  return meta
end
