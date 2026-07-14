import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div>
      AuthLayout
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default AuthLayout;
