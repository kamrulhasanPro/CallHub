import React from "react";

const SearchAndFiltering = () => {
  return (
    <section className="flex flex-col sm:flex-row gap-6 items-center justify-between">
      <label className="input bg-base-300 rounded-[14px] border border-[#2B7FFF33] outline-none pl-5 w-full">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search by phone number, issue type..."
        />
      </label>

      <div className="w-full flex flex-wrap items-center justify-end-safe gap-4">
        {/* type filter */}
        <select
          defaultValue="Pick a color"
          className="select w-fit rounded-xl bg-base-300  border border-[#2B7FFF33] outline-none [&>*]:text-nowrap"
        >
          <option defaultChecked>All Type</option>
          <option>This Month</option>
          <option>This Year</option>
          <option>Total</option>
        </select>

        {/* issue filter */}
        <select
          defaultValue="Pick a color"
          className="select w-fit rounded-xl bg-base-300  border border-[#2B7FFF33] outline-none [&>*]:text-nowrap"
        >
          <option defaultChecked>All Issue</option>
          <option>Screen Issue</option>
          <option>Battery Issue</option>
          <option>Software Issue</option>
        </select>

        {/* date filter */}
        <select
          defaultValue="Pick a color"
          className="select w-fit rounded-xl bg-base-300  border border-[#2B7FFF33] outline-none [&>*]:text-nowrap"
        >
          <option defaultChecked>Today</option>
          <option>Last Week</option>
          <option>Last Month</option>
          <option>Last Year</option>
          <option>Total Year</option>
        </select>
      </div>
    </section>
  );
};

export default SearchAndFiltering;
