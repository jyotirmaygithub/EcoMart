import React, { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import GifLoader from "../../layout/loader/gitLoader";
import CartItem from "./cartItem";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/displayMoney";
import {
  retrieveCartItems,
  removeItemFromCart,
} from "../../actions/cartAction";
import "./cart.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems, loading } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(retrieveCartItems());
  }, [dispatch]);

  function deleteCartItems(productId) {
    dispatch(removeItemFromCart(productId));
  }

  const checkoutHandler = () => {
    navigate("/process/shipping");
  };

 
  let totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  let discountedPrice = generateDiscountedPrice(totalPrice);
  let totalDiscount = totalPrice - discountedPrice;
  let final = totalPrice - totalDiscount;
  final = dispalyMoney(final);
  totalDiscount = dispalyMoney(totalDiscount);
  totalPrice = dispalyMoney(totalPrice);

  return (
    <>
      {loading ? (
        <GifLoader />
      ) : (
        <div className="cartPage">
          <div className="cart_HeaderTop">
            <div className="headerLeft">
              <Typography variant="h5" component="h1" className="cartHeading">
                Shopping Cart
              </Typography>
              <Typography variant="body2" className="cartText3">
                TOTAL ({cartItems.length} item) <b>{final}</b>
              </Typography>
            </div>
            <Typography
              variant="body2"
              className="cartText2"
              onClick={() => navigate("/")}
            >
              Continue Shopping
            </Typography>
          </div>

          <div className="separator_cart2"></div>

          {cartItems.length === 0 ? (
            <div className="emptyCartContainer">
              <RemoveShoppingCartIcon size={34} sx={{ color: "#F1C40F", fontSize: 54 }} />
              <Typography variant="h5" component="h1" className="cartHeading">
                Your Shopping Cart is Empty
              </Typography>
              <Typography variant="body2" className="cartText">
                Nothin' to see here.
              </Typography>
              <Typography variant="body2" className="cartText">
                Let's get shopping!
              </Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                  bgcolor: "#F1C40F",
                  borderRadius: "20px",
                  "&:hover": {
                    bgcolor: "#F1C40F",
                  },
                }}
              >
                Shop Now
              </Button>
            </div>
          ) : (
            <>
              {console.log("dgsf=", cartItems)}
              <div className="cart_content_wrapper">
                <div className="cart_left_container">
                  {cartItems.map((item) => (
                    <Link
                      to="#"
                      style={{ textDecoration: "none", color: "none" }}
                      key={item.productId}
                    >
                      <CartItem
                        item={item}
                        deleteCartItems={() => deleteCartItems(item.productId)}
                        length={cartItems.length}
                        id={item.productId}
                      />
                    </Link>
                  ))}
                </div>

                <hr />
                <div className="space-y-5 cart_right_container">
                  <div className="space-y-5 bg-white rounded-lg shadow-md p-5">
                    <h4 className="text-lg font-semibold">
                      Order Summary &nbsp; ({cartItems.length}{" "}
                      {cartItems.length > 1 ? "items" : "item"})
                    </h4>
                    <div className="space-y-3">
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
                          <p className="text-sm text-gray-500">
                            (Inclusive of all taxes)
                          </p>
                        </div>
                        <p className="text-lg font-semibold">{final}</p>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="contained"
                    onClick={checkoutHandler}
                    sx={{
                      bgcolor: "#F1C40F",
                      borderRadius: "20px",
                      "&:hover": {
                        bgcolor: "#F1C40F",
                      },
                    }}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Cart;
