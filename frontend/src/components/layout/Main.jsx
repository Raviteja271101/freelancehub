import React from "react";

const Main = () => {
  const pages = [
    {
      title: "Clients",
    },
  ];
  return (
    <div className="w-full min-h-full bg-[#F0EDE6] py-8 px-8">
      <div className="flex flex-col gap-4">
        <h3 className="poppins text-xs font-bold uppercase tracking-wider text-[#6B6560]">
          {title}
        </h3>
        <div className="flex justify-between">
          <h1 className="text-3xl font-black text-[#0D0D0D]">{}</h1>
          <button className="bg-[#E84D19] px-4 py-2.5 flex gap-2 items-center text-white rounded text-sm font-medium ">
            <LuTrendingUp /> New Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
