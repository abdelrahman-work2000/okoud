import React from "react";
import spinner from "/assets/images/logo.jpg";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center fixed inset-0 bg-white animate-pulse">
      <img src={spinner} alt="Loading..." className="w-40 h-40" />
    </div>
  );
};

export default Spinner;
