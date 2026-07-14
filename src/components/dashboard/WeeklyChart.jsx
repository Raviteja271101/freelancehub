import React from "react";
import { weeklyData } from "../../constants/chartData";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const WeeklyChart = () => {
  return (
    <div className="w-full max-w-[330px] max-h-[300px] h-full bg-[#faf8f3] p-4">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#6B6560] mb-0.5">
            Weekly Hours
          </p>
          <p className="text-[22px] font-extrabold tracking-[-0.02em] m-0">
            126 Hrs
          </p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={140}>
        <BarChart
          data={weeklyData}
          responsive
          margin={{ top: 0, right: 0, bottom: 0, left: -35 }}
          className=" w-full h-full text-xs"
        >
          <CartesianGrid
            stroke="rgba(13,13,13,0.06)"
            strokeDasharray="0"
            vertical={false}
          />
          <XAxis dataKey="week" axisLine={false} tickLine={false} />
          <YAxis dataKey="hours" axisLine={false} tickLine={false} />
          {/* <Legend /> */}
          <Bar
            dataKey="hours"
            barSize={40}
            fill="#E84D19"
            radius={[3, 3, 0, 0]}
          />

          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
      <div className="border-t border-[#0D0D0D20]">
        <h3 className="font-bold text-xs pt-4 ">
          W4 best week
          <span className="font-normal text-[#6B6560]"> — 41hrs logged</span>
        </h3>
      </div>
    </div>
  );
};

export default WeeklyChart;
