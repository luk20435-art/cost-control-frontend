"use client";

import { useState } from "react";
import { TriangleAlert } from "lucide-react";
import type { BudgetUsageCategory } from "@/types/dashboard";
import { Modal } from "@/components/ui/Modal";
import { BudgetCategoryDetail } from "./BudgetCategoryDetail";

interface BudgetUsageBarsProps {
  categories: BudgetUsageCategory[];
}

function getUsageTone(usedPercent: number): { bar: string; text: string } {
  if (usedPercent >= 100) return { bar: "bg-red-500", text: "text-red-600" };
  if (usedPercent >= 90) return { bar: "bg-orange-500", text: "text-orange-600" };
  if (usedPercent >= 80) return { bar: "bg-yellow-400", text: "text-yellow-600" };
  return { bar: "bg-violet-600", text: "text-slate-700" };
}

export function BudgetUsageBars({ categories }: BudgetUsageBarsProps) {
  const [selectedCategory, setSelectedCategory] = useState<BudgetUsageCategory | null>(null);

  return (
    <>
      <div className="space-y-3">
        {categories.map((category) => {
          const isOverBudget = category.usedPercent >= 100;
          const fillWidth = Math.min(category.usedPercent, 100);
          const tone = getUsageTone(category.usedPercent);

          return (
            <button
              key={category.label}
              type="button"
              onClick={() => setSelectedCategory(category)}
              className="block w-full text-left"
            >
              <div className="mb-1 flex items-center justify-between text-sm">
                <span className="font-medium text-slate-700 hover:underline">
                  {category.label}
                </span>
                <span className={`flex items-center gap-1 font-semibold ${tone.text}`}>
                  {isOverBudget && <TriangleAlert size={14} />}
                  {category.usedPercent}%
                </span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-full rounded-full ${tone.bar}`}
                  style={{ width: `${fillWidth}%` }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {selectedCategory && (
        <Modal title={selectedCategory.label} onClose={() => setSelectedCategory(null)}>
          <BudgetCategoryDetail category={selectedCategory} />
        </Modal>
      )}
    </>
  );
}
