import React from "react";
import Logo from "../Assets/MovieLogo.png";
const Navabar = () => {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4 border">
      <img src={Logo} className="w-[60px]" />
      <h3 className="text-blue-400">Movies</h3>
      <h3 className="text-blue-400">WatchList</h3>
    </div>
  );
};

export default Navabar;
