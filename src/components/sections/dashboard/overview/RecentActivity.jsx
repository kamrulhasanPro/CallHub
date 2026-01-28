import React from "react";
import RecentActiveCard from "../../../cards/RecentActiveCard";

const RecentActivity = () => {
  const RecentActiveData = [
    {
      id: 1,
      message: "AI booked appointment for iPhone 13 screen repair",
      type: "appointment",
      timeAgo: "2 min ago",
    },
    {
      id: 2,
      message: "Warm transfer to technician - Software issue",
      type: "transfer",
      timeAgo: "5 min ago",
    },
    {
      id: 3,
      message: "Quote provided for iPad battery replacement",
      type: "quote",
      timeAgo: "8 min ago",
    },
    {
      id: 4,
      message: "Call dropped after 12 seconds",
      type: "call_failed",
      timeAgo: "15 min ago",
    },
  ];

  return (
    <div className="bg-base-300 rounded-2xl border border-[#2B7FFF33] p-6 w-full">
      <h4 className="text-xl">Recent Activity</h4>

      <div className="space-y-3 mt-4">
        {RecentActiveData.map((item) => (
          <RecentActiveCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
