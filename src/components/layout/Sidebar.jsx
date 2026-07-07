import { NavLink } from "react-router-dom";
import Dashboard from "./../../pages/dashboard/Dashboard";

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/clients">Clients</NavLink>
        <NavLink to="/projects">Projects</NavLink>
      </div>
    </>
  );
};

export default Sidebar;
