import React, { useEffect, useState } from "react";
import CallListCard from "../../../cards/CallListCard";

// const getCallHistory = async () => {
//   try {
//     const res = await fetch("/CallsData.json");
//     const data = await res.json();
//     return data;
//   } catch (error) {
//     console.log("data fetching error", error.code);
//   }
// };

const CallListSection = () => {
  // const data = await getCallHistory();
  const [callHistory, setCallHistory] = useState("");
  const [clickCall, setClickCall] = useState(null);
  useEffect(() => {
    fetch("/data/CallsData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCallHistory(data);
        setClickCall(data[0]?.id)
      });
  }, []);

  if (!callHistory) {
    return <p>Loading.....</p>;
  }

  console.log(callHistory);
  return (
    <div className="bg-base-300 rounded-2xl border border-[#2B7FFF33] w-full overflow-hidden">
      <div className="p-4 border-b border-[#2B7FFF33] ">
        <h4 className="text-2xl">Call List</h4>
      </div>
      <div>
        {/* {Array.from({ length: 6 }).map((_, i) => (
          <CallListCard key={i} />
          ))} */}

        {callHistory.map((call, i) => (
          <CallListCard key={i} call={call} clickCall={clickCall} setClickCall={setClickCall}/>
        ))}
      </div>
    </div>
  );
};

export default CallListSection;
