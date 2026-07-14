// import { Outlet } from "react-router-dom";

import { LuTrendingUp } from "react-icons/lu";
import RevenueChart from "../../components/dashboard/RevenueChart";
import WeeklyChart from "../../components/dashboard/WeeklyChart";
import RecentProjects from "../../components/dashboard/RecentProjects";
import RecentActivity from "../../components/dashboard/RecentActivity";
import { dashboardStats } from "../../constants/chartData";

const Dashboard = () => {
  const time = new Date();
  let greet = "Hello";
  if (time.getHours() < 12) {
    greet = "Good Morning";
  }
  if (time.getHours() < 18) {
    greet = "Good Afternoon";
  } else {
    greet = "Good Evening";
  }

  return (
    <>
      <div className="w-full min-h-full bg-[#F0EDE6] py-8 px-8">
        <div className="flex flex-col gap-4">
          <h3 className="poppins text-xs font-bold uppercase tracking-wider text-[#6B6560]">
            Friday, July 10, 2026
          </h3>
          <div className="flex justify-between">
            <h1 className="text-3xl font-black text-[#0D0D0D]">
              {greet}, Raviteja.
            </h1>
            <button className="bg-[#E84D19] px-4 py-2.5 flex gap-2 items-center text-white rounded text-sm font-medium ">
              <LuTrendingUp /> New Project
            </button>
          </div>
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
                  <h3 className="text-[#0D0D0D] font-bold text-3xl">
                    {stats.value}
                  </h3>
                  <p className="text-xs">
                    {/* {stats.subtitle.icon} */}
                    {stats.subtitle.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 flex gap-6 flex-wrap flex-col md:flex-row">
            <div className="max-w-[700px] max-h-[370px] w-full">
              <RevenueChart />
            </div>
            <div className="flex-1">
              <WeeklyChart />
            </div>
          </div>
          <div className="flex gap-6 flex wrap flex-row w-full">
            <div className="w-full max-w-[700px]">
              <RecentProjects />
            </div>
            <div className="flex-1">
              <RecentActivity />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
