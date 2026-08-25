# Tabot Support Website

A clean Next.js website for Tabot support, privacy information, and public
account-deletion requests.

## Requirements

- Node.js 20.9 or newer
- Access to the Tabot backend API

## Local setup

1. Install dependencies:

   ```bash
   npm ci
   ```

2. Copy `.env.example` to `.env.local`. The production API URL is already
   provided; replace it only when using a local or staging backend.

3. Start the website:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Main routes

- `/` — Tabot support homepage
- `/privacy` — Privacy Policy
- `/delete-account` — Public account-deletion request form
- `/api/deletion-requests` — Proxies deletion requests to the Tabot API
- `/api/deletion-requests/confirm` — Confirms an emailed deletion token

The website never collects a user's Tabot password. The backend emails an
expiring verification link before a deletion request is completed.
