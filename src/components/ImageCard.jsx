import React from "react";

const ImageCard = ({ image, name, location, date }) => {
  return (
    <div className="max-w-md rounded-lg border-2 border-blue-900 my-3 w-full overflow-hidden sm:my-3 sm:px-1 md:my-3 md:px-1 md:w-1/2 lg:my-3 lg:px-1 lg:w-1/3 xl:my-3 xl:px-1 xl:w-1/3 mx-1">
      <div className="flex justify-center">
        <img
          className="w-64 h-64 object-cover inset-0"
          src={image}
          alt="contribution"
        />
      </div>

      <div className="h-16 bg-gray-400 mb-1 px-1 flex items-center">
        <div className="w-12 h-12  rounded-full bg-indigo-500 text-indigo-200 flex items-center justify-center font-semibold">
          JD
        </div>
        <div className="mx-4 flex flex-col">
          <div className="font-semibold text-lg text-blue-800">{name}</div>
          <div className="text-sm text-blue-700">
            {location} on {date}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
