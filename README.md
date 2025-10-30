# BPJS Kesehatan Healthkathon 2025 — Digital JKN System

> “Digitalizing JKN Registration and Services for a Healthier Indonesia.”

Proyek ini dikembangkan untuk **BPJS Kesehatan Healthkathon 2025**, berfokus pada transformasi digital layanan JKN.  
Platform terdiri dari dua bagian utama:
- **Landing Page** — menampilkan inovasi, tim, dan misi JKN Digital.  
- **Admin Panel** — mengelola data, pengguna, dan analitik sistem.  
- **Back-End (API)** — layanan Laravel yang menangani data dan autentikasi.  

---

## 🗂 Project Structure

```bash
hackathon-jkn/
├── back-end/ # Laravel RESTful API
│ ├── app/
│ ├── routes/
│ ├── database/
│ └── ...
│
├── front-end/ # React + Tailwind (Landing Page + Admin Panel)
│ ├── LandingPage/
│ │ ├── client/
│ │ ├── server/
│ │ └── shared/
│ │
│ └── admin-panel/
│ ├── src/
│ └── public/
│
├── .gitignore
├── LICENSE
└── README.md
```

---

## Tech Stack Overview

| Area | Technology | Description |
|------|-------------|-------------|
| **Frontend (Landing)** | React 18, Tailwind CSS 3 | Fast & responsive UI for public users |
| **Admin Panel** | React 18, Ant Design 5, Tailwind CSS 3 | Dashboard for data management & analytics |
| **Backend** | Laravel 11 (PHP 8.3), Sanctum | RESTful API, authentication & data layer |
| **Database** | MySQL / PostgreSQL | Relational data management |
| **Bundler** | Vite 5 | Lightning-fast dev & build setup |
| **Auth** | JWT / Laravel Sanctum | Secure session & API access |
| **State Management** | Zustand / Context API | Lightweight global state management |
| **Styling** | Tailwind CSS + Custom Utilities | Consistent design system |
| **Dark Mode** | Theme Context | Smooth toggle between light/dark |
| **Tooling** | TypeScript, ESLint, Prettier | Developer productivity & code quality |

---

## Project Goal

Menciptakan ekosistem **Digital JKN** yang efisien, transparan, dan inklusif melalui inovasi teknologi.

Fokus utama:
- Meningkatkan efisiensi pendaftaran peserta JKN secara digital  
- Menyediakan analitik real-time untuk administrator BPJS  
- Menyampaikan visi inovasi kepada publik melalui website interaktif  

---

## Design Guidelines (Landing Page)

### Design Approach
Healthcare government website aesthetic — profesional, modern, dan berfokus pada kredibilitas digital.

### Typography
- **Primary Font:** Poppins / Inter  
- **Hierarchy:**
  - Hero Headlines → Bold (3xl–6xl)
  - Section Headings → Semibold (2xl–4xl)
  - Body Text → Regular (base–lg)

### Color Palette

| Role | Color | Description |
|------|--------|-------------|
| Primary | #009B4C | BPJS Green |
| Secondary | #FFFFFF | Backgrounds |
| Tertiary | #F3F4F6 | Borders & neutrals |
| Accent | #A7E1F2 | Hover / highlights |
| Gradient | Green → Blue | Hero section background |

---

## Layout System

- Spacing scale: 2, 4, 6, 8, 12, 16, 20, 24  
- Section padding: `py-16` to `py-24` (desktop), `py-12` (mobile)  
- Grid gaps: `gap-6` to `gap-8`  
- Container max-width: `max-w-7xl`  

---

## Page Structure

### 1. Navbar
Sticky on scroll.  
BPJS logo left, nav menu right.  
Smooth scroll with mobile hamburger drawer.  

### 2. Hero Section
Full viewport height with gradient background.  
Headline, subheadline, and dual CTA buttons.  
Includes digital healthcare illustration and fade-in animation.  

### 3. About Section
Two-column grid with text and illustration.  

### 4. Features Section
2x2 grid with feature cards:
- One-Stop Online Registration  
- Integrated Health Data  
- Real-Time Tracking  
- Queue-Free System  

### 5. Statistics Section
Three-column grid with animated counters.  

### 6. Team Section
Responsive grid with photo, name, role, and social links.  

### 7. Innovation Demo Section
YouTube embed (16:9) with description text.  

### 8. Contact Section
Form with name, email, message, and green submit button.  

### 9. Footer
Multi-column layout with logo, copyright,
and social media links on a dark or green background.  

---

## Animations & Interactions

| Type | Description |
|------|--------------|
| Loading | Subtle spinner or pulse |
| Scroll | Fade-in, slide-up (Framer Motion) |
| Hover | Card lift, icon pulse |
| Counters | Animated number increase |
| Transitions | Smooth 300ms ease-in-out |

---

## Dark Mode

- Toggle switch in navbar  
- Inverts colors (dark backgrounds, light text)  
- Maintains BPJS green accent  
- Preference saved locally  

---

## Admin Panel Overview

| Feature | Description |
|----------|-------------|
| Dashboard | Overview of system metrics |
| User Management | Add/edit/remove users & roles |
| Analytics | Graphs for usage data |
| Logs | Track actions & performance |
| Modular Components | Reusable layout blocks |
| Secure Routes | Protected pages with auth check |

---

## Accessibility

- ARIA labels and keyboard navigation  
- WCAG color contrast compliance  
- Focus-visible enabled for all buttons and links  

---

## Setup & Run Instructions

### 1. Clone Repository
```bash
git clone https://github.com/username/hackathon-jkn.git
cd hackathon-jkn
```
### 2. Setup Back-End (Laravel)
```bash
cd back-end
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

### 3. Setup Front-End
```bash
cd ../front-end/LandingPage
npm install
npm run dev
```

### 4. Setup Admin Panel
```bash
cd ../admin-panel
npm install
npm run dev
```

