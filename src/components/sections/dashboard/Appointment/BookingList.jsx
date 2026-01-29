import React, { useMemo, useState } from "react";
import toast from "react-hot-toast";

const BookingList = () => {
  const [bookingData, setBookingData] = useState([]);
  useMemo(() => {
    try {
      fetch("/data/BookingData.json")
        .then((res) => res.json())
        .then((data) => setBookingData(data));
    } catch (error) {
      toast.error("Something faced error in booking data fetching");
    }
  }, []);

  console.log(bookingData);
  return (
    <section>
      {/* table */}
      <div className="rounded-2xl overflow-auto border-2 border-base-300">
        <table className="table w-full text-center text-nowrap ">
            {/* table head */}
          <thead className="bg-base-200 border-b border-gray-100 [&>*]:p-4 [&>*]:border-b-3  [&>*]:border-base-100 ">
            <th>Client Name</th>
            <th>Client Phone</th>
            <th>Client Mail</th>
            <th>Device</th>
            <th>Repair Type</th>
            <th>Date</th>
            <th>Slot No</th>
            <th>Start Time</th>
          </thead>

          {/* table data */}
          <tbody className="">
            {bookingData.slice(0, 5)?.map((item) => (
              <tr className="bg-base-200 [&>*]:p-4" key={item?.id}>
                <td>{item?.clientName}</td>
                <td>{item?.clientPhone}</td>
                <td>{item?.clientEmail}</td>
                <td>{item?.device}</td>
                <td>{item?.repairType}</td>
                <td>{item?.date}</td>
                <td>{item?.slot}</td>
                <td>{item?.startTime}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* pagination */}
      <div>
        
      </div>
    </section>
  );
};

export default BookingList;
