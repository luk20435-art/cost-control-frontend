"use client";

import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { logout } from "@/lib/api/auth";

interface LogoutButtonProps {
  isCollapsed?: boolean;
}

export function LogoutButton({ isCollapsed = false }: LogoutButtonProps) {
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      title={isCollapsed ? "Logout" : undefined}
      className={`flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white ${
        isCollapsed ? "justify-center" : ""
      }`}
    >
      <LogOut size={16} />
      {!isCollapsed && "Logout"}
    </button>
  );
}
