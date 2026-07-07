import { redirect } from "next/navigation";
import { getMe } from "@/lib/api/server";
import { LoginForm } from "@/features/auth/LoginForm";

export default async function LoginPage() {
  const me = await getMe();

  if (me) {
    redirect("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <div className="mb-6 text-center">
          <h1 className="text-xl font-bold text-slate-900">
            Project Cost Control
          </h1>
          <p className="mt-1 text-sm text-slate-500">Sign in to continue</p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
