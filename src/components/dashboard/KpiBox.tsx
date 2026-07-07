import type { KpiBoxData } from "@/types/dashboard";

const TONE_CLASSES: Record<KpiBoxData["tone"], string> = {
  purple: "bg-violet-100 text-violet-900 border-violet-200",
  blue: "bg-blue-900 text-white border-blue-900",
  green: "bg-emerald-100 text-emerald-900 border-emerald-200",
  red: "bg-red-100 text-red-900 border-red-200",
};

export function KpiBox({ label, value, tone }: KpiBoxData) {
  return (
    <div
      className={`rounded-lg border px-4 py-3 text-center shadow-sm ${TONE_CLASSES[tone]}`}
    >
      <p className="text-xs font-semibold uppercase tracking-wide opacity-80">
        {label}
      </p>
      <p className="mt-1 whitespace-pre-line text-sm font-bold leading-tight">
        {value}
      </p>
    </div>
  );
}
