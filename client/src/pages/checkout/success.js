import React, { useState, useEffect } from "react";
import { placeOrder } from "../../actions/ordersAction";
import CheckoutSteps from "../../utils/CheckoutSteps"
import Confetti from "react-confetti";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const [showConfetti, setShowConfetti] = useState(true);
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => setShowConfetti(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (cartItems.length > 0) {
      dispatch(placeOrder(cartItems));
    }
  }, [dispatch, cartItems]);

  return (
    <div className="flex items-center justify-center min-h-screen my-20">
      {showConfetti && <Confetti />}
      <div className="flex-col space-y-10">
      <CheckoutSteps/>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Order Placed Successfully!</h1>
        <p className="text-gray-700 mb-6">
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <button
          onClick={() => navigate("/")}
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Continue Shopping
        </button>
      </div>

      </div>
    </div>
  );
};

export default OrderSuccess;
