import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navLinkClass = ({ isActive }) => {
    return isActive ? "nav-link activated" : "nav-link";
  };
  return (
    <ul>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Dashboard
        </NavLink>
      </li>
    </ul>
  );
};
