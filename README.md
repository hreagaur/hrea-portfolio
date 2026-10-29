# hrea. portfolio

React + Vite. One section per scroll.

## Run it
1. Install Node.js (LTS) from nodejs.org.
2. Open this folder in VS Code, then in the terminal:
   ```
   npm install
   npm run dev
   ```
3. Open http://localhost:5173

## Where to change things
| What | File |
|---|---|
| Name, bio, roles, tools, email, Behance/LinkedIn | `src/data/site.js` |
| Your artworks + categories | `src/data/works.js` |
| Field notes entries | `src/data/notes.js` |
| Colours & fonts | top of `src/styles.css` |
| Doodles in "inside my head" | `src/components/doodles.jsx` |
| Logo / favicon | `public/logo.png` |

## Adding images
Put files in `public/`:
- Artworks + field notes: `public/art/your-image.jpg`, then in `works.js`: `image: '/art/your-image.jpg'`
- Cutout of you (hero): `public/me-cutout.png` (transparent PNG)
- Your face (inside my head): `public/me-face.png` (transparent PNG)
- Station board illustration: `public/mangaluru-central.png`

Until an image exists, a labelled placeholder shows instead.
Tip: export artwork as JPG/WebP around 1600px on the long side to keep the site fast.

## Go live (free)
1. Push this folder to a GitHub repo.
2. vercel.com, sign in with GitHub, Add New Project, pick the repo, Deploy.
3. Every push to GitHub updates the site.
