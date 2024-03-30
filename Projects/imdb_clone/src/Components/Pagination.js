import React, { memo } from "react";

const Pagination = ({ onPrev, onNext, currPage }) => {
  console.log("paginatino component");
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        onClick={onPrev}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Previous
      </button>
      <div>{currPage}</div>
      <button
        onClick={onNext}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Next
      </button>
    </div>
  );
};

export default memo(Pagination);
