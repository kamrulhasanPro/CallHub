import React from "react";
import WeekCallsChartSection from "../../components/sections/dashboard/overview/WeekCallsChartSection";
import StatsSection from "../../components/sections/dashboard/overview/StatsSection";


const Overview = () => {
  return (
    <div className="space-y-6">
      {/* stats section */}
      <StatsSection />

      {/* weekend calls chart */}
      <WeekCallsChartSection />
    </div>
  );
};

export default Overview;
