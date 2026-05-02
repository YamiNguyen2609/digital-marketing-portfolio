# Project Workflow & Architecture (VCard Portfolio)

This file serves as a context document for Claude/AI agents to understand the structure, conventions, and workflow of this Next.js project.

## 1. Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (`.tsx`, `.ts`)
- **Styling:** Vanilla CSS (`globals.css`). **Do not use TailwindCSS** unless explicitly requested.
- **React Version:** React 19
- **Data Source:** Google Sheets API via `googleapis`

## 2. Project Architecture & Layout
The project follows a classic "VCard" layout (specifically modeled after the VCard 3 template). 
- **Layout Structure (`app/layout.tsx`):**
  - Wrapped in `<DataProvider>` to provide Google Sheets data globally to all client components.
  - Uses an `.app-wrapper` flex container.
  - `<Sidebar />`: Sticky sidebar on the left containing the user's avatar, name, title, and contact info.
  - `<main className="main-content">`: Main scrollable area.
    - `<Navbar />`: Top navigation inside the main area.
    - `{children}`: Page content changes here based on the route.

## 3. Data Flow & State Management
- **Google Sheets as CMS:** All content (Personal Info, Services, Portfolio, etc.) is managed via a Google Sheet.
- **API Route:** `app/api/sheets/route.ts` acts as a proxy to fetch raw data (`string[][]`) from the Google Sheets API safely on the server side.
- **Data Provider:** `provider/DataProvider.tsx` is a Client Component that fetches the raw data from `/api/sheets` once on mount, parses it into structured `SheetData`, and stores it in React state.
- **Data Context:** `context/DataContext.ts` exposes the `useData()` hook. Any component that needs data (like `Sidebar.tsx` or `page.tsx`) must use this hook and be marked with `'use client'`.

## 4. Directory Structure
```
/app
  /api/sheets/route.ts # API Route for Google Sheets fetching
  /layout.tsx       # Root layout containing DataProvider, Sidebar and Navbar
  /page.tsx         # About page (Home) - Bio, Services, Focus, Vision
  /resume/          # Resume page (Education, Experience, Skills)
  /portfolio/       # Portfolio projects
  /achievement/     # Achievements posts
  /globals.css      # All global styles and component styles
/components
  /Sidebar.tsx      # Left sidebar component (Client Component)
  /Navbar.tsx       # Top navigation component (Client Component)
/context
  /DataContext.ts   # Context definition and useData hook (Client Component)
/provider
  /DataProvider.tsx # Fetches and parses Google Sheets data (Client Component)
```

## 5. Styling Conventions
- **Vanilla CSS Only:** All styles are centralized in `app/globals.css`. 
- **CSS Variables:** Theming uses CSS variables defined in `:root` (e.g., `--bg`, `--card-bg`, `--accent`, `--text`).
- **Dark Theme Default:** 
  - Background: `#13131a`
  - Cards: `#1c1c25`
  - Accent: `#ffb400` (Yellow/Gold)
- **Class Naming:** Uses semantic and component-scoped class names (e.g., `.sidebar-avatar-wrap`, `.page-card`, `.section-title`) to keep styles organized without relying on BEM strictly, but maintaining clear hierarchy.
- **Layouts:** Heavily uses Flexbox and CSS Grid (e.g., `.what-doing-grid`, `.portfolio-grid`).

## 6. Development Workflow & Rules
1. **Component Creation:** When creating a new UI section, write the HTML structure in the `.tsx` file and append the corresponding CSS classes at the bottom of `globals.css` with a comment block header (e.g., `/* ── New Section ── */`).
2. **Icons:** Use emojis or simple SVG inline for icons. (FontAwesome is also linked in layout).
3. **Responsive Design:** Keep in mind that the grid uses `auto-fill` and `minmax` for automatic responsiveness.
4. **Active States:** The Navbar uses `usePathname` to check the active route and append the `.active` class to the current link.
5. **Client Components:** Components using `useData()` MUST include `'use client';` at the top of the file to prevent server-side compilation errors.
6. **Running Locally:** Use `npm run dev` to preview changes on `http://localhost:3000`.

## 7. Current State
- The foundational layout, Sidebar, and Navbar are complete.
- Data fetching architecture using Google Sheets, API routes, and Context Provider is fully implemented and optimized (1 request per mount).
- The "About" page (`app/page.tsx`) is implemented with dynamic data.
- Further work will involve fleshing out `/resume`, `/portfolio`, and `/achievement` to also use dynamic data from Context.
