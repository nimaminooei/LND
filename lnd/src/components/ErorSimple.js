import React from "react";
import { Link } from "react-router-dom";

function ErorSimple() {
  return (
    <div className="flex flex-col justify-center items-center h-screen  text-white">
      <div className="flex flex-row">
        <div className="text-[7em]">4</div>
        <div className="text-[7em]">0</div>
        <div className="text-[7em]">4</div>
      </div>
      <div className="mt-4 text-lg">Page Not Found</div>
      <Link
        to="/"
        className="mt-6 px-4 py-2 bg-yellow-500 text-black rounded transform transition-transform duration-200 hover:scale-105"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default ErorSimple;
