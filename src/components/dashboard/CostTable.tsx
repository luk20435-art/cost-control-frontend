import type { CostTableSection } from "@/types/dashboard";

function formatNumber(value: number): string {
  return value.toLocaleString("en-US", { maximumFractionDigits: 2 });
}

function profitLossClass(value: number): string {
  if (value > 0) return "text-emerald-700";
  if (value < 0) return "text-red-700";
  return "text-slate-700";
}

interface CostTableProps {
  sections: CostTableSection[];
}

export function CostTable({ sections }: CostTableProps) {
  return (
    <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-5">
      {sections.map((section) => (
        <div
          key={section.title}
          className="overflow-hidden rounded-lg bg-white shadow"
        >
          <div className="bg-violet-700 px-3 py-2 text-center text-xs font-semibold uppercase tracking-wide text-white">
            {section.title}
          </div>
          <table className="w-full text-xs">
            <thead>
              <tr className="border-b border-slate-100 text-slate-500">
                <th className="px-2 py-1 text-left font-medium">Item</th>
                <th className="px-2 py-1 text-right font-medium">PWO Budget</th>
                <th className="px-2 py-1 text-right font-medium">Actual</th>
                <th className="px-2 py-1 text-right font-medium">P/L</th>
                <th className="px-2 py-1 text-right font-medium">%</th>
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, index) => (
                <tr key={`${section.title}-${index}`} className="border-b border-slate-50">
                  <td className="px-2 py-1 text-slate-600">{row.label}</td>
                  <td className="px-2 py-1 text-right text-slate-700">
                    {formatNumber(row.pwoBudget)}
                  </td>
                  <td className="px-2 py-1 text-right text-slate-700">
                    {formatNumber(row.actualCost)}
                  </td>
                  <td className={`px-2 py-1 text-right font-semibold ${profitLossClass(row.profitLoss)}`}>
                    {formatNumber(row.profitLoss)}
                  </td>
                  <td className={`px-2 py-1 text-right font-semibold ${profitLossClass(row.percentage)}`}>
                    {row.percentage.toFixed(2)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}
