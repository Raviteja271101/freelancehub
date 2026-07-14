import { Route, Router, Routes } from "react-router-dom";
import Signup from "./../pages/auth/Signup";
import Login from "./../pages/auth/Login";
import Home from "./../pages/Home";
import Dashboard from "./../pages/dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Clients from "../pages/dashboard/Clients";
import AuthLayout from "../layouts/AuthLayout";
import Projects from "../pages/dashboard/Projects";
import Tasks from "../pages/dashboard/Tasks";
import Invoices from "../pages/dashboard/Invoices";
import Payments from "../pages/dashboard/Payments";
const AppRoutes = () => {
  return (
    <>
      <div>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/invoices" element={<Invoices />} />
            <Route path="/payments" element={<Payments />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};

export default AppRoutes;
