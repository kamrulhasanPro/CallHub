import React from "react";

const ProfileSection = () => {
  return (
    <section className="space-y-10">
      {/* profile image */}
      <div>
        <p className="text-xl mb-2">Profile Image</p>

        <div className="flex items-end gap-2">
          <div className="w-28 rounded-full overflow-hidden">
            <img
              alt="Tailwind CSS Navbar component"
              className="object-cover"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>

          {/* edit button */}
          <button className="py-1 px-2  border border-[#77C0FF] rounded-xl bg-[#152252] shadow-[0_5px_18px_rgba(59,130,246,0.6),inset_0_1px_20px_2px_rgba(210,234,255,0.5)] cursor-pointer mb-2">
            Edit Button
          </button>
        </div>
      </div>

      {/* profile info content */}
      <div className="!nth-last-[div]:border-transparent @container">

        {/* name */}
        <InfoValue label={"Full Name"} value={"Kamrul Hasan"} />

        {/* email */}
        <InfoValue label={"Email"} value={"kamrul116522@gmail.com"} />

        {/* store */}
        <InfoValue label={"Store Name"} value={"Call Hub Bangladesh"} />

        {/* address */}
        <InfoValue
          label={"Store Address"}
          value={"123 Main Street, New York, NY 10001"}
        />
      </div>
    </section>
  );
};

export const InfoValue = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2 @xs:flex-row text-left py-4 border-b border-[#192D71] last:border-transparent">
      <h6 className="col-span-1 text-xl font-medium flex-1 text-nowrap">{label}:</h6>
      <p className="col-span-5 text-xl flex-4">{value}</p>
    </div>
  );
};
export default ProfileSection;
