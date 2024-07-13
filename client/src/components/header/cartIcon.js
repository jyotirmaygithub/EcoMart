import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Loader from "../../layout/loader/Loader";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { loading2 } = useSelector((state) => state.cartAdd);

  // Calculate total quantity of items in the cart
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="relative flex items-center justify-center">
      <ShoppingCartIcon sx={{ fontSize: 24 }} className="icon text-white" />
      {loading2 ? (
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2">
          <Loader size={15} color={"white"} />
        </div>
      ) : (
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full w-5 h-5 flex items-center justify-center text-xs text-white">
          {totalQuantity}
        </div>
      )}
    </div>
  );
};

export default CartIcon;
