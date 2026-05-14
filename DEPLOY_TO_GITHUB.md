# Deploy this site to Taro003.github.io

This folder is an [Academic Pages](https://github.com/academicpages/academicpages.github.io) template filled with your profile (robot locomotion, co-design, Shanghai Jiao Tong University). Follow these steps to put it on **https://Taro003.github.io**.

## Option A: Use this folder as your repo (recommended)

If this folder is **not** yet a git repo:

1. **Initialize git and add your remote**
   ```powershell
   cd e:\project_files\resume\academicpages.github.io
   git init
   git add .
   git commit -m "Initial commit: academic site (robot locomotion, co-design, SJTU)"
   git branch -M main
   git remote add origin git@github.com:Taro003/Taro003.github.io.git
   git push -u origin main
   ```

   **If you see "remote origin already exists":** point `origin` to your repo and push:
   ```powershell
   git remote set-url origin git@github.com:Taro003/Taro003.github.io.git
   git push -u origin main
   ```

   **If you see "src refspec main does not match any":** your branch may be named `master` or you have no commits yet. Check the current branch:
   ```powershell
   git branch
   ```
   - If you see `* master`, push with: `git push -u origin master`
   - If you see nothing or no branch, create a first commit then push:
     ```powershell
     git add .
     git commit -m "Initial commit: academic site"
     git branch -M main
     git push -u origin main
     ```

2. **Enable GitHub Pages**
   - On GitHub: repo **Taro003/Taro003.github.io** → **Settings** → **Pages**
   - **Source:** Deploy from a branch
   - **Branch:** `main` (or `master`)
   - **Folder:** `/ (root)` (GitHub will build Jekyll automatically)
   - Save

3. **Wait 1–3 minutes**, then open **https://Taro003.github.io**

---

## Option B: You already cloned the repo elsewhere

If you cloned `git@github.com:Taro003/Taro003.github.io.git` into another folder (e.g. `e:\Taro003.github.io`):

1. **Copy all contents** of `e:\project_files\resume\academicpages.github.io` into that clone (overwrite existing files if any).
2. In the clone folder:
   ```powershell
   git add .
   git commit -m "Add Academic Pages site content"
   git push origin main
   ```
3. Enable Pages as in Option A step 2.

---

## After deployment

- **Edit content:** Change `_config.yml`, `_pages/about.md`, `_pages/cv.md`, and files in `_publications/`, `_talks/`, `_teaching/` as needed. Commit and push to update the site.
- **Replace placeholders:** Update "Your Name", `your.email@sjtu.edu.cn`, and add your real publications/talks. Put your CV PDF in `files/` and link it from the CV page if you like.
- **Profile image:** Add a photo as `images/profile.png` (referred to in `_config.yml`).

Your site will be at **https://Taro003.github.io**.
