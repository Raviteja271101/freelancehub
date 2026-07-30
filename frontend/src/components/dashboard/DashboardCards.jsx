import React from "react";
import { dashboardStats } from "../../constants/chartData";
import { FaArrowTrendDown, FaArrowTrendUp } from "react-icons/fa6";

const DashboardCards = () => {
  return (
    <div>
      <div className="grid grid-cols-4 w-full h-full gap-4 ">
        {dashboardStats.map((stats) => (
          <div
            key={stats.title}
            className="bg-[#faf8f3] border border-[rgba(13,13,13,0.08)]  p-6 flex flex-col gap-2 rounded"
          >
            <h1 className="text-[#6B6560] font-bold text-xs uppercase tracking-wider">
              {stats.title}
            </h1>
            <h3 className="text-[#0D0D0D] font-bold text-3xl">{stats.value}</h3>
            <p className="text-xs flex gap-2 items-center">
              {stats.icon === "up" ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
              {stats.subtitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
