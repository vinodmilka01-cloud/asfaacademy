# Implementation Plan - ACADEMY OF SPORTS AND FINE ARTS Website

## 1. Project Setup
- [ ] Initialize Next.js project with Tailwind CSS and TypeScript.
- [ ] Install dependencies: `framer-motion`, `aos`, `lucide-react`, `mongoose`, `next-auth`, `cloudinary`.
- [ ] Set up project structure (components, app, lib, models).

## 2. Design System & Assets
- [ ] Define color palette (Primary: #D10000, Secondary: #FFFFFF, Accent: Dark Red).
- [ ] Configure Tailwind theme with typography and colors.
- [ ] Initialize AOS for animations.
- [ ] Generate or find placeholders for missing images (using `generate_image`).

## 3. Core Components
- [ ] Navigation Bar (Mega menu style or simple responsive).
- [ ] Hero Section with animated text and background.
- [ ] Footer with social links and contact info.
- [ ] Shared UI components (Buttons, Cards, Modals).

## 4. Pages Implementation
- [ ] **Home Page**: Hero, Mission, Vision, Founder, Impact Counter, Programs, Showcase.
- [ ] **About Page**:
    - Vision & Mission subpage.
    - History & Founder Profile (Nenavath Vinod).
    - Team/Board Members.
- [ ] **Gallery Page**: Grid layout with Lightbox and Filter system (National/State/Activities).
- [ ] **Olympics Page**: Sections for Olympic and Junior athletes.
- [ ] **Paralympics Page**: Wheelchair athletes and differently-abled programs.
- [ ] **Contact Page**: Form and map integration.

## 5. Admin Panel & Backend
- [x] Set up Supabase project & tables.
- [x] Implement Authentication (Password-based session cookie).
- [x] Create centralized Supabase client utility.
- [x] Build Admin Dashboard UI with tabs for:
    - [x] Gallery Manager (Supabase Storage)
    - [x] Event Updates (Supabase DB)
    - [x] Sponsor Athletes (Supabase DB)
    - [x] Team Manager (Supabase DB)
- [x] Implement full CRUD + Inline Editing for all sections.
- [/] Data Sync Utility
    - [/] Create `/api/admin/sync` API for JSON & Storage migration.
    - [ ] Add "Sync Initial Data" button in Settings tab.

## 6. SEO & Optimization
- [ ] Metadata optimization (Title, Meta description).
- [ ] Structured data for NGO/Academy.
- [ ] Image optimization using Next.js Image component.
- [ ] Performance audit.

## 7. Final Polish
- [ ] Integration of AOS scroll effects.
- [ ] Mobile responsiveness check.
- [ ] User testing and bug fixes.
