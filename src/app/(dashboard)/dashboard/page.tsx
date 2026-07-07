import { getDashboardData, getProjectOptions } from "@/features/dashboard/mockData";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { ProjectSelector } from "@/components/dashboard/ProjectSelector";
import { KpiTree } from "@/components/dashboard/KpiTree";
import { CostTable } from "@/components/dashboard/CostTable";
import { BudgetUsageSection } from "@/components/dashboard/BudgetUsageSection";

interface DashboardPageProps {
  searchParams: Promise<{ project?: string }>;
}

export default async function DashboardPage({ searchParams }: DashboardPageProps) {
  const { project: projectNo } = await searchParams;
  const [data, options] = await Promise.all([
    getDashboardData(projectNo),
    getProjectOptions(),
  ]);

  return (
    <div>
      <ProjectSelector options={options} selectedNo={data.project.no} />

      <DashboardHeader project={data.project} />

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <KpiTree tree={data.projectValueTree} />
        <KpiTree tree={data.pwoBudgetTree} />
      </div>

      <CostTable sections={data.costTable} />

      <BudgetUsageSection data={data.budgetUsage} />
    </div>
  );
}
