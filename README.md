# BPJS Kesehatan Healthkathon 2025 Landing Page - Design Guidelines

## Design Approach
“The visual language aims to build trust, clarity, and innovation, reflecting BPJS Kesehatan’s mission to make healthcare accessible and efficient through digital transformation.”

**Reference-Based Approach**: Healthcare government website aesthetic inspired by modern health-tech platforms, combining professional credibility with digital innovation. The design reflects BPJS Kesehatan's official identity while showcasing cutting-edge digital health solutions.

## Core Design Elements

### Typography
- **Primary Font**: Poppins or Inter
- **Hierarchy**: 
  - Hero Headlines: Bold, 3xl-6xl
  - Section Headings: Semibold, 2xl-4xl
  - Body Text: Regular, base-lg
  - Feature Cards: Medium, lg-xl

### Color Palette
- **Primary**: BPJS Green (#009B4C) - main brand color for CTAs, accents, and key elements
- **Secondary**: White - backgrounds and contrast
- **Tertiary**: Soft Gray - subtle backgrounds and borders
- **Accent**: Light Blue - complementary highlights and hover states
- **Gradient**: Subtle green-to-blue gradient for Hero section background

### Layout System
Tailwind spacing primitives: **2, 4, 6, 8, 12, 16, 20, 24**
- Section padding: py-16 to py-24 (desktop), py-12 (mobile)
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Container max-width: max-w-7xl

## Page Structure & Components

### 1. Navbar
- Sticky positioning on scroll
- BPJS Kesehatan logo/text left-aligned
- Navigation menu right-aligned: Home, About, Features, Innovation, Team, Contact
- Smooth scroll behavior to sections
- Mobile: Hamburger menu with slide-in drawer
- Background: White with subtle shadow on scroll

### 2. Hero Section
- **Layout**: Full viewport height (min-h-screen)
- **Background**: Subtle green-blue gradient overlay
- **Content**: 
  - Headline: "Digitalizing JKN Registration and Services for a Healthier Indonesia"
  - Subheadline explaining innovation purpose
  - Two CTAs: "See Our Innovation" (primary green) and "Learn More" (outline)
  - Buttons on gradient background: blurred glass-morphism effect backgrounds
- **Visual**: Healthcare illustration (doctor, patient, digital interface, BPJS card)
- Fade-in animation on load

### 3. About Section
- **Layout**: Two-column grid (desktop), stacked (mobile)
- Left: Text content about Healthkathon 2025 participation and JKN innovation goals
- Right: Healthcare-related illustration or image
- Background: White or soft gray
- Spacing: py-20

### 4. Features Section
- **Grid**: 2x2 layout (desktop), single column (mobile)
- **Four Feature Cards**:
  1. One-Stop Online Registration
  2. Integrated National Health Data
  3. Real-Time Service Tracking
  4. Queue-Free Digital System
- Card design: Icon top, title, description, hover lift effect
- Icons: Health-related (stethoscope, database, tracking, queue symbols)
- Card backgrounds: White with border, hover: subtle green shadow

### 5. Statistics Section
- **Grid**: 3-column layout (desktop), single column (mobile)
- **Metrics**:
  - "90% Faster Registration Time"
  - "1M+ Active JKN Digital Users"
  - "99% User Satisfaction"
- Animated counters (scroll-triggered)
- Large bold numbers with green accent
- Background: Light gray or gradient

### 6. Team Section
- **Grid**: 3-4 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Member cards with: Photo (circular or rounded), Name, Role, Social media icons
- Card hover: subtle scale transform
- Professional, clean card design

### 7. Innovation Demo Section
- **Layout**: Centered content
- YouTube video embed (16:9 aspect ratio, responsive)
- Paragraph above/below explaining system benefits
- Full-width or contained within max-w-6xl

### 8. Contact Section
- **Form Fields**: Name, Email, Message (textarea)
- Submit button: BPJS Green with hover state
- Form styling: Clean borders, focus states with green accent
- Alternative: CTA button linking to team email
- Background: White or subtle pattern

### 9. Footer
- **Layout**: Multi-column grid (desktop), stacked (mobile)
- BPJS Kesehatan logo
- "Healthkathon 2025" label
- Copyright text
- Social media icons
- Quick navigation links
- Background: Dark gray or BPJS Green with white text

## Animations & Interactions
- **Loading Animation**: Subtle spinner or pulse effect on initial load
- **Scroll Animations**: Fade-in, slide-up using Framer Motion
- **Hover Effects**: Card lifts, button state changes, icon pulses
- **Smooth Transitions**: All interactive elements (300ms ease-in-out)
- **Counter Animation**: Statistics numbers count up on scroll into view

## Special Features
- **Dark Mode Toggle**: Switch in navbar, inverts color scheme (dark backgrounds, light text, maintains green accent)
- **Responsive Breakpoints**: Mobile-first approach (sm: 640px, md: 768px, lg: 1024px, xl: 1280px)
- **Accessibility**: ARIA labels, keyboard navigation, sufficient contrast ratios

## Images
- **Hero Image**: Large healthcare illustration showing digital transformation (doctors using tablets, patients with smartphones, BPJS digital card, hospital interface) - positioned right side of hero or as background overlay
- **About Section**: Illustration of team collaboration or innovation concept
- **Team Photos**: Professional headshots (circular masks)
- **Icons**: Healthcare-themed SVG icons throughout (Heroicons or custom healthcare icon set)

This design creates a professional, government-appropriate aesthetic while showcasing modern digital innovation - perfect for a national-level hackathon presentation.