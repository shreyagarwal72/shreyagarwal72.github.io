<p align="center">
  <img src="https://raw.githubusercontent.com/shreyagarwal72/Nextup-Studio/main/public/logo-dark.svg#gh-dark-mode-only" alt="Nextup Studio" width="220"/>
  <img src="https://raw.githubusercontent.com/shreyagarwal72/Nextup-Studio/main/public/logo-light.svg#gh-light-mode-only" alt="Nextup Studio" width="220"/>
</p>

<h1 align="center">Nextup Studio</h1>

<p align="center">
  <strong>The official creative hub of Vanshu Agarwal (Shrey)</strong><br/>
  Music • Minecraft • Mini-Games • AI Tools • Life Journey
</p>

<p align="center">
  <a href="https://nextup-studio.vercel.app" target="_blank">
    <img src="https://img.shields.io/badge/🌐_Live_Site-Nextup_Studio-6366F1?style=for-the-badge&logo=vercel" alt="Live Site"/>
  </a>
</p>

<p align="center">
  <img alt="GitHub release (latest SemVer)" src="https://img.shields.io/github/v/release/shreyagarwal72/Nextup-Studio?style=flat-square">
  <img alt="GitHub Workflow Status" src="https://img.shields.io/github/actions/workflow/status/shreyagarwal72/Nextup-Studio/ci.yml?branch=main&style=flat-square&label=build">
  <img alt="GitHub repo size" src="https://img.shields.io/github/repo-size/shreyagarwal72/Nextup-Studio?style=flat-square">
  <img alt="GitHub issues" src="https://img.shields.io/github/issues/shreyagarwal72/Nextup-Studio?style=flat-square">
  <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/shreyagarwal72/Nextup-Studio?style=flat-square">
  <img alt="GitHub" src="https://img.shields.io/github/license/shreyagarwal72/Nextup-Studio?style=flat-square">
  <img alt="Website" src="https://img.shields.io/website?url=https%3A%2F%2Fnextup-studio.vercel.app&style=flat-square&label=live">
  <img alt="Discord" src="https://img.shields.io/discord/1086745568605001829?label=chat&logo=discord&logoColor=white&style=flat-square">
</p>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎵 **Original Songs** | Stream & download Vanshu’s latest tracks. |
| 🎮 **Minecraft Universe** | Shorts, cinematics, Redstone builds. |
| 🧠 **Mini-Games & AI Tools** | TensorFlow.js powered mini-apps. |
| 📈 **Life Journey** | Interactive timeline with GSAP scroll. |
| 🔍 **Hidden Easter Eggs** | Try `/egg.html`, `/vault.html`, `/404.html`… |
| 🌓 **Auto Theme Toggle** | OS-level `prefers-color-scheme` + manual override. |
| 🎶 **Floating Music Player** | Persistent Web-Audio with playlist & FFT visualizer. |
| 🔐 **Google Identity** | One-tap sign-in, saves favorites to Firestore. |
| 📱 **PWA Ready** | Installable, offline cache, 100 Lighthouse score. |

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/shreyagarwal72/Nextup-Studio.git
cd Nextup-Studio

# 2. Install deps
npm i

# 3. Start dev server
npm run dev
# → http://localhost:3000

# Tech Stack 
Layer	Tech	
Frontend	Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion	
Auth	NextAuth.js (Google, Discord, GitHub)	
DB	Firebase Firestore (serverless)	
Storage	Firebase Cloud Storage (music + thumbnails)	
CI/CD	GitHub Actions → Vercel (zero-downtime)	
Analytics	Plausible (privacy-first)	
SEO	next-seo, dynamic sitemap, JSON-LD, Open Graph	
Testing	Jest + React Testing Library + Cypress (E2E)