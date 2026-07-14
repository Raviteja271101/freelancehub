import { NavLink } from "react-router-dom";
import Dashboard from "./../../pages/dashboard/Dashboard";
import { FiFileText } from "react-icons/fi";
import {
  LuCreditCard,
  LuFileText,
  LuFolderKanban,
  LuLayoutDashboard,
  LuLogOut,
  LuUsers,
  LuZap,
} from "react-icons/lu";
import { GoGear } from "react-icons/go";

const Sidebar = () => {
  const menuItems = [
    {
      title: "Dashboard",
      link: "/dashboard",
      icon: <LuLayoutDashboard />,
    },
    {
      title: "Clients",
      link: "/clients",
      icon: <LuUsers />,
    },
    {
      title: "Projects",
      link: "/projects",
      icon: <LuFolderKanban />,
    },
    // {
    //   title: "Payments",
    //   link: "/payments",
    //   icon: <LuCreditCard />,
    // },
    {
      title: "Invoices",
      link: "/invoices",
      icon: <LuFileText />,
    },
  ];
  return (
    <>
      <div className="flex flex-col bg-[#0D0D0D] text-[#FAF8F3] h-screen overflow-hidden py-4">
        <div className="w-full flex items-center gap-2 border-b border-[#ffffff0f] pb-6 pt-2 px-4">
          <LuZap size={25} className="bg-[#E84D19] p-1 rounded" />
          <h1 className="text-white font-medium text-xl ">FreelanceHub</h1>
        </div>
        <p className="poppins font-bold uppercase text-xs text-[rgba(255,255,255,0.3)] py-4 px-4 tracking-wide">
          Workspace
        </p>
        <div className="flex gap-4 flex-col px-4 ">
          {menuItems.map((e, idx) => (
            <div
              key={idx}
              className="flex gap-2  items-center text-[#ffffff8c] px-4  py-2 hover:text-white hover:bg-[#ffffff0f] cursor-pointer transition-all duration-300 rounded "
            >
              {/* <FiFileText />
            <LuLayoutDashboard /> */}

              <NavLink
                to={e.link}
                className="flex items-center gap-2 text-base active:text-yellow-200 "
              >
                {e.icon}
                {e.title}
              </NavLink>
            </div>
          ))}
        </div>

        <div className="mt-auto  ">
          <div className=" border-t border-[#ffffff0f] py-4 px-6 ">
            <div className="flex items-center py-2 px-4 gap-2 hover:text-white hover:bg-[#ffffff0f] cursor-pointer transition-all duration-300 rounded text-[#ffffff8c]">
              <GoGear />
              <h2 className=" ">Settings</h2>
            </div>
          </div>
          <div className="border-t border-[#ffffff0f] py-4 flex gap-1 items-center justify-between px-2 mx-4">
            {/* <h3 className="">Logout</h3> */}
            <div className="rounded-full bg-[#E84D19] size-10 flex items-center justify-center ">
              <h1 className="font-semibold">JD</h1>
            </div>
            <div>
              <h2 className="text-ellipsis overflow-hidden whitespace-nowrap text-sm font-semibold text-white max-w-30">
                James Durant bdiwdn
              </h2>
              <p className="truncate text-sm text-[#ffffff4d] max-w-30">
                james@freelance.iondqjdnkdjnlkq
              </p>
            </div>
            <LuLogOut className="text-[#ffffff4d] cursor-pointer" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
