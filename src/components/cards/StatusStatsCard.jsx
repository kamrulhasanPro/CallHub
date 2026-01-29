import React from "react";

const StatusStatsCard = ({ stat }) => {
  const { title, value, growth, icon, color, growthPercent, trend } = stat || {};
  const growthHeigh = growthPercent > 0;

  return (
    <div className="border border-[#2B7FFF33] rounded-2xl bg-base-300 p-6 space-y-2">
      {/* icon & title */}
      <div className className="flex items-center gap-3">
        <span style={{ color: color, fontSize: "26px" }}>{icon}</span>
        {title}
      </div>

      <h5 className="text-2xl">{value}</h5>
      <p
        className={`text-sm ${growthHeigh ? "text-green-400" : "text-red-400"}`}
      >
        {growth}% this week {trend}
      </p>
    </div>
  );
};

export default StatusStatsCard;
