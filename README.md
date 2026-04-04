# Yash Uttamchandani Portfolio

A modular, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.  
It presents Yash Uttamchandani's profile, experience, services, research, projects, education, capabilities, and a protected contact form.

## Features

- Modern single-page portfolio with modular React components
- Resume-driven content structure
- Responsive layout for desktop and mobile
- Tailwind-based design system with custom visual styling
- Framer Motion section reveals and hero animations
- Contact form with:
  - Formspree submission handling
  - Cloudflare Turnstile support
  - client-side validation
  - honeypot protection
  - local cooldown/rate-limiting behavior
  - basic anti-bot timing checks

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Formspree
- Cloudflare Turnstile

## Project Structure

```text
my-folio/
├── public/
│   ├── profile-photo.jpg
│   └── resume.pdf
├── src/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env.example
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## Local Development

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://localhost:5173
```

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Environment Variables

Create a `.env.local` file in the project root:

```bash
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
VITE_TURNSTILE_SITE_KEY=your-cloudflare-turnstile-site-key
```

Example values are included in [.env.example](./.env.example).

## Form Setup

### Formspree

1. Create a form in [Formspree](https://formspree.io/).
2. Copy your form endpoint.
3. Add it to `.env.local` as `VITE_FORMSPREE_ENDPOINT`.
4. Use the Formspree dashboard to review submissions.

### Cloudflare Turnstile

1. Create a widget in [Cloudflare Turnstile](https://dash.cloudflare.com/?to=/:account/turnstile).
2. Add `localhost` for local testing and your deployed domain for production.
3. Copy the `Site Key` into `.env.local` as `VITE_TURNSTILE_SITE_KEY`.
4. Keep the `Secret Key` private.
5. In Formspree form settings, enable Cloudflare Turnstile and paste the secret key there.

## Security Notes

This site is static, so there is no private server code in the repo. The contact form is hardened, but no frontend-only form is fully "hack proof."

Current protections include:

- Formspree server-side processing
- Cloudflare Turnstile support
- hidden honeypot field
- minimum fill-time check
- client-side cooldown between submissions
- disabled repeat submit during in-flight requests
- input validation for name, email, phone, and message

Important:

- Never commit `.env.local`
- Never expose your Turnstile `Secret Key` in frontend code
- `VITE_*` values are public in the browser, so only put safe public values there

## Deployment

The easiest free deployment option is Vercel.

### Deploy to Vercel

1. Push this project to GitHub.
2. Import the repository into [Vercel](https://vercel.com/).
3. Add the environment variables in the Vercel project settings:
   - `VITE_FORMSPREE_ENDPOINT`
   - `VITE_TURNSTILE_SITE_KEY`
4. Deploy.

Vercel should detect Vite automatically and use:

- Build Command: `npm run build`
- Output Directory: `dist`

## Content Sources

The site content is primarily based on:

- the local resume PDF
- the provided profile image
- user-supplied GitHub and LinkedIn links

## Notes for Future Updates

- Main profile content lives in [src/data/portfolio.js](./src/data/portfolio.js)
- Contact form logic lives in [src/components/ContactForm.jsx](./src/components/ContactForm.jsx)
- Layout sections are split into reusable components under [src/components](./src/components)

## License

This project is for personal portfolio use.
