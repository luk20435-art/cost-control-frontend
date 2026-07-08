import type { LoginRequest, LoginResponse, MeResponse } from "@/types/auth";
import { ApiError } from "./client";

async function proxyFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(path, {
    ...options,
    headers: {
      ...(options.body ? { "Content-Type": "application/json" } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    const body = await res.json().catch(() => null);
    throw new ApiError(res.status, body?.message ?? res.statusText);
  }

  if (res.status === 204) return undefined as T;
  return res.json() as Promise<T>;
}

export function login(credentials: LoginRequest): Promise<LoginResponse> {
  return proxyFetch<LoginResponse>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export function logout(): Promise<void> {
  return proxyFetch<void>("/api/auth/logout", { method: "POST" });
}

export function getCurrentUser(): Promise<MeResponse> {
  return proxyFetch<MeResponse>("/api/auth/me");
}
