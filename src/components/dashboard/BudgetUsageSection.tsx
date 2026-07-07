import type { BudgetUsageData } from "@/types/dashboard";
import { BudgetUsageDonut } from "./BudgetUsageDonut";
import { BudgetUsageBars } from "./BudgetUsageBars";

interface BudgetUsageSectionProps {
  data: BudgetUsageData;
}

export function BudgetUsageSection({ data }: BudgetUsageSectionProps) {
  return (
    <div className="mt-6 rounded-lg bg-white p-5 shadow">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-600">
        Budget Usage by Department
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <BudgetUsageDonut
          overallUsedPercent={data.overallUsedPercent}
          categories={data.categories}
        />
        <div className="flex flex-col justify-center">
          <BudgetUsageBars categories={data.categories} />
        </div>
      </div>
    </div>
  );
}
