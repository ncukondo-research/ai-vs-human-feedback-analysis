# Activate renv when R starts from src/ (e.g., during Quarto render)
local({
  project_root <- normalizePath("..")
  renv_activate <- file.path(project_root, "renv", "activate.R")
  if (file.exists(renv_activate)) {
    old_wd <- setwd(project_root)
    on.exit(setwd(old_wd), add = TRUE)
    source(renv_activate)
  }
})
