import React from "react";
import Loading from "../../assets/shopping-loader.gif"; // Correct import

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full mt-28">
      <img src={Loading} alt="Loading..." />
    </div>
  );
}
