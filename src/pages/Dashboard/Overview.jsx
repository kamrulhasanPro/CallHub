import React from "react";
import WeekCallsChartSection from "../../components/sections/dashboard/overview/WeekCallsChartSection";
import StatsSection from "../../components/sections/dashboard/overview/StatsSection";
import RecentActivity from "../../components/sections/dashboard/overview/RecentActivity";
import RepairRequest from "../../components/sections/dashboard/overview/RepairRequest";

const Overview = () => {
  return (
    <div className="space-y-6">
      {/* stats section */}
      <StatsSection />

      {/* weekend calls chart */}
      <WeekCallsChartSection />

      {/* recentActivity & Top repair */}
      <section className="flex gap-6">
        <RecentActivity />
        <RepairRequest />
      </section>
    </div>
  );
};

export default Overview;
