# frontend

Next.js (App Router) frontend for the Project Cost Control dashboard: a single login screen guarding a sidebar + dashboard shell. Authentication is delegated to the NestJS API in `../api-cost-control` (httpOnly JWT cookie). The dashboard page currently renders mock data shaped like a real cost-control API response, so swapping in real data later only touches one function.

## Prerequisites

- Node.js 18+
- The `api-cost-control` API running locally (this app calls it for login/session checks)

## Setup

```bash
npm install
cp .env.local.example .env.local
```

### Environment variables

| Variable | Description |
| --- | --- |
| `NEXT_PUBLIC_API_URL` | Base URL of the NestJS API. Default `http://localhost:3001`. Used both client-side (login form) and server-side (auth check in the dashboard layout). |

## Running

```bash
npm run dev
```

App runs on `http://localhost:3000`. Start `api-cost-control` first — every dashboard page load checks the session against it.

## Folder structure

```
src/
  app/
    page.tsx                 # "/" -> redirects to /dashboard
    login/page.tsx           # "/login" - public, renders LoginForm
    (dashboard)/              # route group: everything behind auth
      layout.tsx               # checks session (getMe), renders Sidebar + page
      dashboard/page.tsx        # "/dashboard" - the cost control mockup page
  proxy.ts                    # cheap "is there a session cookie" redirect for /dashboard/* (Next.js 16 proxy convention, formerly "middleware")
  features/
    auth/LoginForm.tsx        # client-side login form
    dashboard/mockData.ts     # MOCK_DASHBOARD_DATA + getDashboardData()
  components/
    layout/                   # Sidebar, SidebarNavItem
    dashboard/                # DashboardHeader, KpiTree, KpiBox, CostTable
    ui/                       # LogoutButton, etc.
  lib/api/
    client.ts                # low-level fetch wrapper (credentials, JSON, ApiError)
    auth.ts                  # login()/logout()/getCurrentUser() - browser-callable
    server.ts                # getMe() - server-only, forwards the session cookie to the API
  types/                     # auth.ts, dashboard.ts
```

## Auth flow

1. `/login` renders `LoginForm`, which posts to the API's `/auth/login` with `credentials: 'include'`. On success the API sets the `cc_token` httpOnly cookie and the form redirects to `/dashboard`.
2. `proxy.ts` guards `/dashboard/:path*`: if the `cc_token` cookie is simply *absent*, it redirects to `/login` before any rendering happens. This is a cheap presence check only — it does not verify the JWT (avoids JWT verification/network calls inside edge proxy).
3. The real check happens in `app/(dashboard)/layout.tsx`, a server component that calls `getMe()` (`lib/api/server.ts`). That function reads the `cc_token` cookie via `next/headers` and forwards it to the API's `GET /auth/me`, which verifies the JWT's signature and expiry. If that fails, the layout redirects to `/login`; otherwise it renders the `Sidebar` and the page.
4. `LogoutButton` calls `POST /auth/logout` (clears the cookie) and navigates back to `/login`.

## Adding a new sidebar item

Edit the `NAV_ITEMS` array in `src/components/layout/Sidebar.tsx` — add `{ href, label, icon }` (icon from `lucide-react`). `SidebarNavItem` handles the active-route highlighting automatically.

## Dashboard data

`src/features/dashboard/mockData.ts` exports `getDashboardData()`, an `async` function that currently just returns a hardcoded `DashboardData` object (see `src/types/dashboard.ts` for the shape: project header info, two KPI trees, and the cost breakdown table sections). It's declared `async` on purpose — when a real cost-control API endpoint exists, replace the function body with a `fetch` call; no caller (`app/(dashboard)/dashboard/page.tsx`) needs to change.

The KPI "tree" boxes and connector lines are a simplified visual approximation of the source spreadsheet layout (flex/grid + colored boxes), not pixel-perfect tree connectors.
