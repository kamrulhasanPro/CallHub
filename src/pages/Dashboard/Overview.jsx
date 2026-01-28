import React from "react";
import StatsCard from "../../components/cards/statsCard";
import { RiRobot2Line } from "react-icons/ri";
import { BiTransfer } from "react-icons/bi";
import { MdOutlineDateRange } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaRegClock } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

const Overview = () => {
  const allStatsData = [
    {
      id: 1,
      label: "Total Calls Today",
      icon: <IoCallOutline />,
      iconBgGradient: ["#2563EB", "#60A5FA"],
      value: 127,
      growth: 12,
    },
    {
      id: 2,
      label: "AI-Handled Calls",
      icon: <RiRobot2Line />,
      iconBgGradient: ["#9333EA", "#EC4899"],
      value: 98,
      growth: 7,
    },
    {
      id: 3,
      label: "Warm Transfer",
      icon: <BiTransfer />,
      iconBgGradient: ["#F97316", "#FB923C"],
      value: 23,
      growth: 18,
    },
    {
      id: 4,
      label: "Appointments Booked",
      icon: <MdOutlineDateRange />,
      iconBgGradient: ["#16A34A", "#4ADE80"],
      value: 34,
      growth: 8,
    },
    {
      id: 5,
      label: "Missed/Failed Calls",
      icon: <IoIosCloseCircleOutline />,
      iconBgGradient: ["#DC2626", "#F87171"],
      value: 6,
      growth: -3,
    },
    {
      id: 6,
      label: "Avg Call Duration",
      icon: <FaRegClock />,
      iconBgGradient: ["#1D4ED8", "#3B82F6"],
      value: "3:42",
      growth: 5,
    },
  ];

  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allStatsData.map((stats, i) => (
          <StatsCard key={i} stats={stats}/>
        ))}
      </div>
    </section>
  );
};

export default Overview;
