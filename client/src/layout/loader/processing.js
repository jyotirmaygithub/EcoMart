import React from "react";
import Processing from "../../assets/loader.gif"; // Correct import

export default function Loader() {
  return (
    <div className="flex justify-center items-center w-full mt-28">
      <img src={Processing} alt="Loading..." />
    </div>
  );
}
