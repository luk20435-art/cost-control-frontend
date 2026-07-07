import type { DashboardData } from "@/types/dashboard";

interface DashboardHeaderProps {
  project: DashboardData["project"];
}

function formatDate(value: string): string {
  return new Date(value).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export function DashboardHeader({ project }: DashboardHeaderProps) {
  return (
    <div className="mb-6 rounded-lg bg-violet-700 px-6 py-4 text-white shadow">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs uppercase tracking-wide text-violet-200">
            Project Cost Control
          </p>
          <h1 className="text-lg font-bold">{project.title}</h1>
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-violet-200">
            Project No
          </p>
          <p className="text-base font-semibold">{project.no}</p>
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-violet-200">
            Project Status
          </p>
          <p className="text-base font-semibold">{project.status}</p>
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-violet-200">
            Client
          </p>
          <p className="text-base font-semibold">{project.clientName}</p>
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-violet-200">
            Category
          </p>
          <p className="text-base font-semibold">{project.category}</p>
        </div>

        <div className="text-center">
          <p className="text-xs uppercase tracking-wide text-violet-200">
            Duration
          </p>
          <p className="text-base font-semibold">
            {formatDate(project.startDate)} - {formatDate(project.endDate)}
          </p>
        </div>

        <div className="text-right">
          <p className="text-xs uppercase tracking-wide text-violet-200">
            Project Controller
          </p>
          <p className="text-base font-semibold">{project.controllerName}</p>
        </div>
      </div>
    </div>
  );
}
