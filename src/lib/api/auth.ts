import { apiFetch } from "./client";
import type { LoginRequest, LoginResponse, MeResponse } from "@/types/auth";

export function login(credentials: LoginRequest): Promise<LoginResponse> {
  return apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export function logout(): Promise<void> {
  return apiFetch<void>("/auth/logout", { method: "POST" });
}

export function getCurrentUser(): Promise<MeResponse> {
  return apiFetch<MeResponse>("/auth/me");
}
