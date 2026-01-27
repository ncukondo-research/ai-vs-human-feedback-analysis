source("renv/activate.R")

# load essential packages for development
# and set up the environment
if (!requireNamespace("pacman", quietly = TRUE)) install.packages("pacman", quiet = TRUE)
pacman::p_load(ragg, rmarkdown)

# Load languageserver only in interactive sessions (not during quarto render)
if (interactive()) {
  if (!requireNamespace("languageserver", quietly = TRUE)) {
    message("languageserver not installed. Run: install.packages('languageserver')")
  } else {
    library(languageserver, quietly = TRUE)
  }
}
