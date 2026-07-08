export type KpiTone = "purple" | "blue" | "green" | "red";

export interface KpiBoxData {
  label: string;
  value: string;
  tone: KpiTone;
}

export interface KpiTreeRow3 {
  pvTotal: number;
  pwoTotal: number;
  pwoOpResultWithOH: number;
}

export interface ProjectKpiTree {
  title: string;
  totalValue: string;
  rating: string;
  operationCost: KpiBoxData;
  operatingResult: KpiBoxData;
  operationCostWithOH: KpiBoxData;
  operatingResultWithOH: KpiBoxData;
  row3?: KpiTreeRow3;
}

export interface CostTableRow {
  label: string;
  pwoBudget: number;
  actualCost: number;
  profitLoss: number;
  percentage: number;
}

export interface CostTableSection {
  title: string;
  rows: CostTableRow[];
}

export interface BudgetUsageLineItem {
  label: string;
  amount: number;
}

export interface BudgetUsageCategory {
  label: string;
  /** Share of total spend across categories, used to size the pie/donut slices (sums to ~100). */
  share: number;
  /** Percentage of allocated budget used so far; can exceed 100 to signal an overrun. */
  usedPercent: number;
  allocatedAmount: number;
  actualAmount: number;
  lineItems: BudgetUsageLineItem[];
}

export interface BudgetUsageData {
  /** Overall budget-used percentage shown in the center of the donut chart. */
  overallUsedPercent: number;
  categories: BudgetUsageCategory[];
}

export interface DashboardData {
  project: {
    no: string;
    title: string;
    status: string;
    clientName: string;
    category: string;
    startDate: string;
    endDate: string;
    controllerName: string;
  };
  projectValueTree: ProjectKpiTree;
  pwoBudgetTree: ProjectKpiTree;
  costTable: CostTableSection[];
  budgetUsage: BudgetUsageData;
}
