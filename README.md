# navidakram.com & RosterFlow SaaS

Official Next.js application for **[navidakram.com](https://navidakram.com)** featuring:
- **Personal Portfolio & Showcase**: [navidakram.com](https://navidakram.com)
- **RosterFlow Workforce Management SaaS**: [navidakram.com/roster](https://navidakram.com/roster)
- **Embedded PostgreSQL & API Routes**: `/api/db` (powered by PGlite & Supabase compatibility)

---

## 🚀 Live Routes

| Route | Purpose | Tech |
|---|---|---|
| `/` | Portfolio, Projects, Articles, Interactive Resume & Contact | React 19, Tailwind CSS v4, Motion |
| `/roster` | RosterFlow AI Shift Scheduling & Workforce Operations SaaS | Next.js App Router, PGlite, Framer Motion |
| `/api/db` | PostgreSQL embedded database API endpoint | PGlite, Supabase-compatible schema |

---

## 🛠️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build production bundle
npm run build

# 4. Start production server locally
npm start
```

---

## 🌐 Deploying to Hostinger with GitHub

### Option A: Hostinger Node.js Application (Recommended for Web / Cloud Hosting)
1. **Connect GitHub in Hostinger**:
   - Go to your Hostinger hPanel.
   - Navigate to **Advanced** > **Git** or **Websites** > **Manage** > **Git**.
   - Connect repository `navidakram1/Navidakram.com` (Branch: `main`).
   - Deployment path: `public_html` (or your domain directory).

2. **Configure Node.js in Hostinger**:
   - In hPanel, go to **Advanced** > **Node.js**.
   - Select **Node.js version**: `20.x` or `22.x`.
   - **Application root**: `/` (or domain path).
   - **Application startup file**: `server.js` (a zero-config production wrapper is preconfigured in the repo root).
   - Click **Run npm install** or run build commands in the Hostinger terminal:
     ```bash
     npm install
     npm run build
     ```
   - Click **Restart Application**.

### Option B: Hostinger VPS / Docker
If deploying on a Hostinger Ubuntu/Debian VPS with PM2:
```bash
git clone https://github.com/navidakram1/Navidakram.com.git
cd Navidakram.com
npm install
npm run build
pm2 start server.js --name "navidakram"
pm2 save
```
Configure Nginx reverse proxy to forward traffic to `http://127.0.0.1:3000`.

---

## 🔒 Environment Variables (Optional)
If connecting external Supabase in the future:
```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
If not specified, the system runs with the embedded PostgreSQL (PGlite) engine automatically without needing external credentials.
