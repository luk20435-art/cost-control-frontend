"use client";

import { useRouter } from "next/navigation";
import type { ProjectOption } from "@/features/dashboard/mockData";

interface ProjectSelectorProps {
  options: ProjectOption[];
  selectedNo: string;
}

export function ProjectSelector({ options, selectedNo }: ProjectSelectorProps) {
  const router = useRouter();

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    router.push(`/dashboard?project=${event.target.value}`);
  }

  return (
    <div className="mb-4 flex items-center gap-2">
      <label htmlFor="project-select" className="text-sm font-medium text-slate-600">
        Project
      </label>
      <select
        id="project-select"
        value={selectedNo}
        onChange={handleChange}
        className="rounded-md border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-800 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
      >
        {options.map((option) => (
          <option key={option.no} value={option.no}>
            {option.no} — {option.title}
          </option>
        ))}
      </select>
    </div>
  );
}
