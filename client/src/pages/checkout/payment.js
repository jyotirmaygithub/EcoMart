import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Typography,
  Grid,
  Radio,
  Button,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { CreditCard, Lock } from "@mui/icons-material";
import AssuredWorkloadOutlinedIcon from "@mui/icons-material/AssuredWorkloadOutlined";
import { toast } from "react-toastify";
// import { clearErrors, createOrder } from "../../actions/orderAction";
import CheckoutSteps from "../../utils/CheckoutSteps";
import OrderDetailsSection from "../../utils/OrderDetailsSection";

const Payment = () => {
  const { cartItems } = useSelector((state) => state.cart);
  // const { user } = useSelector((state) => state.user);
  // const { error } = useSelector((state) => state.newOrder);
  const [disableBtn, setDisableBtn] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");
  const [totalQuantity, setTotalQuanity] = useState(null);
  const [totalPrice, setTotalPrice] = useState(null);

  useEffect(() => {
    setTotalQuanity(cartItems.reduce((acc, item) => acc + item.quantity, 0));

    // Calculate total price
    setTotalPrice(
      cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
    );
  }, [cartItems]);
  return (
    <div className="py-4 w-full bg-white overflow-hidden">
      <CheckoutSteps activeStep={2} />
      <div className="flex w-full justify-around flex-col-reverse sm:flex-row">
        <div className="p-4 flex flex-col pl-2 bg-white w-full sm:w-1/2 mt-4 sm:mt-0 sm:p-8">
          <Typography className="font-bold mb-4 text-xl uppercase">
            Payment
          </Typography>
          <div className="flex items-center font-light bg-gray-100 w-full py-4 px-2 gap-2 mb-4">
            <AssuredWorkloadOutlinedIcon className="text-2xl" />
            <Typography className="text-gray-700">
              Secure payment with 256-bit SSL encryption
            </Typography>
          </div>
          <form className="paymentForm">
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
                  />
                </Grid>
                <Grid item xs={6} className="relative mb-2">
                  <input
                    type="text"
                    placeholder="Expiry Date"
                    className="w-full p-4 border border-gray-700"
                  />
                </Grid>
                <Grid item xs={6} className="relative mb-2">
                  <input
                    type="text"
                    placeholder="CVC"
                    className="w-full p-4 border border-gray-700"
                  />
                </Grid>
              </Grid>
            </div>
            <RadioGroup
              value={selectedPaymentMethod}
              onChange={(e) => setSelectedPaymentMethod(e.target.value)}
              className="flex items-center gap-2 my-4"
            >
              <FormControlLabel
                value="card"
                control={<Radio />}
                label={
                  <div className="flex items-center gap-2">
                    <Typography className="text-gray-500 cursor-pointer hover:text-black">
                      Pay with Card
                    </Typography>
                  </div>
                }
              />
            </RadioGroup>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              id="pay_btn"
              disabled={disableBtn}
              className="bg-black text-white font-medium text-lg py-2 px-4 rounded mt-4 hover:bg-gray-800"
            >
              Place Order
            </Button>
          </form>
        </div>
        <div className="flex flex-col items-end p-4 w-full sm:w-2/5 mt-4 sm:mt-0">
          <OrderDetailsSection totalQuantity={totalQuantity} totalPrice={totalPrice} />
        </div>
      </div>
    </div>
  );
};

export default Payment;
