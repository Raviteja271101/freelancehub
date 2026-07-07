import { Route, Router, Routes } from "react-router-dom";
import Signup from "./../pages/auth/Signup";
import Login from "./../pages/auth/Login";
import Home from "./../pages/Home";
import Dashboard from "./../pages/dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Clients from "../pages/dashboard/Clients";
const AppRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
