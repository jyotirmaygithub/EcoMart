import { RETRIEVE_ORDERS_REQUEST, RETRIEVE_ORDERS_SUCCESS, RETRIEVE_ORDERS_FAIL } from '../constants/orderConstants';
import { getAuthToken } from "./authAction";

export const placeOrder = (orders) => async (dispatch, getState) => {
  console.log("orders =", orders);

  const { authToken: currentAuthToken } = getState().auth;

  // If authToken is not present in redux state, fetch it
  if (!currentAuthToken) {
    await dispatch(getAuthToken()); // Assuming getAuthToken is a thunk action
  }
  // Get authToken again after dispatch
  const { authToken } = getState().auth;

  // Log the API URL and authToken for debugging
  console.log("API URL:", process.env.REACT_APP_DEV_URL);
  console.log("authToken:", authToken);

  try {
    const response = await fetch(
      `${process.env.REACT_APP_DEV_URL}/api/orders/productOrder`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(orders),
      }
    );

    if (!response.ok) {
      // Log the response status for debugging
      console.error("Response status:", response.status);
      throw new Error("Failed to place order");
    }

    // const data = await response.json();
  } catch (error) {
    console.error("Error placing order:", error);
  }
};

export const retrieveOrders = () => {
  return async (dispatch, getState) => {
    try {
      dispatch({
        type: RETRIEVE_ORDERS_REQUEST,
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
        `${process.env.REACT_APP_DEV_URL}/api/retriveData/productOrder`,
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

      const ordersData = await response.json();

      dispatch({
        type: RETRIEVE_ORDERS_SUCCESS,
        payload: ordersData.data,
      });
    } catch (error) {
      dispatch({
        type: RETRIEVE_ORDERS_FAIL,
        payload: error.message,
      });
      console.error("Error retrieving orders:", error.message);
    }
  };
};

