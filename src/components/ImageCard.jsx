import React from "react";

const ImageCard = ({ image, name, location, date }) => {
  return (
    <div className=" bg-gray-400 pb-1">
      <div className="flex justify-center bg-gradient-to-r from-orange-400 via-red-500 to-pink-500">
        <img className=" object-cover inset-0 overflow-hidden" src={image} alt="contribution" />
      </div>

      <div className="h-16 flex items-center pt-1">
        {/* <div className="w-12 h-12  rounded-full bg-indigo-500 text-indigo-200 flex items-center justify-center font-semibold">
          JD
        </div> */}
        <div className="mx-2 flex flex-col">
          <div className="font-semibold text-lg text-blue-800">{name}</div>
          <div className="text-sm text-blue-700">
            {location} on {date && date.toDateString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
