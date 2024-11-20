import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import DashboardLayout from "~/components/dashboard/Layout";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];



export default function App() {
  const location = useLocation();

  // Check if the current route is "/login"
  const isLoginRoute = location.pathname === "/login";


  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {isLoginRoute ? (
          // No layout for login route
          <Outlet />
        ) : (
          // Use the dashboard layout for all other routes
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        )}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
