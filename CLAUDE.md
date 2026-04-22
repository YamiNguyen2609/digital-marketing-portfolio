# Project Workflow & Architecture (VCard Portfolio)

This file serves as a context document for Claude/AI agents to understand the structure, conventions, and workflow of this Next.js project.

## 1. Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript (`.tsx`, `.ts`)
- **Styling:** Vanilla CSS (`globals.css`). **Do not use TailwindCSS** unless explicitly requested.
- **React Version:** React 19

## 2. Project Architecture & Layout
The project follows a classic "VCard" layout (specifically modeled after the VCard 3 template). 
- **Layout Structure (`app/layout.tsx`):**
  - Uses an `.app-wrapper` flex container.
  - `<Sidebar />`: Sticky sidebar on the left containing the user's avatar, name, title, and contact info.
  - `<main className="main-content">`: Main scrollable area.
    - `<Navbar />`: Top navigation inside the main area.
    - `{children}`: Page content changes here based on the route.

## 3. Directory Structure
```
/app
  /layout.tsx       # Root layout containing Sidebar and Navbar
  /page.tsx         # About page (Home) - Bio, Services, Focus, Vision
  /resume/          # Resume page (Education, Experience, Skills)
  /portfolio/       # Portfolio projects
  /blog/            # Achievements / Blog posts
  /globals.css      # All global styles and component styles
/components
  /Sidebar.tsx      # Left sidebar component
  /Navbar.tsx       # Top navigation component
```

## 4. Styling Conventions
- **Vanilla CSS Only:** All styles are centralized in `app/globals.css`. 
- **CSS Variables:** Theming uses CSS variables defined in `:root` (e.g., `--bg`, `--card-bg`, `--accent`, `--text`).
- **Dark Theme Default:** 
  - Background: `#13131a`
  - Cards: `#1c1c25`
  - Accent: `#ffb400` (Yellow/Gold)
- **Class Naming:** Uses semantic and component-scoped class names (e.g., `.sidebar-avatar-wrap`, `.page-card`, `.section-title`) to keep styles organized without relying on BEM strictly, but maintaining clear hierarchy.
- **Layouts:** Heavily uses Flexbox and CSS Grid (e.g., `.what-doing-grid`, `.portfolio-grid`).

## 5. Development Workflow & Rules
1. **Component Creation:** When creating a new UI section, write the HTML structure in the `.tsx` file and append the corresponding CSS classes at the bottom of `globals.css` with a comment block header (e.g., `/* ── New Section ── */`).
2. **Icons:** Use emojis or simple SVG inline for icons.
3. **Responsive Design:** Keep in mind that the grid uses `auto-fill` and `minmax` for automatic responsiveness.
4. **Active States:** The Navbar uses `usePathname` to check the active route and append the `.active` class to the current link.
5. **Running Locally:** Use `npm run dev` to preview changes on `http://localhost:3000`.

## 6. Current State
- The foundational layout, Sidebar, and Navbar are complete.
- The "About" page (`app/page.tsx`) is implemented with Bio, What I'm Doing, Clients, and Focus/Vision sections.
- Further work will involve fleshing out `/resume`, `/portfolio`, and `/blog`.
