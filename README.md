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



Current protections include:

- Formspree server-side processing
- Cloudflare Turnstile support
- hidden honeypot field
- minimum fill-time check
- client-side cooldown between submissions
- disabled repeat submit during in-flight requests
- input validation for name, email, phone, and message


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
