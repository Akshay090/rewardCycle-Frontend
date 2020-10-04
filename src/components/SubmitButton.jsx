import React from "react";

const SubmitButton = ({ color, text, submiting }) => {
  return (
    <button
      type="submit"
      className={`${color} text-sm mt-4 md:mx-2 rounded-lg py-2 px-4 block w-full`}
    >
      {submiting ? "submiting ..." : text}
    </button>
  );
};

export default SubmitButton;
