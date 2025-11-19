# TruWay Community Center Website

A beautiful, minimal landing site with an aesthetic color scheme and contact form.

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- Beautiful hero section with optional background image support
- Elegant color scheme with blue and gold accents
- Mission statement section with feature cards
- Contact form page with email functionality
- Responsive design for all devices
- Modern, minimal aesthetic with visual interest

## Customization

### Adding a Background Image to the Hero Section

1. Place your image in the `public` folder (create it if it doesn't exist)
2. Open `app/page.tsx`
3. Find the line: `const heroBackgroundImage = ''`
4. Change it to: `const heroBackgroundImage = '/your-image.jpg'`

Example:
```typescript
const heroBackgroundImage = '/hero-background.jpg'
```

The background image will automatically have a beautiful gradient overlay applied. If you leave it empty, it will use a gradient background instead.

### Customizing Colors

Edit the color scheme in `tailwind.config.js`:
- `primary` colors: Blue shades (used for primary elements)
- `accent` colors: Gold/yellow shades (used for accents)

### Other Customizations

- Community center name: `app/page.tsx` (line 26)
- Mission statement: `app/page.tsx` (lines 59-64)
- Feature cards: `app/page.tsx` (lines 68-98)
- Contact form fields: `app/contact/page.tsx`

## Email Configuration

The contact form sends emails to both `truway@roadrunner.com` and `truway2016@gmail.com` when submitted.

### For Local Development

Create a `.env.local` file in the root directory with:

```
SMTP_HOST=smtp.roadrunner.com
SMTP_PORT=587
SMTP_USER=truway@roadrunner.com
SMTP_PASSWORD=your_email_password_here
SMTP_FROM=truway@roadrunner.com
```

### For Netlify Deployment

1. Go to your Netlify Dashboard
2. Navigate to Site Settings > Environment Variables
3. Add the following environment variables:
   - `SMTP_HOST` = `smtp.roadrunner.com`
   - `SMTP_PORT` = `587`
   - `SMTP_USER` = `truway@roadrunner.com`
   - `SMTP_PASSWORD` = (your email password)
   - `SMTP_FROM` = `truway@roadrunner.com`

**Note:** Make sure to use your actual RoadRunner email password for `SMTP_PASSWORD`.
