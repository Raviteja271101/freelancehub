import React from "react";
import { revenueData } from "../../constants/chartData";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const RevenueChart = () => {
  return (
    <div className="bg-[#faf8f3] p-4   w-full h-full">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-[11px] font-bold tracking-[0.1em] uppercase text-[#6B6560] mb-0.5">
            Revenue vs Expenses
          </p>
          <p className="text-[22px] font-extrabold tracking-[-0.02em] m-0">
            $45,900
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[#E84D19]" />
            <span className="text-[11.5px] text-[#6B6560]">Revenue</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-[10px] h-[10px] rounded-[2px] bg-[rgba(13,13,13,0.2)]" />
            <span className="text-[11.5px] text-[#6B6560]">Expenses</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <AreaChart
          data={revenueData}
          responsive
          margin={{ top: 0, right: 0, bottom: 0, left: -23 }}
          className=" w-full h-full text-xs"
        >
          <defs>
            <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E84D19" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#E84D19" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="expGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0D0D0D" stopOpacity={0.08} />
              <stop offset="100%" stopColor="#0D0D0D" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid
            stroke="rgba(13,13,13,0.06)"
            strokeDasharray="0"
            vertical={false}
          />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `$${(v / 1000).toFixed(0)}k`}
          />
          <Tooltip
            cursor={{
              stroke: "#0D0D0D30",
            }}
            contentStyle={{
              backgroundColor: "#0D0D0D",
              // border: "1px solid rgba(255,255,255,0.16)",
              borderRadius: 4,
              color: "#ffffff",
              fontSize: "12px",
            }}
            labelStyle={{ color: "#ffffff" }}
            itemStyle={{ color: "#ffffff" }}
          />
          {/* <Legend className="pb-4" /> */}
          <Area
            type="monotone"
            stroke="#E84D19"
            dataKey="revenue"
            strokeWidth={3}
            dot={false}
            fill="url(#revGrad)"
            fillOpacity={1}
          />
          <Area
            type="monotone"
            stroke="#0D0D0D50"
            dataKey="expenses"
            strokeWidth={3}
            dot={false}
            fill="url(#expGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RevenueChart;
