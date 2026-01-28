import React from "react";

const RepairRequestCard = ({ item }) => {
  const { label, request } = item;
  return (
    <div>
      {/* content */}
      <div className="flex items-center justify-between gap-1 ">
        <h5>{label}</h5>
        <p className="sm">{request} request</p>
      </div>

      {/* progress */}
      <progress
        className="progress progress-info w-full"
        value={request}
        max="100"
      ></progress>
    </div>
  );
};

export default RepairRequestCard;
