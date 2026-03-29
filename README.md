# SVIET Website and Admissions Platform

SVIET is a Next.js 16 App Router application with:

- Public marketing pages
- Lead capture APIs (apply, scholarship, program finder, contact)
- Program catalog APIs and dynamic program pages
- Admin CRM views and APIs
- Optional AI admissions counsellor chat

## Stack

- Next.js 16.2.1
- React 19
- TypeScript
- Prisma 7 + PostgreSQL
- Zod validation

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Create env file:

```bash
cp .env.example .env
```

3. Set required values in `.env`:

- `DATABASE_URL` (required)
- `ADMIN_ACCESS_TOKEN` (required for admin token checks)
- `OPENAI_API_KEY` (optional, required only for AI chat)

4. Generate Prisma client:

```bash
npm run prisma:generate
```

5. Run migrations:

```bash
npm run prisma:migrate
```

6. Seed programs (optional but recommended for local/dev):

```bash
npm run prisma:seed
```

7. Start development server:

```bash
npm run dev
```

## Scripts

- `npm run dev` starts dev server
- `npm run build` creates production build
- `npm run start` starts production server
- `npm run lint` runs ESLint
- `npm run test` runs Vitest
- `npm run test:run` runs Vitest with coverage
- `npm run prisma:generate` regenerates Prisma client
- `npm run prisma:migrate` runs Prisma migrations in dev
- `npm run prisma:studio` opens Prisma Studio
- `npm run prisma:seed` seeds baseline program data

## API Notes

- Public lead endpoints are protected by in-memory IP rate limiting at 5 requests/hour per IP.
- When rate-limited, endpoints return `429` with `Retry-After` header.
- AI chat endpoint returns `503` when `OPENAI_API_KEY` is missing.

## Production Deployment Checklist

1. Set production environment variables:

- `DATABASE_URL`
- `ADMIN_ACCESS_TOKEN`
- `OPENAI_API_KEY` (optional)

2. Install and build:

```bash
npm ci
npm run prisma:generate
npm run build
```

3. Apply migrations in target environment.

4. Start app:

```bash
npm run start
```

5. Verify:

- Public pages load
- Public lead POST endpoints respond and rate limit after threshold
- Admin login and CRM APIs are protected
- AI chat responds (or cleanly returns `503` when key is unset)
