import React from "react";
import CallsChart from "../../../chart/CallsChart";

const WeekCallsChartSection = () => {
  const data = [
    { day: "Mon", calls: 45 },
    { day: "Tue", calls: 60 },
    { day: "Wed", calls: 55 },
    { day: "Thu", calls: 70 },
    { day: "Fri", calls: 85 },
    { day: "Sat", calls: 95 },
    { day: "Sun", calls: 58 },
  ];

  const totalCalls = data.reduce((pre, next) => pre + next.calls, 0);
  return (
    <section className="bg-base-300 rounded-2xl border border-[#2B7FFF33] p-6">
      <div className="mb-6 flex items-center justify-between">
        {/* content */}
        <div>
          <h4 className="text-xl">Call Trends - This Week</h4>
          <p className="text-sm text-[#90A1B9]">Total: {totalCalls} calls</p>
        </div>

        {/* sorting */}
        <select defaultValue="Pick a color" className="select bg-[#1D293D] w-fit outline-none">
          <option defaultChecked>This Week</option>
          <option>This Month</option>
          <option>This Year</option>
          <option>Total</option>
        </select>
      </div>

      {/* chart */}
      <CallsChart data={data} />
    </section>
  );
};

export default WeekCallsChartSection;
