import { NextRequest, NextResponse } from "next/server";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001";

export async function POST(request: NextRequest) {
  const body = await request.text();

  const upstream = await fetch(`${API_BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });

  const data = await upstream.json();

  if (!upstream.ok) {
    return NextResponse.json(data, { status: upstream.status });
  }

  // Forward the cookie from Railway but set it on the Vercel domain
  const setCookie = upstream.headers.get("set-cookie");
  const res = NextResponse.json(data, { status: upstream.status });

  if (setCookie) {
    // Extract token value from the upstream Set-Cookie header
    const tokenMatch = /cc_token=([^;]+)/.exec(setCookie);
    if (tokenMatch) {
      res.cookies.set("cc_token", tokenMatch[1], {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24,
        path: "/",
      });
    }
  }

  return res;
}
