# Project File Hierarchy

```
/ (repo root)
├─ eslint.config.js
├─ index.html
├─ package.json
├─ postcss.config.js
├─ README.md
├─ vite.config.js
├─ public/
│  └─ vite.svg
├─ src/
│  ├─ App.css
│  ├─ App.jsx
│  ├─ index.css
│  ├─ main.jsx
│  ├─ assets/
│  │  └─ react.svg
│  ├─ components/
│  │  ├─ Button.jsx
│  │  ├─ Card.jsx
│  │  └─ SectionHeading.jsx
│  └─ hooks/
│     └─ useInView.js
└─ dist/ (created after build)
```

Notes:
- Tailwind v4 configured via `@tailwindcss/postcss` in `postcss.config.js` and Inter font loaded in `index.html`.
- Smooth scroll via `Lenis` in `src/main.jsx`.
- Landing page sections are composed within `src/App.jsx` using components in `src/components`.
