# Princess Academy Sagana Website Demo

A clean, modern, mobile-friendly single-page school landing site. Plain HTML/CSS/JS — no build step.

## Structure

```
Princess Academy Sagana Website Demo-project/
├── index.html         # Single-page landing
│                      # Sections: Hero, About, Academics,
│                      # School Life, Gallery, Contact
└── assets/
    ├── css/styles.css # All styles
    └── js/main.js     # Nav toggle, form handler
```

## Run locally

Just open `index.html` in a browser. For a live-reload dev server:

```powershell
# Option 1: Python (if installed)
python -m http.server 8000

# Option 2: Node (if installed)
npx serve .
```

Then visit http://localhost:8000

## Customize

- **Brand colors**: edit CSS variables at the top of `assets/css/styles.css` (`--primary`, `--accent`, etc.).
- **School name / logo**: update the `.brand` block in the header of `index.html` (the "PA" monogram lives in `.brand-logo`).
- **Contact details**: update the `.topbar`, `#contact` section, and footer in `index.html`.
- **Gallery images**: replace the CSS gradient placeholders on `.gallery .g1` – `.g6` in `styles.css` with `background-image: url('...')`.
- **Program images**: update `.program-img-1/2/3` classes the same way.
- **Map**: the contact section embeds Google Maps — update the iframe `src` with your exact address or coordinates.

## Notes

- Forms are client-side demo only. Connect to a backend (Formspree, Netlify Forms, etc.) for real submissions.
