# Regal Hive

Regal Hive is a modern e-commerce web application for a fictional honey company. It allows users to browse a selection of honey products, view detailed product information, and add items to their shopping cart.

## Tech stack

- Frontend: Next.js 14 (App Router)
- Backend: Supabase
- Styling: Tailwind CSS
- Emails: Resend
- 3D Modeling: Spline
- Deployment: Vercel

### Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Prerequisites:

- Node.js (version 18 or higher)
- npm or yarn
- A Supabase account and project

Installation:

1. Clone the repository

```bash
git clone <project-url>
cd project-folder
```

2. Install dependencies

```bash
npm install
```

3. Set up enviroment variables

- Create an env.local file at the root of your project and add the following variables

```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

4. Then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
