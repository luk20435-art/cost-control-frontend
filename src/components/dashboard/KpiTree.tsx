import type { ProjectKpiTree } from "@/types/dashboard";
import { KpiBox } from "./KpiBox";

interface KpiTreeProps {
  tree: ProjectKpiTree;
}

export function KpiTree({ tree }: KpiTreeProps) {
  return (
    <div className="rounded-lg bg-white p-5 shadow">
      <div className="mb-4 flex items-center justify-center rounded-md bg-violet-700 px-4 py-2 text-white">
        <span className="text-sm font-semibold uppercase tracking-wide">
          {tree.title}
        </span>
      </div>

      <div className="relative mb-4 flex items-center justify-center">
        <p className="text-2xl font-bold text-slate-900">{tree.totalValue}</p>
        <span className="absolute right-0 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
          {tree.rating}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <KpiBox {...tree.operationCost} />
        <KpiBox {...tree.operatingResult} />
        <KpiBox {...tree.operationCostWithOH} />
        <KpiBox {...tree.operatingResultWithOH} />
      </div>
    </div>
  );
}
