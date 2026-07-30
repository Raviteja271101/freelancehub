import { NavLink } from "react-router-dom";
import Signup from "./Signup";

const Login = () => {
  return (
    <div className="flex flex-col gap-5">
      Login
      <NavLink to="/signup">Signup</NavLink>
    </div>
  );
};

export default Login;
