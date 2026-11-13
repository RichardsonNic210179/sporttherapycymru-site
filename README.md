# Sports Massage Therapy Cymru

Static website for Sports Massage Therapy Cymru, a sports massage clinic in Cardiff. The homepage, shared header, footer and design tokens are in this repo. Inner pages use the same layout and the existing Squarespace URLs, and are added as later pages.

## Commands

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build the static site into `dist/`:

```bash
npm run build
```

Preview the build locally:

```bash
npm run preview
```

The build is a plain static site in `dist/`. `public/_redirects` sends old live URLs to a built page or a homepage section in one hop. The contact page uses Netlify Forms. In the Netlify dashboard, turn on form notifications for the `contact` form so messages reach massagetherapycymru@gmail.com.
