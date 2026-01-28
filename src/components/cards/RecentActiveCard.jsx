import React from "react";

const RecentActiveCard = ({ item }) => {
  const { message, type, timeAgo } = item;

  const statusColor = {
    appointment: "status-success",
    transfer: "status-warning",
    quote: "status-primary",
    call_failed: "status-error",
  };

  return (
    <div className="flex p-3 rounded-[10px] bg-[#1D293D80] gap-2">
      {/* badge color */}
      <div
        aria-label="status"
        className={`status ${statusColor[type]}  mt-2`}
      ></div>

      {/* content */}
      <div>
        <h5 className="text-sm">{message}</h5>
        <p className="smallText">{timeAgo}</p>
      </div>
    </div>
  );
};

export default RecentActiveCard;
