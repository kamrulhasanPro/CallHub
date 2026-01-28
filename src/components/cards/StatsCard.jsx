import React from "react";
import { IoCallOutline } from "react-icons/io5";

const StatsCard = ({ stats }) => {
  const { label, icon, iconBgGradient, value, growth } = stats;

  const growthHeigh = growth > 0;
  return (
    <div className="border border-[#2B7FFF33] rounded-2xl bg-base-300 p-6">
      <div className="flex items-start justify-between gap-1">
        <div>
          <p className="text-sm text-[#90A1B9]">{label}</p>
          <h4 className="text-2xl">{value}</h4>
          <p
            className={`text-sm ${growthHeigh ? "text-green-400" : "text-red-400"}`}
          >
            {growth}%
          </p>
        </div>

        <div
          className={`w-12 h-12 rounded-[14px]  flex items-center justify-center text-3xl`}
          style={{
            background: `linear-gradient(135deg, ${iconBgGradient[0]}, ${iconBgGradient[1]})`,
          }}
        >
          {/* icon */}
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
