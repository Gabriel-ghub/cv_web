import { useState } from "react";

export const InputText = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="text-black p-2 rounded w-full border border-black"
      value={value}
      onChange={onChange}
    />
  );
};
