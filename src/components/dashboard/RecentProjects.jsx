import React from "react";
import { recentProjects } from "../../constants/chartData";

const RecentProjects = () => {
  const statusColors = {
    "In Progress": "#E84D19",
    Review: "#0D7A5F",
    "On Hold": "#9B6B00",
    Completed: "#1A6B1A",
  };
  return (
    <div className="grid gap-4 grid-cols-1 ">
      {/* Active Projects */}
      <div className="rounded p-5 bg-[#FAF8F3] border border-[rgba(13,13,13,0.08)]">
        <div className="flex items-center justify-between mb-4">
          <p className="text-[11px] font-bold tracking-widest uppercase text-[#6B6560] m-0">
            Active Projects
          </p>
          <span className="text-[12px] text-[#E84D19] font-semibold cursor-pointer">
            View all
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {recentProjects.map((p) => (
            <div key={p.name} className="flex items-center gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-[13.5px] font-semibold m-0 whitespace-nowrap overflow-hidden text-ellipsis">
                    {p.name}
                  </p>
                  <span className="text-[11.5px] font-mono font-medium text-[#6B6560] ml-3 shrink-0">
                    {p.value}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-[3px] bg-[rgba(13,13,13,0.1)] rounded-xs">
                    <div
                      style={{ width: `${p.progress}%` }}
                      className=" h-full rounded-[2px] bg-[#E84D19] transition-all duration-300"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-[#9B9690] shrink-0">
                    {p.progress}%
                  </span>
                  <span
                    className="px-2 py-0.5 rounded text-[10.5px] font-bold tracking-[0.05em] shrink-0"
                    style={{
                      background: `${statusColors[p.status]}18`,
                      color: statusColors[p.status],
                    }}
                  >
                    {p.status}
                  </span>
                  <span className="text-[11px] text-[#9B9690] shrink-0">
                    Due {p.due}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
