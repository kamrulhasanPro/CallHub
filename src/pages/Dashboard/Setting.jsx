import React from "react";
import ProfileSection from "../../components/sections/dashboard/Setting/ProfileSection";

const Setting = () => {
  const defaultStyle =
    "tab  checked:text-[#87A2FF] hover:text-[#87A2FF] text-2xl";
  return (
    <>
      <div className="tabs tabs-border">
        {/* profile setting*/}
        <input
          type="radio"
          name="my_tabs_2"
          className={`${defaultStyle} pl-0 before:left-0`}
          aria-label="Profile"
          defaultChecked
        />
        <div className="tab-content border-transparent  border-t-[#192D71] pt-10 rounded-none">
          <ProfileSection />
        </div>

        {/* password setting */}
        <input
          type="radio"
          name="my_tabs_2"
          className={defaultStyle}
          aria-label="Password Setting"
        />
        <div className="tab-content border-transparent  border-t-[#192D71] pt-10 rounded-none">
          Password setting
        </div>
      </div>
    </>
  );
};

export default Setting;
