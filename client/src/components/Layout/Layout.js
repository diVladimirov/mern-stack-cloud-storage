import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../../assets/img/iconmonstr-cloud-21.svg";
import userOperations from "../../redux/user/userOperations";

const Layout = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <nav>
        <img src={Logo} alt="" />
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login Page</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Sign Up Page</NavLink>
          </li>
        </ul>
        <button type="button" onClick={() => dispatch(userOperations.logOut())}>
          Log Out
        </button>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
