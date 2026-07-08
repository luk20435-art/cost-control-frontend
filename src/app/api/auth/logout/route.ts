import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export async function POST(_request: NextRequest) {
  const cookieStore = await cookies();
  const token = cookieStore.get("cc_token")?.value;

  if (token) {
    await fetch(`${API_BASE_URL}/auth/logout`, {
      method: "POST",
      headers: { Cookie: `cc_token=${token}` },
    }).catch(() => null);
  }

  const res = NextResponse.json({ success: true });
  res.cookies.delete("cc_token");
  return res;
}
