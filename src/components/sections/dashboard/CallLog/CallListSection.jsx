import React, { useEffect, useMemo, useState } from "react";
import CallListCard from "../../../cards/CallListCard";
import CallDetails from "./CallDetails";

const CallListSection = () => {
  const [callHistory, setCallHistory] = useState([]);
  const [clickCall, setClickCall] = useState("");

  // call history all
  useEffect(() => {
    fetch("/data/CallsData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCallHistory(data);
        setClickCall(data[0]?.id);
      });
  }, []);

  // each call
  const data = useMemo(() => {
    const find = callHistory.find((item) => item?.id === clickCall);
    console.log(find);
    return find;
  }, [clickCall, callHistory]);


  if (!callHistory) {
    return <p>Loading.....</p>;
  }

  return (
    <section className="flex gap-6">
      <div className="bg-base-300 rounded-2xl border border-[#2B7FFF33] w-full overflow-hidden">
        {/* title */}
        <div className="p-4 border-b border-[#2B7FFF33] ">
          <h4 className="text-2xl">Call List</h4>
        </div>

        {/* content */}
        <div>
          {callHistory.map((call, i) => (
            <CallListCard
              key={i}
              call={call}
              clickCall={clickCall}
              setClickCall={setClickCall}
            />
          ))}
        </div>
      </div>

      <CallDetails call={data} />
    </section>
  );
};

export default CallListSection;
