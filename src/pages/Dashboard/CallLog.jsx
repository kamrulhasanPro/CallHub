import React from "react";
import SearchAndFiltering from "../../components/sections/dashboard/CallLog/SearchAndFiltering";
import CallListSection from "../../components/sections/dashboard/CallLog/CallListSection";

const CallLog = () => {
  return (
    <div>
      <SearchAndFiltering />
      <CallListSection />
    </div>
  );
};

export default CallLog;
