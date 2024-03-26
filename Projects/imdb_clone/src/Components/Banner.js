import React from "react";

const Banner = () => {
  return (
    <div
      className="h-[20vh] md:h-[52vh] bg-center bg-no-repeat flex items-end"
      style={{
        backgroundImage: `url(https://assets-in.bmscdn.com/discovery-catalog/events/et00311714-ewdhvajezf-landscape.jpg)`,
      }}
    >
      <div className="bg-opacity-60 p-4 w-[100%] text-center text-white text-xl md:text-3xl bg-gray-900">
        John Wick
      </div>
    </div>
  );
};

export default Banner;
