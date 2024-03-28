import React from "react";

const Pagination = ({ onPrev, onNext, currPage }) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <button
        onClick={onPrev}
        className="border-4 border-blue-800 m-4 p-2 rounded-lg"
      >
        Previous
      </button>
      <div>{currPage}</div>
      <button
        onClick={onNext}
        className="border-4 border-blue-800 m-4 p-2 rounded-lg"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
