import { ResponsiveSidebar } from "./SidebarResponsive";
import { useLocation } from "@remix-run/react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  // Map routes to labels
  const routeLabels: Record<string, string> = {
    "/": "Overview",
    "/transactions": "Transactions",
    "/pots": "Pots",
    "/recurring_bills": "Recurring Bills",
    "/budgets": "Budgets",
  };

  const currentRouteLabel = routeLabels[location.pathname]
  return (
    <div className="lg:flex bg-beige-100">
      <aside className="sidebar lg:h-dvh sticky top-0 z-50 "><ResponsiveSidebar /></aside>
      <main className="content p-4 w-screen">
        <header className="header py-4"><h1 className="text-bold">
          {currentRouteLabel}
        </h1>
        </header>

        {children}</main>
    </div>
  );
}