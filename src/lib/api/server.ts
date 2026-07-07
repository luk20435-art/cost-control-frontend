import { cookies } from "next/headers";
import type { MeResponse } from "@/types/auth";
import { API_BASE_URL } from "./client";

export async function getMe(): Promise<MeResponse | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get("cc_token")?.value;

  if (!token) {
    return null;
  }

  try {
    const res = await fetch(`${API_BASE_URL}/auth/me`, {
      headers: { Cookie: `cc_token=${token}` },
      cache: "no-store",
    });

    if (!res.ok) {
      return null;
    }

    return (await res.json()) as MeResponse;
  } catch {
    return null;
  }
}
