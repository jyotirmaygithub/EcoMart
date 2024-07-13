import React from "react";

const TotalBox = ({ cartlength, totalPrice, totalDiscount }) => {
  return (
    <div className="space-y-5 w-full">
      <div className="bg-white rounded-lg shadow-md p-5">
        <h4 className="text-lg font-semibold">
          Order Summary &nbsp; {cartlength} ({cartlength > 1 ? "items" : "item"})
        </h4>
        <div className="space-y-3 mt-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">Original Price</span>
            <p className="font-medium">{totalPrice}</p>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium">Discount</span>
            <p className="font-medium">
              <del>{totalDiscount}</del>
            </p>
          </div>

          <div className="flex justify-between items-center">
            <span className="font-medium">Delivery</span>
            <p className="font-medium">
              <b>Free</b>
            </p>
          </div>

          <hr className="border-t" />

          <div className="flex justify-between items-center">
            <div>
              <h4 className="text-lg font-semibold">Total Price</h4>
              <p className="text-sm text-gray-500">(Inclusive of all taxes)</p>
            </div>
            <p className="text-lg font-semibold">{totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalBox;
