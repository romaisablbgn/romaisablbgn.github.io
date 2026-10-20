# README

**Live site:** https://romaisablbgn.github.io

This repository contains the source code for my personal Linktree-style landing page and blog. It serves as a central hub for my web design work, data science studies, and written notes on tech, side projects, and personal reflections.


---

## About

- **Main Linktree Page:** Direct, minimal navigation to my client services, social media, and projects.
- **Blog Section:** Lightweight static HTML pages for case studies, events, and personal notes.
- **Floating Background:** Interactive floating keywords representing my identity across web design, data science, and languages.

---

## Credits

This project was modified from the floating text Linktree concept created by **helenahargui**.

- **Original repository:** https://github.com/helenahargui/
- **Key Modifications:**
  - Refactored floating background logic (`script.js`) to categorize keywords by topic (greetings, web dev, data science) instead of deprecated language scripts.
  - Cleaned up font loading by migrating all fonts to Google Fonts.
  - Added dedicated HTML sub-pages and a custom static blog setup (`blog.html` and individual post pages).

Thank you to Helena Hargui for the original visual inspiration and code foundation.

---

## Tech Structure

This site is built with pure, static web technologies:

- **HTML5** (Modular structure across `index.html`, `blog.html`, and `posts/`)
- **CSS3** (Custom properties, keyframe animations, and Google Fonts)
- **Vanilla JavaScript** (Floating background generator and animation controls)

```text
/
├── index.html                  # Main Linktree hub
├── blog.html                   # Blog archive page
├── styles.css                  # Core stylesheet
├── script.js                   # Floating background script
├── assets/                     # Images, profile photo, and icons
└── posts/                      # Individual HTML blog posts