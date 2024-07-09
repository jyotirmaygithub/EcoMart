import React, { useState, useEffect } from "react";
import "./cart.css";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { retrieveCartItems, removeItemFromCart } from "../../actions/cartAction";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "./cartItem";
import { dispalyMoney, generateDiscountedPrice } from "../DisplayMoney/displayMoney";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);
  console.log("cartitems = " ,cartItems)

  useEffect(() => {
    dispatch(retrieveCartItems());
  }, [dispatch]);

  const [couponCode, setCouponCode] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isValid, setIsValid] = useState(true);

  const increaseQuantity = (id, quantity, stock) => {
    const newQty = quantity + 1;
    if (stock <= quantity) {
      return;
    } else {
      // dispatch(addItemToCart(id, newQty));
    }
  };

  const decreaseQuantity = (id, quantity) => {
    const newQty = quantity - 1;
    if (1 >= quantity) {
      return;
    }
    // dispatch(addItemToCart(id, newQty));
  };

  const handleApplyCoupon = () => {
    setIsValid(false);
  };

  const handleFocus = (event) => {
    setIsFocused(event.target.value !== "");
  };

  function deleteCartItems(productId) {
    console.log("product id = ",productId)
    dispatch(removeItemFromCart(productId));
  }

  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
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
            onClick={() => navigate("/products")}
          >
            Continue Shopping
          </Typography>
        </div>

        <div className="separator_cart2"></div>

        {cartItems.length === 0 ? (
          <div className="emptyCartContainer">
            <RemoveShoppingCartIcon className="cartIcon" />
            <Typography variant="h5" component="h1" className="cartHeading">
              Your Shopping Cart is Empty
            </Typography>
            <Typography variant="body2" className="cartText">
              Nothin' to see here.
            </Typography>
            <Typography variant="body2" className="cartText">
              Let's get shopping!
            </Typography>
            <Link to="/products">
              <Button className="shopNowButton">Shop Now</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart_content_wrapper">
              <div className="cart_left_container">
                {cartItems &&
                  cartItems.map((item) => (
                    <Link
                      to="#"
                      style={{ textDecoration: "none", color: "none" }}
                      key={item.productId}
                    >
                      <CartItem
                        item={item}
                        deleteCartItems={() => deleteCartItems(item.productId)}
                        decreaseQuantity={decreaseQuantity}
                        increaseQuantity={increaseQuantity}
                        length={cartItems.length}
                        id={item.productId}
                      />
                    </Link>
                  ))}
              </div>

              <div className="separator_cart3"></div>
              <div className="cart_right_container">
                <div className="order_summary">
                  <h4>
                    Order Summary &nbsp; ( {cartItems.length}{" "}
                    {cartItems.length > 1 ? "items" : "item"} )
                  </h4>
                  <div className="order_summary_details">
                    <div className="price order_Summary_Item">
                      <span>Original Price</span>
                      <p>{totalPrice}</p>
                    </div>

                    <div className="discount order_Summary_Item">
                      <span>Discount</span>
                      <p>
                        <del>{totalDiscount}</del>
                      </p>
                    </div>

                    <div className="delivery order_Summary_Item">
                      <span>Delivery</span>
                      <p>
                        <b>Free</b>
                      </p>
                    </div>

                    <div className="separator_cart"></div>
                    <div className="total_price order_Summary_Item">
                      <div>
                        <h4>Total Price</h4>
                        <p
                          style={{
                            fontSize: "14px",
                            marginTop: "-10px",
                            color: "#414141",
                          }}
                        >
                          (Inclusive of all taxes)
                        </p>
                      </div>
                      <p>
                        <b>{final}</b>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="separator"></div>

                <div className="coupon-box-wrapper">
                  <div
                    className={`coupon-box-content ${
                      isFocused ? "focused" : ""
                    }`}
                  >
                    <TextField
                      label="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      onFocus={handleFocus}
                      onBlur={() => setIsFocused(false)}
                      error={!isValid}
                      helperText={!isValid && "Invalid coupon code"}
                      variant="outlined"
                      size="small"
                      style={{ width: "200px", marginRight: "1rem" }}
                    />
                    <Button
                      variant="contained"
                      color="primary"
                      className="coupon-box-apply-btn"
                      onClick={handleApplyCoupon}
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                <Button
                  variant="contained"
                  className="btn-custom"
                  onClick={checkoutHandler}
                >
                  Checkout
                </Button>

                <div className="paymentLogoImg">
                  <img
                    src={""}
                    alt="payment-icons"
                    className="paymentImg"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
