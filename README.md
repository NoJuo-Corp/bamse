# Bamse

Bamse is a chat web app by **NoJuo Corporation**, built on Next.js and the Claude API.

## How it's structured
- `app/api/chat/route.js` — server-side API route that calls the Anthropic API using your `ANTHROPIC_API_KEY`. The key never reaches the browser.
- `app/page.js` — the chat UI (client component).
- `app/globals.css` — styling.

## 1. Run locally
```bash
npm install
cp .env.example .env.local
# edit .env.local and add your real ANTHROPIC_API_KEY
npm run dev
```
Visit http://localhost:3000

## 2. Deploy to Vercel
You'll need a free Vercel account (https://vercel.com) and either the Vercel CLI or a GitHub repo.

### Option A — Vercel CLI (fastest)
```bash
npm install -g vercel
vercel login
vercel
```
Follow the prompts (link/create a project). Then set your API key as a secret env var:
```bash
vercel env add ANTHROPIC_API_KEY
```
Paste your key when prompted, choose "Production" (and "Preview"/"Development" if you want them too), then deploy to production:
```bash
vercel --prod
```

### Option B — GitHub + Vercel dashboard
1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. In the project's Settings → Environment Variables, add `ANTHROPIC_API_KEY` with your key.
4. Deploy.

## Notes
- The model used is `claude-sonnet-4-6` — change it in `app/api/chat/route.js` if you want a different one.
- The system prompt (Bamse's persona) lives in the same file as `SYSTEM_PROMPT`.
- Get an API key at https://console.anthropic.com
