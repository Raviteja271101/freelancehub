import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex flex-row w-full">
        <div className="w-45">FreelanceHub</div>
        <div className="flex justify-around w-full flex-1">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/clients">Clients</NavLink>
          <div className="flex gap-2">
            {/* <NavLink to="/signup">Signup</NavLink> */}
            <NavLink to="/login">Login</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
