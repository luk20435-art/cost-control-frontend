import type { KpiTreeRow3 } from "@/types/dashboard";

function fmt(n: number): string {
  return n.toLocaleString("en-US");
}

interface KpiRow3Props {
  data: KpiTreeRow3;
}

export function KpiRow3({ data }: KpiRow3Props) {
  const { pvTotal, pwoTotal, pwoOpResultWithOH, variant } = data;
  const diff = pvTotal - pwoTotal;
  const combined = diff + pwoOpResultWithOH;

  if (variant === "left") {
    return (
      <div className="col-span-2 rounded-md bg-blue-50 p-3">
        <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-blue-700">
          Project Value − PWO Budget
        </p>
        <p className="text-center text-sm text-slate-500">
          {fmt(pvTotal)}{" "}
          <span className="font-semibold text-slate-700">−</span>{" "}
          {fmt(pwoTotal)}{" "}
          <span className="font-semibold text-slate-700">=</span>{" "}
          <span className="font-bold text-blue-700">+ {fmt(diff)}</span>
        </p>
      </div>
    );
  }

  return (
    <div className="col-span-2 rounded-md bg-emerald-50 p-3">
      <p className="mb-2 text-center text-xs font-semibold uppercase tracking-wide text-emerald-700">
        (PV − PWO) + Operating Result with OH
      </p>
      <p className="text-center text-sm text-slate-500">
        + {fmt(diff)}{" "}
        <span className="font-semibold text-slate-700">+</span>{" "}
        {fmt(pwoOpResultWithOH)}{" "}
        <span className="font-semibold text-slate-700">=</span>{" "}
        <span className="font-bold text-emerald-700">+ {fmt(combined)}</span>
      </p>
    </div>
  );
}
