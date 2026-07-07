import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex mt-4">
        <div className="w-62">
          <Sidebar />
        </div>
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
