"use client";

import { useState } from "react";
import { Sidebar } from "./Sidebar";

interface DashboardShellProps {
  username: string;
  children: React.ReactNode;
}

export function DashboardShell({ username, children }: DashboardShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100">
      <Sidebar
        username={username}
        isCollapsed={isCollapsed}
        onToggle={() => setIsCollapsed((prev) => !prev)}
      />
      <main className="flex-1 overflow-y-auto p-6">{children}</main>
    </div>
  );
}
