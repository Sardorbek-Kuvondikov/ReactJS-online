import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Navbar = () => {
  return (
    <>
      <nav className="p-5 bg-zinc-600 text-white">
        <ul className="flex items-center justify-evenly text-xl">
          <NavLink activeStyle={{ color: "#F59E0B" }} exact to={"/"}>
            <li className="border-b border-transparent hover:border-amber-500 cursor-pointer transition-all">
              Logo
            </li>
          </NavLink>
          <NavLink activeStyle={{ color: "#F59E0B" }} to={"/home"}>
            <li className="border-b border-transparent hover:border-amber-500 cursor-pointer transition-all">
              Home
            </li>
          </NavLink>
          <NavLink activeStyle={{ color: "#F59E0B" }} to={"/templates"}>
            <li className="border-b border-transparent hover:border-amber-500 cursor-pointer transition-all">
              Templates
            </li>
          </NavLink>
          <NavLink activeStyle={{ color: "#F59E0B" }} to={"/pages"}>
            <li className="border-b border-transparent hover:border-amber-500 cursor-pointer transition-all">
              Pages
            </li>
          </NavLink>
          <NavLink activeStyle={{ color: "#F59E0B" }} to={"elements"}>
            <li className="border-b border-transparent hover:border-amber-500 cursor-pointer transition-all">
              Elements
            </li>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
