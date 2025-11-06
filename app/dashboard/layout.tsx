import type { Metadata } from "next";
import { headers } from "next/headers";

export const metadata: Metadata = {
  title: "Next .js App Structure Test Dashboard",
  description: "Testing Next.js app directory structure with modals",
};

//meta data can remove and use based on your need

export default async function RootLayout({
  login,
  settings,
  analytics,
  team,
}: {
  login: React.ReactNode;
  settings: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  const isLoggedIn = true;
  if (!isLoggedIn) return login;

  const headerList = await headers();
  const pathname = headerList.get('x-invoke-path') || '';

  return (
    <>
      <nav>Main dashboard nav bar</nav>
      <a href="/dashboard/settings">Settings</a>
      {pathname.includes('/settings') && settings}
    </>
  );
}