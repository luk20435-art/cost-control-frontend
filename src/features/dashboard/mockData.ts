import type { BudgetUsageCategory, DashboardData } from "@/types/dashboard";

function buildCategory(
  label: string,
  share: number,
  usedPercent: number,
  allocatedAmount: number,
): BudgetUsageCategory {
  const actualAmount = Math.round(allocatedAmount * (usedPercent / 100));
  const labor = Math.round(actualAmount * 0.6);
  const equipment = Math.round(actualAmount * 0.3);
  const other = actualAmount - labor - equipment;

  return {
    label,
    share,
    usedPercent,
    allocatedAmount,
    actualAmount,
    lineItems: [
      { label: "Labor", amount: labor },
      { label: "Equipment", amount: equipment },
      { label: "Other", amount: other },
    ],
  };
}

export const MOCK_PROJECTS: DashboardData[] = [
  {
    project: {
      no: "6389",
      title: "Offshore Installation WP04",
      status: "Continue",
      clientName: "IBCI",
      category: "Lump sum",
      startDate: "2026-01-15",
      endDate: "2026-09-30",
      controllerName: "Adisak Th.",
    },
    projectValueTree: {
      title: "Project Value",
      totalValue: "37,430,103",
      rating: "Excellent",
      operationCost: { label: "OPERATION COST", value: "10,145,658", tone: "purple" },
      operatingResult: {
        label: "OPERATING RESULT",
        value: "+ 27,284,445\n▲ PROFIT +73%",
        tone: "purple",
      },
      operationCostWithOH: { label: "OPERATION COST + OH", value: "24,313,972", tone: "blue" },
      operatingResultWithOH: {
        label: "OPERATING RESULT",
        value: "+ 13,116,131\n▲ PROFIT 35%",
        tone: "green",
      },
      row3: { pvTotal: 37_430_103, pwoTotal: 24_377_944, pwoOpResultWithOH: 63_972 },
    },
    pwoBudgetTree: {
      title: "PWO Budget",
      totalValue: "24,377,944",
      rating: "Excellent",
      operationCost: { label: "OPERATION COST", value: "10,145,658", tone: "purple" },
      operatingResult: {
        label: "OPERATING RESULT",
        value: "+ 14,232,286\n▲ PROFIT 58%",
        tone: "purple",
      },
      operationCostWithOH: { label: "OPERATION COST + OH", value: "24,313,972", tone: "blue" },
      operatingResultWithOH: {
        label: "OPERATING RESULT",
        value: "+ 63,972\n▲ PROFIT +0%",
        tone: "green",
      },
      row3: { pvTotal: 37_430_103, pwoTotal: 24_377_944, pwoOpResultWithOH: 63_972 },
    },
    costTable: [
      {
        title: "Manpower Offshore",
        rows: [
          { label: "PWO Budget", pwoBudget: 1901102, actualCost: 105014.24, profitLoss: 1796087.76, percentage: 94.48 },
        ],
      },
      {
        title: "Manpower Onshore",
        rows: [
          { label: "PWO Budget", pwoBudget: 10041200, actualCost: 2491432.92, profitLoss: 7549707.08, percentage: 75.19 },
        ],
      },
      {
        title: "Procurement",
        rows: [
          { label: "PWO Budget", pwoBudget: 6744192, actualCost: 6945854.89, profitLoss: -201662.89, percentage: -2.99 },
        ],
      },
      {
        title: "OH",
        rows: [
          { label: "Overhead Fix Cost", pwoBudget: 9040545, actualCost: 9040545, profitLoss: 0, percentage: 0 },
          { label: "Overhead Variable Cost", pwoBudget: 5127769, actualCost: 5127769, profitLoss: 0, percentage: 0 },
        ],
      },
      {
        title: "VIP",
        rows: [{ label: "VIP", pwoBudget: 0, actualCost: 0, profitLoss: 0, percentage: 0 }],
      },
    ],
    budgetUsage: {
      overallUsedPercent: 79,
      categories: [
        buildCategory("Manpower Onshore", 22, 75, 10041200),
        buildCategory("Manpower Offshore", 20, 94, 1901102),
        buildCategory("M&E", 16, 68, 4200000),
        buildCategory("Transport", 14, 112, 1850000),
        buildCategory("Procurement", 18, 82, 6744192),
        buildCategory("OH", 10, 88, 5127769),
      ],
    },
  },
  {
    project: {
      no: "6412",
      title: "Subsea Pipeline Tie-in",
      status: "Continue",
      clientName: "PTTEP",
      category: "Unit rate",
      startDate: "2026-03-01",
      endDate: "2026-12-15",
      controllerName: "Adisak Th.",
    },
    projectValueTree: {
      title: "Project Value",
      totalValue: "52,180,000",
      rating: "Good",
      operationCost: { label: "OPERATION COST", value: "18,400,000", tone: "purple" },
      operatingResult: {
        label: "OPERATING RESULT",
        value: "+ 33,780,000\n▲ PROFIT +64%",
        tone: "purple",
      },
      operationCostWithOH: { label: "OPERATION COST + OH", value: "29,950,000", tone: "blue" },
      operatingResultWithOH: {
        label: "OPERATING RESULT",
        value: "+ 22,230,000\n▲ PROFIT 42%",
        tone: "green",
      },
      row3: { pvTotal: 52_180_000, pwoTotal: 31_500_000, pwoOpResultWithOH: 1_550_000 },
    },
    pwoBudgetTree: {
      title: "PWO Budget",
      totalValue: "31,500,000",
      rating: "Good",
      operationCost: { label: "OPERATION COST", value: "18,400,000", tone: "purple" },
      operatingResult: {
        label: "OPERATING RESULT",
        value: "+ 13,100,000\n▲ PROFIT 41%",
        tone: "purple",
      },
      operationCostWithOH: { label: "OPERATION COST + OH", value: "29,950,000", tone: "blue" },
      operatingResultWithOH: {
        label: "OPERATING RESULT",
        value: "+ 1,550,000\n▲ PROFIT +5%",
        tone: "green",
      },
      row3: { pvTotal: 52_180_000, pwoTotal: 31_500_000, pwoOpResultWithOH: 1_550_000 },
    },
    costTable: [
      {
        title: "Manpower Offshore",
        rows: [
          { label: "PWO Budget", pwoBudget: 3200000, actualCost: 2980000, profitLoss: 220000, percentage: 6.88 },
        ],
      },
      {
        title: "Manpower Onshore",
        rows: [
          { label: "PWO Budget", pwoBudget: 8100000, actualCost: 7950000, profitLoss: 150000, percentage: 1.85 },
        ],
      },
      {
        title: "Procurement",
        rows: [
          { label: "PWO Budget", pwoBudget: 15600000, actualCost: 16100000, profitLoss: -500000, percentage: -3.21 },
        ],
      },
      {
        title: "OH",
        rows: [
          { label: "Overhead Fix Cost", pwoBudget: 6200000, actualCost: 6200000, profitLoss: 0, percentage: 0 },
          { label: "Overhead Variable Cost", pwoBudget: 3100000, actualCost: 3050000, profitLoss: 50000, percentage: 1.61 },
        ],
      },
      {
        title: "VIP",
        rows: [{ label: "VIP", pwoBudget: 0, actualCost: 0, profitLoss: 0, percentage: 0 }],
      },
    ],
    budgetUsage: {
      overallUsedPercent: 62,
      categories: [
        buildCategory("Manpower Onshore", 23, 60, 8100000),
        buildCategory("Manpower Offshore", 18, 55, 3200000),
        buildCategory("M&E", 17, 70, 5400000),
        buildCategory("Transport", 14, 65, 2300000),
        buildCategory("Procurement", 19, 58, 15600000),
        buildCategory("OH", 9, 64, 3100000),
      ],
    },
  },
  {
    project: {
      no: "6501",
      title: "Platform Decommissioning",
      status: "On Hold",
      clientName: "Chevron",
      category: "Lump sum",
      startDate: "2025-11-01",
      endDate: "2026-05-31",
      controllerName: "Adisak Th.",
    },
    projectValueTree: {
      title: "Project Value",
      totalValue: "19,250,000",
      rating: "Fair",
      operationCost: { label: "OPERATION COST", value: "9,800,000", tone: "purple" },
      operatingResult: {
        label: "OPERATING RESULT",
        value: "+ 9,450,000\n▲ PROFIT +49%",
        tone: "purple",
      },
      operationCostWithOH: { label: "OPERATION COST + OH", value: "14,100,000", tone: "blue" },
      operatingResultWithOH: {
        label: "OPERATING RESULT",
        value: "+ 5,150,000\n▲ PROFIT 27%",
        tone: "green",
      },
      row3: { pvTotal: 19_250_000, pwoTotal: 14_800_000, pwoOpResultWithOH: 700_000 },
    },
    pwoBudgetTree: {
      title: "PWO Budget",
      totalValue: "14,800,000",
      rating: "Fair",
      operationCost: { label: "OPERATION COST", value: "9,800,000", tone: "purple" },
      operatingResult: {
        label: "OPERATING RESULT",
        value: "+ 5,000,000\n▲ PROFIT 34%",
        tone: "purple",
      },
      operationCostWithOH: { label: "OPERATION COST + OH", value: "14,100,000", tone: "blue" },
      operatingResultWithOH: {
        label: "OPERATING RESULT",
        value: "+ 700,000\n▲ PROFIT +5%",
        tone: "red",
      },
      row3: { pvTotal: 19_250_000, pwoTotal: 14_800_000, pwoOpResultWithOH: 700_000 },
    },
    costTable: [
      {
        title: "Manpower Offshore",
        rows: [
          { label: "PWO Budget", pwoBudget: 2100000, actualCost: 2350000, profitLoss: -250000, percentage: -11.9 },
        ],
      },
      {
        title: "Manpower Onshore",
        rows: [
          { label: "PWO Budget", pwoBudget: 4200000, actualCost: 4000000, profitLoss: 200000, percentage: 4.76 },
        ],
      },
      {
        title: "Procurement",
        rows: [
          { label: "PWO Budget", pwoBudget: 5900000, actualCost: 6200000, profitLoss: -300000, percentage: -5.08 },
        ],
      },
      {
        title: "OH",
        rows: [
          { label: "Overhead Fix Cost", pwoBudget: 1900000, actualCost: 1900000, profitLoss: 0, percentage: 0 },
          { label: "Overhead Variable Cost", pwoBudget: 1000000, actualCost: 1050000, profitLoss: -50000, percentage: -5 },
        ],
      },
      {
        title: "VIP",
        rows: [{ label: "VIP", pwoBudget: 0, actualCost: 0, profitLoss: 0, percentage: 0 }],
      },
    ],
    budgetUsage: {
      overallUsedPercent: 104,
      categories: [
        buildCategory("Manpower Onshore", 18, 95, 4200000),
        buildCategory("Manpower Offshore", 17, 112, 2100000),
        buildCategory("M&E", 19, 88, 3300000),
        buildCategory("Transport", 16, 121, 1400000),
        buildCategory("Procurement", 20, 106, 5900000),
        buildCategory("OH", 10, 99, 2000000),
      ],
    },
  },
];

export interface ProjectOption {
  no: string;
  title: string;
}

export async function getProjectOptions(): Promise<ProjectOption[]> {
  return MOCK_PROJECTS.map(({ project }) => ({ no: project.no, title: project.title }));
}

export async function getDashboardData(projectNo?: string): Promise<DashboardData> {
  const match = MOCK_PROJECTS.find((p) => p.project.no === projectNo);
  return match ?? MOCK_PROJECTS[0];
}
