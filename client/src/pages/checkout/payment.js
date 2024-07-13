import React, { useState } from "react";
import { Typography, Grid, Button } from "@mui/material";
import { CreditCard } from "@mui/icons-material";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import CheckoutSteps from "../../utils/CheckoutSteps";
import OrderDetailsSection from "../../utils/OrderDetailsSection";
import ProcessingLoader from "../../layout/loader/processing";
import { dispalyMoney, generateDiscountedPrice } from "../../components/DisplayMoney/displayMoney";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Payment = () => {
  const navigation = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);

  const [check, setCheck] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("online");

  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  let originalPrice = dispalyMoney(totalPrice);
  let discountedPrice = generateDiscountedPrice(totalPrice);
  let totalDiscount = totalPrice - discountedPrice;
  let finalPrice = totalPrice - totalDiscount;
  finalPrice = dispalyMoney(finalPrice);
  totalDiscount = dispalyMoney(totalDiscount);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const handleSubmit = () => {
    // Simple validation
    if (paymentMethod === "online" && (!cardNumber || !expiryDate || !cvc)) {
      toast.error("Please fill in all card details.");
      return;
    }

    setCheck(true);
    setTimeout(() => {
      setCheck(false);
      navigation("/process/success");
    }, 1000);
  };

  return check ? (
    <ProcessingLoader />
  ) : (
    <div className="w-full bg-white overflow-hidden my-32">
      <ToastContainer />
      <CheckoutSteps />
      <div className="mt-7 flex w-full items-center justify-center flex-col-reverse sm:flex-row">
        <div className=" mx-2 flex flex-col items-center pl-2 bg-white w-full sm:w-1/2 mt-4 sm:mt-0 sm:p-8">
          <div className="flex items-center font-light bg-gray-100 w-full py-4 px-2 gap-2 mb-4">
            <AssuredWorkloadOutlinedIcon
              sx={{ color: "#F1C40F" }}
              className="text-2xl"
            />
            <Typography className="text-gray-700">
              Secure payment with 256-bit SSL encryption
            </Typography>
          </div>
          <div className="paymentForm space-y-5">
            <div className="p-4 border border-gray-200 rounded shadow w-full">
              <Typography className="flex items-center gap-2 font-medium mb-4">
                <CreditCard className="text-xl" /> Card Info
              </Typography>
              <Grid container spacing={2} className="w-full">
                <Grid item xs={12} className="relative mb-2">
                  <input
                    type="text"
                    placeholder="Card Number"
                    className="w-full p-4 border border-gray-700"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    disabled={paymentMethod !== "online"}
                  />
                </Grid>
                <Grid item xs={6} className="relative mb-2">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="w-full p-4 border border-gray-700"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    disabled={paymentMethod !== "online"}
                  />
                </Grid>
                <Grid item xs={6} className="relative mb-2">
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full p-4 border border-gray-700"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    disabled={paymentMethod !== "online"}
                  />
                </Grid>
              </Grid>
            </div>
            <hr />
            <div className="flex justify-center items-center space-x-2">
              <input
                id="online-checkbox"
                type="radio"
                name="paymentMethod"
                className="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                checked={paymentMethod === "online"}
                onChange={() => handlePaymentMethodChange("online")}
              />
              <label
                htmlFor="online-checkbox"
                className="text-lg font-semibold text-gray-700"
              >
                Pay Online
              </label>
              <input
                id="cod-checkbox"
                type="radio"
                name="paymentMethod"
                className="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                checked={paymentMethod === "cod"}
                onChange={() => handlePaymentMethodChange("cod")}
              />
              <label
                htmlFor="cod-checkbox"
                className="text-lg font-semibold text-gray-700"
              >
                Cash on Delivery
              </label>
            </div>
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              sx={{
                bgcolor: "#F1C40F",
                borderRadius: "20px",
                "&:hover": {
                  bgcolor: "#F1C40F",
                },
                textTransform: "none",
              }}
            >
              Place Order
            </Button>
          </div>
        </div>
        <div className="mx-2 flex flex-col items-center pl-2 bg-white w-full sm:w-1/2 mt-4 sm:mt-0 sm:p-8">
          <OrderDetailsSection
            cartlength={cartItems.length}
            totalPrice={originalPrice}
            totalDiscount={totalDiscount}
            totalprice={finalPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
