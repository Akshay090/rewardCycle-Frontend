import React from "react";

const PageBtn = ({clickFxn, text}) => {
  return (
    <button
      onClick={clickFxn}
      className="text-xl font-semibold text-gray-800 bg-blue-400 rounded-lg px-2 mx-2 text-center"
    >
      {text}
    </button>
  );
};

export default PageBtn;
