"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";

interface SidebarNavItemProps {
  href: string;
  label: string;
  icon: LucideIcon;
  isCollapsed: boolean;
}

export function SidebarNavItem({ href, label, icon: Icon, isCollapsed }: SidebarNavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      title={isCollapsed ? label : undefined}
      className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition ${
        isCollapsed ? "justify-center" : ""
      } ${
        isActive
          ? "bg-violet-700 text-white"
          : "text-slate-300 hover:bg-slate-800 hover:text-white"
      }`}
    >
      <Icon size={18} />
      {!isCollapsed && label}
    </Link>
  );
}
