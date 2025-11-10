'use client';
import { useState } from "react";

export default function DashboardLayout({
  children,
  login,
  settings,
  analytics,
  team,
  home
}: {
  children: React.ReactNode;
  login: React.ReactNode;
  settings: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  home: React.ReactNode;
}) {
  const isLoggedIn = true; // pretend check
  const [active, setActive] = useState<"home" | "settings" | "analytics" | "team">('home');

  if (!isLoggedIn) return login;

  return (
    <div className="flex h-screen text-black bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-100 p-4">
        {children}
        <nav className="flex flex-col gap-2 cursor-default mt-10">
          <a onClick={() => setActive('home')}>🏠 Home</a>
          <a onClick={()=> setActive('settings')}>⚙️ Settings</a>
          <a onClick={()=> setActive('analytics')}>📊 Analytics</a>
          <a onClick={()=> setActive('team')}>👥 Team</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Parallel slots */}
        {active === "home" && home}
        {active === "settings" && settings}
        {active === "analytics" && analytics}
        {active === "team" && team}
      </main>
    </div>
  );
}
