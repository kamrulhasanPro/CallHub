import { createBrowserRouter } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import CallLog from "../pages/Dashboard/CallLog";
import Overview from "../pages/Dashboard/Overview";
import Appointment from "../pages/Dashboard/Appointment";
import Setting from "../pages/Dashboard/Setting";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Overview,
      },
      {
        path: "call-log",
        Component: CallLog,
      },
      {
        path: "appointment",
        Component: Appointment,
      },
      {
        path: "setting",
        Component: Setting,
      },
    ],
  },
]);
