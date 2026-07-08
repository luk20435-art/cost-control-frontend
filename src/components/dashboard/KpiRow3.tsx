import type { KpiTreeRow3 } from "@/types/dashboard";

function fmt(n: number): string {
  return n.toLocaleString("en-US");
}

interface KpiRow3Props {
  data: KpiTreeRow3;
}

export function KpiRow3({ data }: KpiRow3Props) {
  const { pvTotal, pwoTotal, pwoOpResultWithOH } = data;
  const diff = pvTotal - pwoTotal;
  const combined = diff + pwoOpResultWithOH;

  return (
    <div className="col-span-2 rounded-md bg-blue-50 p-3">
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-blue-700">
        Project Value − PWO Budget → Operating Result
      </p>
      <div className="space-y-1 text-center text-sm">
        <p className="text-slate-500">
          {fmt(pvTotal)}{" "}
          <span className="font-semibold text-slate-700">−</span>{" "}
          {fmt(pwoTotal)}{" "}
          <span className="font-semibold text-slate-700">=</span>{" "}
          <span className="font-bold text-blue-700">+ {fmt(diff)}</span>
        </p>
        <p className="text-slate-400 text-xs">↓</p>
        <p className="text-slate-500">
          + {fmt(diff)}{" "}
          <span className="font-semibold text-slate-700">+</span>{" "}
          {fmt(pwoOpResultWithOH)}{" "}
          <span className="font-semibold text-slate-700">=</span>{" "}
          <span className="font-bold text-emerald-700">+ {fmt(combined)}</span>
        </p>
      </div>
    </div>
  );
}
