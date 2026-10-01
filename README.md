# 🏋️ Team Iron Fit Gym & Food Supplements

> **Official Web Application & Progressive Web App (PWA)**  
> West Delhi's premier strength, conditioning, and transformation facility — owned and coached by **Master Coach Sumit Khatri**.

[![Next.js 16](https://img.shields.io/badge/Next.js-16.2.9_(Turbopack)-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React 19](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![PWA Ready](https://img.shields.io/badge/PWA-Installable-CCFF00?style=flat&logo=pwa&logoColor=black)](https://web.dev/progressive-web-apps/)
[![Vercel Hosted](https://img.shields.io/badge/Deployed-Vercel-000000?style=flat&logo=vercel)](https://gym-website-lac-zeta.vercel.app/)

---

## 📍 Facility & Contact Information

| Detail | Information |
| :--- | :--- |
| **Gym Name** | **Team Iron Fit Gym & Food Supplements** |
| **Owner & Head Coach** | **Sumit Khatri** (Certified Strength & Bodybuilding Coach) |
| **Senior Personal Trainer** | **Trainer Dipesh** (Biomechanics & Form Specialist) |
| **Strength Coach** | **Kartik Chhabra** (Powerlifting & Hypertrophy) |
| **Address** | GN4, Basement, Shivaji Enclave Extension, Near Khetarpal Nursing Home, Rajouri Garden, New Delhi, Delhi 110027 |
| **Direct Phone Calls** | [`+91 99104 16468`](tel:+919910416468) / [`+91 98218 11951`](tel:+919821811951) |
| **Official WhatsApp** | [`+91 99104 16468`](https://wa.me/919910416468?text=Hi%20Sumit%20ji%2C%20I%20want%20to%20know%20about%20current%20membership%20plans%20and%20offers%20at%20Team%20Iron%20Fit%20Gym) |
| **Google Maps Listing** | [View Team Iron Fit on Google Maps](https://www.google.com/maps/place/Team+Iron+Fit+Gym/@28.6547085,77.119742,17z/data=!4m7!3m6!1s0x390d037d76251a5b:0xc97cbe46c6404d4a!8m2!3d28.6547085!4d77.119742!16s%2Fg%2F11r8n4zbh4) |
| **Operating Hours** | **Mon – Sat:** 06:00 AM – 10:00 PM<br>**Sunday:** 08:00 AM – 02:00 PM |

---

## 🚀 Key Features & Highlights

### 1. 100% Real Google Maps Media & Reviews
- **35 High-Resolution Real Photos**: Replaced all stock photography with authentic high-res gym images from the Google Maps location (`/public/images/gym/gym_real_1.jpg` to `35.webp`).
- **Filterable Interactive Gallery**: Includes categories for Heavy Iron, Machines, Cardio Zone, Supplements Bar, and Coaches, complete with a full-screen lightbox preview.
- **Genuine Member Testimonials**: Authentic Google Maps reviews with real reviewer profile pictures from Rajouri Garden athletes.

### 2. Dynamic Owner Referral Pricing (No Fixed Pricing Traps)
- **Direct Owner Consultation**: Fixed rates and static prices have been replaced with dynamic package categories.
- **Dynamic Channels**: Every plan offers 1-click **WhatsApp Inquiry** (with pre-filled message text), **Direct Phone Call**, or **In-Person Gym Visit** to meet Coach Sumit Khatri.
- **Customized Package Flexibility**: Reflects seasonal discounts, student offers, and personalized 1-on-1 personal training splits.

### 3. Progressive Web App (PWA) — "Add to Home Screen"
- Converted from broken simulated APK downloads into an official W3C-compliant **Progressive Web App**.
- **1-Click Native Install**: Android Chrome/Edge users receive native install prompts (`beforeinstallprompt`) to install the gym app with 0 MB storage and no security warnings.
- **iOS Safari Guide**: Step-by-step guidance for iPhone users to add the app to their home screen via the Share sheet (`Share ⬆️` ➔ `Add to Home Screen ➕`).
- **Offline / Standalone Display**: Launches in standalone mode with custom `#CCFF00` theme color.

### 4. Member Digital QR Pass & Turnstile Simulator
- **Route**: `/member-pass`
- Generates a personalized QR access badge for members.
- Interactive turnstile gate simulator that authorizes entry and dispatches simulated access logs to the Owner Dashboard.

### 5. Private Owner Portal
- **Route**: `/owner-dashboard`
- Dedicated management view for Coach Sumit Khatri to monitor member attendance, recent scans, and gym floor activity.

### 6. Interactive Fitness Tools
- **Live BMI Calculator** (`/calculator`): Instant BMI calculation, weight category classification, and tailored dietary advice.
- **Interactive Weekly Schedule** (`/schedule`): Real-time training schedules across Morning Iron, Cardio Blitz, Strength Form, and Crossfit splits.

---

## 🏛️ Project Architecture

```
PowerGym/
├── public/
│   ├── images/
│   │   ├── avatars/              # Real Google Maps reviewer avatars
│   │   └── gym/                  # 35 Real gym photos & official logo
│   ├── logo.jpg                  # High-res Team Iron Fit brand badge
│   ├── logo.svg                  # SVG vector badge
│   ├── manifest.json             # PWA fallback manifest
│   └── vercel.svg
├── src/
│   ├── app/                      # Next.js App Router (13 Static Routes)
│   │   ├── layout.tsx            # Global layout with PWA metadata & viewport
│   │   ├── manifest.ts           # Dynamic Next.js Web App Manifest route
│   │   ├── page.tsx              # Landing page (Hero, Amenities, Gallery, etc.)
│   │   ├── amenities/page.tsx    # Equipment & amenities showcase
│   │   ├── calculator/page.tsx   # BMI & body composition calculator
│   │   ├── contact/page.tsx      # Location, timing & direct Sumit Khatri CTAs
│   │   ├── member-pass/page.tsx  # Member Digital QR Pass & turnstile check-in
│   │   ├── owner-dashboard/page.tsx # Coach Sumit Khatri management portal
│   │   ├── pricing/page.tsx      # Membership & packages referral page
│   │   ├── schedule/page.tsx     # Weekly workout splits & trainer timings
│   │   └── trainers/page.tsx     # Coach profiles (Sumit Khatri, Dipesh, Kartik)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── navbar.tsx        # Responsive navigation with digital pass link
│   │   │   └── footer.tsx        # Footer with real map link, timings & contact
│   │   ├── modals/
│   │   │   ├── membership-modal.tsx # Inquiry & pass generation modal
│   │   │   └── trailer-modal.tsx    # Gym walkthrough modal
│   │   ├── sections/
│   │   │   ├── hero.tsx          # High-impact hero with real gym background
│   │   │   ├── amenities.tsx     # 6 Equipment categories with real photos
│   │   │   ├── gallery.tsx       # Filterable 35-photo gallery with lightbox
│   │   │   ├── class-schedule.tsx# Daily class schedule
│   │   │   ├── bmi-calculator.tsx# On-page BMI calculator
│   │   │   ├── trainers.tsx      # Coach spotlight cards
│   │   │   ├── testimonials.tsx  # Real Google reviews & avatars
│   │   │   └── pricing.tsx       # Dynamic referral pricing cards & Sumit card
│   │   └── ui/
│   │       ├── app-download-popup.tsx # PWA "Add to Home Screen" modal
│   │       ├── button.tsx        # Accessible button component
│   │       └── card.tsx          # Card primitives
│   └── lib/
│       └── utils.ts              # Tailwind clsx/twMerge utilities
├── package.json                  # Dependencies & scripts
├── tsconfig.json                 # TypeScript compiler options
└── README.md                     # Project documentation
```

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router with Turbopack)
- **Language**: [TypeScript 5](https://www.typescriptlang.org/)
- **UI & Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Iconography**: [Lucide React](https://lucide.dev/)
- **PWA Standard**: Web App Manifest (`manifest.webmanifest`), Service Worker / Standalone capable
- **Hosting & CI/CD**: [Vercel](https://vercel.com/)

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (v18.17 or higher recommended)
- `npm` or `pnpm`

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/gym-website.git
   cd PowerGym
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm run start
   ```

---

## 📲 Installing the Mobile Web App (PWA)

### On Android (Chrome / Edge / Samsung Internet):
1. Open [https://gym-website-lac-zeta.vercel.app/](https://gym-website-lac-zeta.vercel.app/)
2. Tap the popup **"1-Click Install to Phone"** or tap the browser menu (⋮) ➔ **"Add to Home screen"** / **"Install app"**.
3. The official **Team Iron Fit** app icon will appear on your phone home screen.

### On iPhone / iPad (Safari):
1. Open the website in Safari.
2. Tap the **Share** button (`⬆️`) in the bottom navigation bar.
3. Scroll down and tap **"Add to Home Screen"** (`➕`).
4. Tap **Add** in the top-right corner.

---

## 📞 Support & Inquiries

For gym membership inquiries, personal training sessions, or supplement consultation:
- **Head Coach**: Sumit Khatri
- **Mobile / WhatsApp**: +91 99104 16468
- **Address**: Shivaji Enclave Extension, Near Khetarpal Nursing Home, Rajouri Garden, New Delhi 110027
- **Live Portal**: [https://gym-website-lac-zeta.vercel.app/](https://gym-website-lac-zeta.vercel.app/)
