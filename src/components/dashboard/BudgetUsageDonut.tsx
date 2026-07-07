"use client";

import { Cell, Pie, PieChart } from "recharts";
import type { BudgetUsageCategory } from "@/types/dashboard";

const SLICE_COLORS = ["#7c3aed", "#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#0ea5e9"];
const CHART_SIZE = 224;

interface BudgetUsageDonutProps {
  overallUsedPercent: number;
  categories: BudgetUsageCategory[];
}

export function BudgetUsageDonut({ overallUsedPercent, categories }: BudgetUsageDonutProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-56 w-56">
        <PieChart width={CHART_SIZE} height={CHART_SIZE}>
          <Pie
            data={categories}
            dataKey="share"
            nameKey="label"
            innerRadius="65%"
            outerRadius="100%"
            paddingAngle={2}
            stroke="none"
          >
            {categories.map((entry, index) => (
              <Cell key={entry.label} fill={SLICE_COLORS[index % SLICE_COLORS.length]} />
            ))}
          </Pie>
        </PieChart>

        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-3xl font-bold text-slate-900">{overallUsedPercent}%</span>
          <span className="text-xs uppercase tracking-wide text-slate-500">Used</span>
        </div>
      </div>

      <ul className="mt-4 flex flex-wrap justify-center gap-3 text-xs text-slate-600">
        {categories.map((entry, index) => (
          <li key={entry.label} className="flex items-center gap-1">
            <span
              className="h-2 w-2 rounded-full"
              style={{ backgroundColor: SLICE_COLORS[index % SLICE_COLORS.length] }}
            />
            {entry.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
