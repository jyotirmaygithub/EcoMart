import React from "react";
import Loading from "../../assets/shopping-loader.gif"; // Correct import

export default function Loader() {
  return (
    <div className="fixed inset-0  bg-white bg-opacity-80 flex justify-center items-center z-50">
      <img src={Loading} alt="Loading..." className="w-[60%]" />
    </div>
  );
}
