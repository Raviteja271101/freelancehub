import React from "react";
import { FiSearch } from "react-icons/fi";

const Searchbar = () => {
  return (
    <div>
      <div
        type="text"
        className="bg-[#FAF8F3] border-[#0D0D0D12] border max-w-85 flex items-center pl-2 "
      >
        <FiSearch className="text-[#9B9690] text-md" />
        <input
          type="text"
          className="w-full h-full px-2 py-2.5 outline-none text-base"
          placeholder="Search Clients"
        />
      </div>
    </div>
  );
};

export default Searchbar;
