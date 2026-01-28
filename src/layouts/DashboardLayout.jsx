import React from "react";
import { NavLink, Outlet } from "react-router";
import MySideLink from "../components/share/MySideLink";
import { IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { BsCalendar2Date } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";
import { LuZap } from "react-icons/lu";
import Logo from "../components/share/Logo";
import { MdOutlineLogout } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Navbar */}
        <nav className="navbar bg-base-100 shadow-sm">
          <div className="flex-1 flex items-center gap-2">
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost md:hidden"
            >
              {/* Sidebar toggle icon */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </label>

            <p className="text-xl">Dashboard</p>
          </div>
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle mr-3"
              >
                <div className="indicator">
                  <FaRegBell size={30} />
                  <span className="badge badge-sm indicator-item">8</span>
                </div>
              </div>
              <div
                tabIndex={0}
                className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
              >
                <div className="card-body">
                  <span className="text-lg font-bold">8 Items</span>
                  <span className="text-info">Subtotal: $999</span>
                  <div className="card-actions">
                    <button className="btn btn-primary btn-block">
                      View cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Page content here */}
        <div className="p-4">
          <Outlet />
        </div>
      </div>

      {/* dashboard sidebar navigation */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <div className="flex min-h-full flex-col items-start bg-base-200 w-60">
          {/* logo */}
          <div className="flex items-center justify-center my-4 w-full">
            <Logo />
          </div>

          {/* Sidebar content here */}
          <ul className="flex flex-col w-full gap-5">
            {/* List item */}
            {/* overview */}
            <MySideLink to={"overview"} NavName={"Overview"}>
              <RxDashboard size={32} />
            </MySideLink>

            {/* call log */}
            <MySideLink to={"call-log"} NavName={"Call Log"}>
              <IoCallOutline size={32} />
            </MySideLink>

            {/* appointment */}
            <MySideLink to={"appointment"} NavName={"Appointment"}>
              <BsCalendar2Date size={32} />
            </MySideLink>

            {/* Setting */}
            <MySideLink to={"setting"} NavName={"Setting"}>
              <IoSettingsOutline size={32} />
            </MySideLink>

            {/* Setting */}
          </ul>

          {/* logout */}
          <div className="flex flex-col justify-end w-full pb-6 grow">
            <div className="flex items-center gap-3 mx-2 py-1 px-2 text-red-400 cursor-pointer">
              <MdOutlineLogout size={32} />
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
