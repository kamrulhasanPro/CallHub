import { FaRegPlayCircle } from "react-icons/fa";

const CallDetails = ({ call }) => {
  const { id, phone, issueType, status, callType, duration, date } = call || {};

  //   dynamic outcome
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
    <div className="bg-base-300 rounded-2xl border border-[#2B7FFF33] w-full overflow-hidden">
      {/* title */}
      <div className="p-4 border-b border-[#2B7FFF33] ">
        <h4 className="text-2xl">Call Details</h4>
      </div>

      {/* content */}
      <div className="p-4 space-y-6">
        {/* button stats */}
        <div className="grid grid-cols-2 gap-4">
          {/* phone */}
          <div>
            <p className="smallText mb-1">Phone Number</p>
            <h6 className="">{phone}</h6>
          </div>

          {/* duration */}
          <div>
            <p className="smallText mb-1">Duration</p>
            <h6>{getDurationTime(duration)}</h6>
          </div>

          {/* Date & Time */}
          <div>
            <p className="smallText mb-1">Date & Time</p>
            <h6>{new Date(date).toLocaleString()}</h6>
          </div>

          {/* Issue Type */}
          <div>
            <p className="smallText mb-1">Issue Type</p>
            <h6>{issueType}</h6>
          </div>

          {/* Outcome */}
          <div>
            <p className="smallText mb-1">Outcome</p>
            <h6>{outcomeMap[status]}</h6>
          </div>

          {/* Call Type */}
          <div>
            <p className="smallText mb-1">Call Type</p>
            <div
              className={`py-1 px-2.5 border border-[#2B7FFF4D]  rounded-[10px] text-[#51A2FF] w-fit ${statusColor[status]} text-nowrap`}
            >
              {status}
            </div>
          </div>
        </div>

{/* audio play button */}
        <button className="border border-[#AD46FF4D] flex items-center justify-center w-full bg-[#AD46FF33] text-[#C27AFF] p-3 rounded-[14px] gap-1">
          <FaRegPlayCircle size={26}/>
          <span>Play Audio Recording</span>
        </button>

        <div>

        </div>
      </div>
    </div>
  );
};

export default CallDetails;
