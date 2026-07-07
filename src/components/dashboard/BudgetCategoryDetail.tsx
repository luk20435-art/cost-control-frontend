import { TriangleAlert } from "lucide-react";
import type { BudgetUsageCategory } from "@/types/dashboard";

function formatCurrency(value: number): string {
  return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
}

function getStatusLabel(usedPercent: number): { text: string; className: string } {
  if (usedPercent >= 100) return { text: "Over budget", className: "text-red-600" };
  if (usedPercent >= 90) return { text: "Near limit", className: "text-orange-600" };
  if (usedPercent >= 80) return { text: "Caution", className: "text-yellow-600" };
  return { text: "On track", className: "text-emerald-600" };
}

interface BudgetCategoryDetailProps {
  category: BudgetUsageCategory;
}

export function BudgetCategoryDetail({ category }: BudgetCategoryDetailProps) {
  const status = getStatusLabel(category.usedPercent);
  const remaining = category.allocatedAmount - category.actualAmount;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-3 gap-3 text-center">
        <div className="rounded-md bg-slate-50 p-3">
          <p className="text-xs text-slate-500">Allocated</p>
          <p className="text-sm font-semibold text-slate-800">
            {formatCurrency(category.allocatedAmount)}
          </p>
        </div>
        <div className="rounded-md bg-slate-50 p-3">
          <p className="text-xs text-slate-500">Used</p>
          <p className="text-sm font-semibold text-slate-800">
            {formatCurrency(category.actualAmount)}
          </p>
        </div>
        <div className="rounded-md bg-slate-50 p-3">
          <p className="text-xs text-slate-500">Remaining</p>
          <p className={`text-sm font-semibold ${remaining < 0 ? "text-red-600" : "text-slate-800"}`}>
            {formatCurrency(remaining)}
          </p>
        </div>
      </div>

      <div className={`flex items-center gap-2 text-sm font-medium ${status.className}`}>
        {category.usedPercent >= 100 && <TriangleAlert size={16} />}
        {status.text} — {category.usedPercent}% of budget used
      </div>

      <div>
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
          Breakdown
        </p>
        <ul className="divide-y divide-slate-100 text-sm">
          {category.lineItems.map((item) => (
            <li key={item.label} className="flex items-center justify-between py-2">
              <span className="text-slate-600">{item.label}</span>
              <span className="font-medium text-slate-800">{formatCurrency(item.amount)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
