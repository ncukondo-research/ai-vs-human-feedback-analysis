ARG R_VERSION="4.4.2"
ARG QUARTO_VERSION="1.7.17"
ARG PYTHON_VERSION="3.12.8"
ARG UV_VERSION="0.6.0"

FROM ghcr.io/astral-sh/uv:${UV_VERSION} AS uv

# 1. ベースイメージ
FROM rocker/tidyverse:${R_VERSION}

# 2. CRAN ミラーを固定
RUN echo 'options(repos = c(CRAN = "https://cloud.r-project.org"))' \
    >> "${R_HOME}/etc/Rprofile.site"

# Rのパスを明示
ENV PATH="/usr/local/bin:${PATH}"

# 3. システム依存パッケージをまとめてインストールし、キャッシュ削除
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
      libcurl4-openssl-dev libssl-dev libxml2-dev xz-utils cmake curl \
      gdebi-core libfontconfig1-dev libfreetype6-dev \
      libharfbuzz-dev libfribidi-dev libpng-dev libtiff5-dev libjpeg-dev \
      libnode-dev openssh-client librsvg2-bin \
 && rm -rf /var/lib/apt/lists/*

# 4. Quarto CLI をインストール＆.deb 削除
ARG QUARTO_VERSION
RUN curl -L -o quarto.deb \
     "https://github.com/quarto-dev/quarto-cli/releases/download/v${QUARTO_VERSION}/quarto-${QUARTO_VERSION}-linux-amd64.deb" \
 && gdebi --non-interactive quarto.deb \
 && rm quarto.deb

 # 9.BuildKit キャッシュマウント＆権限調整
RUN --mount=type=cache,target=/home/rstudio/.cache/R \
    mkdir -p /home/rstudio/.cache/R && \
    chown -R rstudio:rstudio /home/rstudio/.cache

RUN mkdir -p /home/rstudio/.local/share/renv/cache \
 && chown -R rstudio:rstudio /home/rstudio/.local/share


 # 5. uv をコピー（Python パッケージ管理に使用）
COPY --from=uv /uv /uvx /bin/



# 6. デフォルトユーザーは rstudio
USER rstudio
WORKDIR /home/rstudio/work

# 8. Python の仮想環境を作成・依存インストール
COPY --chown=rstudio:rstudio pyproject.toml uv.lock README.md ./
ARG PYTHON_VERSION
RUN uv venv --python  ${PYTHON_VERSION}\
 && uv sync --locked



# 10. グローバルには littler と renv のみ
RUN --mount=type=cache,target=/home/rstudio/.cache/R \
    install2.r --error littler renv

# 12. 仮想環境(venv)を自動アクティベートさせる設定
RUN echo 'source /home/rstudio/work/.venv/bin/activate' >> /home/rstudio/.bashrc

# 13. 頻繁に変わる箇所はここで
# COPY --chown=rstudio:rstudio . .

# 14. デフォルトコマンド
CMD ["bash", "-l"]
