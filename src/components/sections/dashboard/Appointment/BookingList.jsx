import React, { useMemo, useReducer, useState } from "react";
import toast from "react-hot-toast";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BookingList = () => {
  const [bookingData, setBookingData] = useState([]);
  const initialPagination = {
    page: 1,
    limit: 5,
    totalPage: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "NEXT":
        return { ...state, page: state.page + 1 };

      case "PREVIOUS":
        return { ...state, page: state.page - 1 };

      case "SET":
        return { ...state, page: action.payload };

      case "TOTAL":
        return { ...state, totalPage: action.payload / state.limit };

      default:
        state;
    }
  };
  const [state, dispatch] = useReducer(reducer, initialPagination);

  useMemo(() => {
    try {
      fetch("/data/BookingData.json")
        .then((res) => res.json())
        .then((data) => {
          setBookingData(data);
          dispatch({ type: "TOTAL", payload: data?.length });
        });
    } catch (error) {
      toast.error("Something faced error in booking data fetching");
    }
  }, []);

  return (
    <section>
      {/* table */}
      <div className="rounded-2xl overflow-auto border-2 border-base-300">
        <table className="table w-full text-center text-nowrap ">
          {/* table head */}
          <thead className="bg-base-200 border-b border-gray-100 [&>*]:p-4 [&>*]:border-b-3  [&>*]:border-base-100 ">
            <tr>
              <th>Client Name</th>
              <th>Client Phone</th>
              <th>Client Mail</th>
              <th>Device</th>
              <th>Repair Type</th>
              <th>Date</th>
              <th>Slot No</th>
              <th>Start Time</th>
            </tr>
          </thead>

          {/* table data */}
          <tbody className="">
            {bookingData
              .slice(
                state?.page * state?.limit,
                (state?.page + 1) * state?.limit,
              )
              ?.map((item) => (
                <tr className="bg-base-200 [&>*]:p-4" key={item?.id}>
                  <td className="text-primary">{item?.clientName}</td>
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
      <div
        className="flex items-center justify-center mt-5 gap-2
      "
      >
        {/* previous button */}
        <button
          onClick={() => dispatch({ type: "PREVIOUS" })}
          disabled={state.page === 0}
          className="flex items-center gap-1 text-primary cursor-pointer disabled:text-gray-400"
        >
          <IoIosArrowBack /> Previous
        </button>

        {/* page number */}
        <ul className="flex items-center gap-2">
          {[...Array(state?.totalPage)].map((_, i) => (
            <li
              onClick={() => dispatch({ type: "SET", payload: i })}
              className={`w-10 h-10 text-primary flex items-center justify-center text-semibold ${state?.page === i && "bg-[#A6C8FF] text-base-200"}`}
            >
              {i + 1}
            </li>
          ))}
        </ul>

        {/* next button */}
        <button
          disabled={state.page + 1 === state?.totalPage}
          onClick={() => dispatch({ type: "NEXT" })}
          className="flex items-center gap-1 text-primary cursor-pointer disabled:text-gray-400"
        >
          Next <IoIosArrowForward />
        </button>
      </div>
    </section>
  );
};

export default BookingList;
