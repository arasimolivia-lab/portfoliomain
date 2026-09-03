# Arasim — portfolio site (Jekyll)

A Jekyll portfolio site: off-white/black backgrounds, bauhaus-primary
color accents, a bright pink signature highlight, a bubble-letter
"Arasim" brand mark, moving pink star background, a custom star cursor,
and pages for a motion reel, branding work, résumé, and about.

## 1. Where to put YOUR stuff (the short version)

| What | Where |
|---|---|
| Your name, tagline, email, socials | `_config.yml` |
| Motion / reel projects | `_data/reel.yml` + video files in `assets/video/` |
| Branding projects | `_data/branding.yml` + images in `assets/img/work/branding/` |
| Résumé content (jobs, education, skills) | `_data/resume.yml` |
| Résumé PDF download | `assets/resume.pdf` (replace the placeholder) |
| About page bio | `about.html` (edit the paragraphs directly) |
| Your portrait photo | `assets/img/about/portrait.jpg` |
| Homepage intro line | `index.html` |

Every placeholder image/video in the repo is a **stand-in** — search
for `// EDIT` comments in the code for the exact spot to swap things
out. Placeholder photos were generated just so the layout isn't
broken out of the box; replace them with your real work.

## 2. Run it locally (optional but recommended)

You'll need Ruby installed. Then, from this folder:

```bash
bundle install
bundle exec jekyll serve
```

Open `http://localhost:4000` in your browser. The site rebuilds
automatically when you save a file.

If you don't want to install Ruby locally, you can skip straight to
step 3 — GitHub Pages will build it for you — but you won't be able to
preview changes before pushing.

## 3. Deploy to GitHub Pages

1. Create a new **public** GitHub repository.
   - If you want the site at `https://yourusername.github.io/`
     (no sub-path), name the repo exactly `yourusername.github.io`
     and leave `baseurl: ""` in `_config.yml`.
   - If you want it at `https://yourusername.github.io/reponame/`,
     name the repo whatever you like and set
     `baseurl: "/reponame"` in `_config.yml` to match.
2. Push this whole folder to that repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git remote add origin https://github.com/yourusername/reponame.git
   git push -u origin main
   ```
3. On GitHub: go to the repo's **Settings → Pages**.
   - Under "Build and deployment", set **Source** to
     "Deploy from a branch".
   - Set **Branch** to `main` and folder to `/ (root)`, then Save.
4. GitHub will build and publish the site — this takes 1–2 minutes.
   The Pages settings page will show you the live URL once it's ready.
5. Any time you push new commits to `main`, GitHub Pages rebuilds the
   site automatically — no extra steps needed.

### Using a custom domain (optional)
Add a `CNAME` file to the root of this repo containing just your
domain (e.g. `arasim.design`), point your domain's DNS at GitHub
Pages per [GitHub's instructions](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site),
and set `baseurl: ""` in `_config.yml`.

## 4. File map

```
_config.yml          → site-wide settings (name, tagline, links, socials)
_data/reel.yml        → your motion/reel project list
_data/branding.yml     → your branding project list
_data/resume.yml       → your résumé content
_layouts/default.html  → the page shell (header, footer, canvas, cursor)
_includes/head.html     → <head>, fonts, meta tags
_includes/header.html    → logo + nav
_includes/footer.html     → footer + social links
index.html              → homepage
reel.html                → /reel/ — full motion work page
branding.html              → /branding/ — full branding work page
about.html                  → /about/ — bio page
resume.html                  → /resume/ — résumé page
assets/css/style.scss          → all site styling (design tokens at the top)
assets/js/stars.js               → moving pink star background (canvas)
assets/js/cursor.js               → custom star cursor
assets/js/main.js                  → nav toggle, hover-to-preview video, etc.
assets/img/, assets/video/           → your images and video files
```

## 5. Common tweaks

- **Colors:** all defined once as CSS variables at the top of
  `assets/css/style.scss` (`--black`, `--off`, `--pink`, `--red`,
  `--blue`, `--yellow`). Change a value there and it updates
  everywhere.
- **Fonts:** loaded in `_includes/head.html` (Google Fonts: Baloo 2 +
  Space Grotesk). Swap the font names there and in the `--font-display`
  / `--font-body` variables in `style.scss` to change typefaces
  site-wide.
- **Star count / speed:** top of `assets/js/stars.js`
  (`STAR_COUNT`, `SPEED`, `COLORS`).
- **Add a new nav page:** duplicate one of the existing `.html` pages,
  change its `permalink` in the front matter, then add a link to it in
  `_includes/header.html`.
