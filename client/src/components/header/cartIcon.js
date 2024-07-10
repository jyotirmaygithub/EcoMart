import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);

  useEffect(()=>{

  },[cartItems])
  return (
    <div className="cartIconWrapper">
      <span className="cartIcon">
        <ShoppingCartIcon sx={{ fontSize: 24 }} className="icon" />
        {cartItems.length > 0 && (
          <span className="text-yellow-800">{cartItems.length}</span>
        )}
      </span>
    </div>
  );
};

export default CartIcon;
