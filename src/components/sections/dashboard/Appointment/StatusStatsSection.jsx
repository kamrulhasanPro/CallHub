import React from "react";
import StatusStatsCard from "../../../cards/StatusStatsCard";
import { MdOutlineDateRange, MdOutlineTaskAlt } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

const StatusStatsSection = () => {
  const StatusStats = [
    {
      id: "stat_001",
      title: "Total Booked",
      value: 34,
      growth: 8,
      growthPercent: 30,
      trend: "up",
      icon: <MdOutlineDateRange />,
      color: "#3B82F6",
    },
    {
      id: "stat_002",
      title: "AI Booked",
      value: 28,
      growth: 5,
      growthPercent: 22,
      trend: "up",
      icon: <MdOutlineTaskAlt />,
      color: "#22C55E",
    },
    {
      id: "stat_003",
      title: "Pending",
      value: 3,
      growth: -2,
      growthPercent: -15,
      trend: "down",
      icon: <RiErrorWarningLine />,
      color: "#F97316",
    },
  ];

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {StatusStats.map((stat) => (
        <StatusStatsCard stat={stat} key={stat.id} />
      ))}
    </section>
  );
};

export default StatusStatsSection;
