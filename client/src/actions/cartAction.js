import { useDispatch, useSelector } from "react-redux";
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAIL,
  RETRIEVE_CART_ITEMS_REQUEST,
  RETRIEVE_CART_ITEMS_SUCCESS,
  RETRIEVE_CART_ITEMS_FAIL,
  REMOVE_ITEM_FROM_CART,
} from "../constants/cartConstants";
import { getAuthToken } from "./authAction";

export function addItemToCart(
  productId,
  productQuantity,
  productName,
  productPrice,
  productImage // Changed to singular for consistency
) {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type: ADD_ITEM_TO_CART_REQUEST,
      });

      // Get authToken from redux state
      const { authToken: currentAuthToken } = getState().auth;

      // If authToken is not present in redux state, fetch it
      if (!currentAuthToken) {
        await dispatch(getAuthToken()); // Assuming getAuthToken is a thunk action
      }
      // Get authToken again after dispatch
      const { authToken } = getState().auth;

      // Now use the authToken in the fetch request
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/cart/new-cart-product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
          body: JSON.stringify({
            productId,
            productName,
            productQuantity,
            productPrice,
            productImage, // Changed to singular
          }),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const product = await response.json();

      dispatch({
        type: ADD_ITEM_TO_CART_SUCCESS,
        payload: product,
      });
    } catch (error) {
      dispatch({
        type: ADD_ITEM_TO_CART_FAIL,
        payload: error.message,
      });
      console.error("Error adding item to cart:", error.message);
    }
  };
}

export const retrieveCartItems = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: RETRIEVE_CART_ITEMS_REQUEST,
      });

      // Get authToken from redux state
      const { authToken: currentAuthToken } = getState().auth;

      // If authToken is not present in redux state, fetch it
      if (!currentAuthToken) {
        await dispatch(getAuthToken()); // Assuming getAuthToken is a thunk action
      }

      // Get authToken again after dispatch
      const { authToken } = getState().auth;

      // Now use the authToken in the fetch request
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/retriveData/cart-products`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const cartData = await response.json();

      dispatch({
        type: RETRIEVE_CART_ITEMS_SUCCESS,
        payload: cartData.data,
      });
    } catch (error) {
      dispatch({
        type: RETRIEVE_CART_ITEMS_FAIL,
        payload: error.message,
      });
      console.error("Error retrieving cart items:", error.message);
    }
  };
};

// to remove a item from the cart
export const removeItemFromCart = (productId) => {
  return async (dispatch, getState) => {
    try {
      // Get authToken from redux state
      const { authToken: currentAuthToken } = getState().auth;

      // If authToken is not present in redux state, fetch it
      if (!currentAuthToken) {
        await dispatch(getAuthToken()); // Assuming getAuthToken is a thunk action
      }

      // Get authToken again after dispatch
      const { authToken } = getState().auth;

      // Now use the authToken in the fetch request
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/cart/remove-cart-product/${productId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      dispatch({
        type: REMOVE_ITEM_FROM_CART,
        payload: productId,
      });
    } catch (error) {
      console.error("Error removing item from cart:", error.message);
    }
  };
};
