"use client";

import { LayoutDashboard, Menu } from "lucide-react";
import { SidebarNavItem } from "./SidebarNavItem";
import { LogoutButton } from "@/components/ui/LogoutButton";

const NAV_ITEMS = [{ href: "/dashboard", label: "Dashboard", icon: LayoutDashboard }];

interface SidebarProps {
  username: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ username, isCollapsed, onToggle }: SidebarProps) {
  return (
    <aside
      className={`flex h-screen shrink-0 flex-col bg-slate-900 text-white transition-all ${
        isCollapsed ? "w-16" : "w-60"
      }`}
    >
      <div
        className={`flex items-center gap-2 px-4 py-5 ${
          isCollapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!isCollapsed && (
          <div className="flex items-center gap-2 overflow-hidden">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-violet-700 text-sm font-bold">
              CC
            </div>
            <span className="truncate text-sm font-semibold">Cost Control</span>
          </div>
        )}
        <button
          type="button"
          onClick={onToggle}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md text-slate-300 transition hover:bg-slate-800 hover:text-white"
        >
          <Menu size={18} />
        </button>
      </div>

      <nav className="flex-1 space-y-1 px-3">
        {NAV_ITEMS.map((item) => (
          <SidebarNavItem key={item.href} {...item} isCollapsed={isCollapsed} />
        ))}
      </nav>

      <div className="border-t border-slate-800 px-3 py-3">
        {!isCollapsed && (
          <p className="px-3 pb-2 text-xs text-slate-400">
            Signed in as <span className="text-slate-200">{username}</span>
          </p>
        )}
        <LogoutButton isCollapsed={isCollapsed} />
      </div>
    </aside>
  );
}
