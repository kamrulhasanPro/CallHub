import React, { useReducer, useState } from "react";

const ProfileSection = () => {
  const [editMode, setEditMode] = useState(false);
  const user = {
    name: "Lamiya Saiful",
    email: "kamrull116522@gmail.com",
    storeName: "CallHub BD",
    storeAddress: "1260 Dhaka Main City, Bangladesh",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SAVE":
        return action.payload;
      default:
        state;
    }
  };

  const [state, dispatch] = useReducer(reducer, user);

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
          {editMode || (
            <button
              onClick={() => setEditMode(true)}
              className="py-1 px-2  border border-[#77C0FF] rounded-xl bg-[#152252] shadow-[0_5px_18px_rgba(59,130,246,0.6),inset_0_1px_20px_2px_rgba(210,234,255,0.5)] cursor-pointer mb-2"
            >
              Edit Button
            </button>
          )}
        </div>
      </div>

      {/* profile */}
      {editMode ? (
        // profile edit section
        <EditSection
          state={state}
          dispatch={dispatch}
          setEditMode={setEditMode}
        />
      ) : (
        // profile info show section
        <div className="!nth-last-[div]:border-transparent @container">
          {/* name */}
          <InfoValue label={"Full Name"} value={state?.name} />

          {/* email */}
          <InfoValue label={"Email"} value={state?.email} />

          {/* store */}
          <InfoValue label={"Store Name"} value={state?.storeName} />

          {/* address */}
          <InfoValue label={"Store Address"} value={state?.storeAddress} />
        </div>
      )}
    </section>
  );
};

export const InfoValue = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2 @xs:flex-row text-left py-4 border-b border-[#192D71] last:border-transparent">
      <h6 className="col-span-1 text-xl font-medium flex-1 text-nowrap">
        {label}:
      </h6>
      <p className="col-span-5 text-xl flex-4">{value}</p>
    </div>
  );
};

export const EditSection = ({ setEditMode, state, dispatch }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const updateUser = {
      name: form.userName.value,
      email: form.email.value,
      storeName: form.storeName.value,
      storeAddress: form.storeAddress.value,
    };
    
    dispatch({ type: "SAVE", payload: updateUser });
    setEditMode(false);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-14"
    >
      <InputLabel
        id={"userName"}
        placeholder={"Your Name"}
        defaultValue={state?.name}
        label={"Full Name"}
      />
      <InputLabel
        id={"email"}
        placeholder={"your email"}
        defaultValue={state?.email}
        label={"Email"}
        readOnly={true}
      />
      <InputLabel
        id={"storeName"}
        placeholder={"Store Name"}
        defaultValue={state?.storeName}
        label={"Store Name"}
      />
      <InputLabel
        id={"storeAddress"}
        placeholder={"Store Address"}
        defaultValue={state?.storeAddress}
        label={"Store Address"}
      />

      <div className="flex flex-col items-center justify-center gap-2 w-full sm:col-span-2">
        {/* save btn */}
        <button
          type="submit"
          className="p-2 max-w-sm w-full rounded-2xl bg-green-400 text-white text-2xl font-bold cursor-pointer"
        >
          Save
        </button>

        {/* cancel btn */}
        <button
          type="button"
          onClick={() => setEditMode(false)}
          className="p-2 max-w-sm w-full rounded-2xl bg-red-400 text-white text-2xl font-bold cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
export default ProfileSection;

const InputLabel = ({
  label,
  defaultValue,
  id,
  placeholder,
  readOnly = false,
}) => {
  return (
    <label htmlFor={id} className="flex flex-col">
      <span className="text-xl font-medium mb-2">{label}</span>
      <input
        type="text"
        id={id}
        name={id}
        readOnly={readOnly}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className="input bg-[#0A0A0F80] rounded-[14px] border border-[#2B7FFF33] outline-none w-full"
      />
    </label>
  );
};
