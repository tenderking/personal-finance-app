import { Links, Meta, Outlet, Scripts, ScrollRestoration, useLocation } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import DashboardLayout from "~/components/dashboard/Layout";

import styles from "./tailwind.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
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
