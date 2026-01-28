import React from "react";
import { NavLink } from "react-router";

const MySideLink = ({ children, to, NavName }) => {
  const defaultStyle = "flex items-center gap-3 mx-2 py-1 px-2  border border-transparent";
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? `${defaultStyle} !border-[#77C0FF] rounded-xl bg-[#152252] shadow-[0_5px_18px_rgba(59,130,246,0.6),inset_0_1px_20px_2px_rgba(210,234,255,0.5)] cursor-pointer `
            : defaultStyle
        }
      >
        {/* <button> */}
        {/* Home icon */}
        {children}
        {/* <RxDashboard size={32} /> */}
        <span>{NavName}</span>
        {/* </button> */}
      </NavLink>
    </li>
  );
};

export default MySideLink;
