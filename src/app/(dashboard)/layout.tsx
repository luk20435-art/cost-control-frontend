import { redirect } from "next/navigation";
import { getMe } from "@/lib/api/server";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default async function DashboardGroupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const me = await getMe();

  if (!me) {
    redirect("/login");
  }

  return <DashboardShell username={me.username}>{children}</DashboardShell>;
}
