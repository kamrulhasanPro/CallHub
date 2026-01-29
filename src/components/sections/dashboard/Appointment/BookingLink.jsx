import React from "react";
import toast from "react-hot-toast";
import { IoCopyOutline } from "react-icons/io5";

const BookingLink = () => {
  const value = "https://techstore.com/book?id=store123";
  const handleCopyLink = () => {
    navigator.clipboard.writeText(value);
    toast.success("Successfully Copied!")
  };

  return (
    <section className="rounded-2xl p-6 bg-linear-to-b from-[#1A1A2E] to-[#16213E] space-y-4">
      <h5>Booking Link</h5>

      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="Type here"
          className="input bg-[#0A0A0F80] rounded-[14px] border border-[#2B7FFF33] outline-none w-full"
          value={value}
          readOnly
        />

        {/* copy button */}
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-3 mx-2 py-1 px-2 border border-[#77C0FF] rounded-xl bg-[#152252] shadow-[inset_0_1px_20px_2px_rgba(210,234,255,0.5)] cursor-pointer text-nowrap"
        >
          <IoCopyOutline size={26} />
          <span>Copy Link</span>
        </button>
      </div>
    </section>
  );
};

export default BookingLink;
