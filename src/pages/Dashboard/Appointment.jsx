import React from "react";
import StatusStatsSection from "../../components/sections/dashboard/Appointment/StatusStatsSection";
import BookingLink from "../../components/sections/dashboard/Appointment/BookingLink";
import BookingList from "../../components/sections/dashboard/Appointment/BookingList";

const Appointment = () => {
  return (
    <div className="space-y-6">
      <StatusStatsSection />
      <BookingLink />
      <BookingList />
    </div>
  );
};

export default Appointment;
