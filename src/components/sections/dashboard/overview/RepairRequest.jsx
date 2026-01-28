import React from "react";
import RecentActiveCard from "../../../cards/RecentActiveCard";
import RepairRequestCard from "../../../cards/RepairRequestCard";

const RepairRequest = () => {
  const RepairRequestData = [
    {
      id: 1,
      label: "Screen Repair",
      request: 156,
    },
    {
      id: 2,
      label: "Battery Replacement",
      request: 89,
    },
    {
      id: 3,
      label: "Back Glass Repair",
      request: 67,
    },
    {
      id: 4,
      label: "Software Issues",
      request: 45,
    },
  ];

  return (
    <div className="bg-base-300 rounded-2xl border border-[#2B7FFF33] p-6  w-full">
      <h4 className="text-xl">Recent Activity</h4>

      <div className="space-y-3 mt-4">
        {RepairRequestData.map((item) => (
          <RepairRequestCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default RepairRequest;
