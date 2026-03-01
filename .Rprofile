source("renv/activate.R")

# Load essential packages for rendering.
# Use library() instead of pacman::p_load() so that missing packages
# produce a clear error rather than silently installing non-renv versions.
suppressPackageStartupMessages({
  library(ragg)
  library(rmarkdown)
})

# Load languageserver only in interactive sessions (not during quarto render)
if (interactive()) {
  if (!requireNamespace("languageserver", quietly = TRUE)) {
    message("languageserver not installed. Run: install.packages('languageserver')")
  } else {
    library(languageserver, quietly = TRUE)
  }
}
