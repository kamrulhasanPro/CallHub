import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";
import { MdOutlineTaskAlt } from "react-icons/md";
import { RiErrorWarningLine } from "react-icons/ri";

const CallListCard = ({ call, clickCall, setClickCall }) => {
  const { id, phone, issueType, status, callType, duration, date } = call || {};
  const dateFormat = new Date(date);

  // dynamic outcome
  const outcomeMap = {
    "AI Resolved": "Quote Provided",
    "Warm Transfer": "Escalated to technician",
    Appointment: "Appointment Booked",
    Dropped: "Call Dropped",
  };

  const statusColor = {
    "AI Resolved": "text-green-400 bg-green-400/10 border border-green-400",
    "Warm Transfer":
      "text-orange-400 bg-orange-400/10 border border-orange-400",
    Appointment: "text-blue-400 bg-blue-400/10 border border-blue-400",
    Dropped: "text-red-400 bg-red-400/10 border border-red-400",
  };

  const getDurationTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div
      onClick={() => setClickCall(id)}
      className={`p-4 ${clickCall === id && "border-b-3 border-[#2B7FFF]"}`}
    >
      {/* number & date & type */}
      <div className="flex items-start gap-2 justify-between">
        <div className="flex gap-3 items-center">
          {/* icon */}
          <div
            className={`w-12 h-12 rounded-[14px]  flex items-center justify-center text-3xl bg-linear-to-b from-[#2B7FFF] to-[#00B8DB]`}
          >
            <IoCallOutline />
          </div>

          {/* content */}
          <div>
            <p>{phone}</p>
            <p className="smallText">
              {dateFormat.toLocaleDateString().split("/").join("-")} •{" "}
              {dateFormat.toLocaleTimeString()}
            </p>
          </div>
        </div>

        {/* type */}
        <div
          className={`py-1 px-2.5 border border-[#2B7FFF4D]  rounded-[10px] text-[#51A2FF] w-fit ${statusColor[status]} text-nowrap`}
        >
          {status}
        </div>
      </div>

      {/* more info */}
      <div className="flex items-center mt-3.5 gap-4">
        {/* duration */}
        <div className="flex items-center gap-1 smallText">
          <LuClock3 />
          <span>{getDurationTime(duration)}</span>
        </div>

        {/* type */}
        <div className="flex items-center gap-1 smallText">
          {status === "Dropped" ? <RiErrorWarningLine /> : <MdOutlineTaskAlt />}
          <span>{outcomeMap[status]}</span>
        </div>

        {/* Issue */}
        <div className="rounded-sm bg-[#2B7FFF33] text-[#51A2FF] px-1.5 py-0.5 w-fit">
          {issueType}
        </div>
      </div>
    </div>
  );
};

export default CallListCard;
