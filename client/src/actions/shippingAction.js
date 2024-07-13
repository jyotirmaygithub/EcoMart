// actions.js
import * as types from "../constants/shippingConstant";
import { getAuthToken } from "./authAction";

export const saveShippingInfo =
  (
    address,
    city,
    state,
    country,
    pinCode,
    phoneNo,
    email,
    firstName,
    lastName
  ) =>
  async (dispatch, getState) => {
    dispatch({ type: types.SAVE_SHIPPING_INFO_REQUEST });

    // Get authToken from redux state
    const { authToken: currentAuthToken } = getState().auth;

    // If authToken is not present in redux state, fetch it
    if (!currentAuthToken) {
      await dispatch(getAuthToken()); // Assuming getAuthToken is a thunk action
    }
    // Get authToken again after dispatch
    const { authToken } = getState().auth;

    try {
      const response = await fetch(`${process.env.REACT_APP_DEV_URL}/api/shipping/save`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": authToken,
        },
        body: JSON.stringify(
          address,
          city,
          state,
          country,
          pinCode,
          phoneNo,
          email,
          firstName,
          lastName
        ),
      });

      const data = await response.json();

      dispatch({
        type: types.SAVE_SHIPPING_INFO_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: types.SAVE_SHIPPING_INFO_FAILURE,
        payload: { error: "Server error" },
      });
    }
  };


  // export const retrieveAddress = () => {
  //   return async (dispatch, getState) => {
  //     try {
  //       dispatch({
  //         type: RETRIEVE_ORDERS_REQUEST,
  //       });
  
  //       // Get authToken from redux state
  //       const { authToken: currentAuthToken } = getState().auth;
  
  //       // If authToken is not present in redux state, fetch it
  //       if (!currentAuthToken) {
  //         await dispatch(getAuthToken()); // Assuming getAuthToken is a thunk action
  //       }
  
  //       // Get authToken again after dispatch
  //       const { authToken } = getState().auth;
  
  //       // Now use the authToken in the fetch request
  //       const response = await fetch(
  //         `${process.env.REACT_APP_DEV_URL}/api/retriveData/productOrder`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "auth-token": authToken,
  //           },
  //         }
  //       );
  
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  
  //       const ordersData = await response.json();
  
  //       dispatch({
  //         type: RETRIEVE_ORDERS_SUCCESS,
  //         payload: ordersData.data,
  //       });
  //     } catch (error) {
  //       dispatch({
  //         type: RETRIEVE_ORDERS_FAIL,
  //         payload: error.message,
  //       });
  //       console.error("Error retrieving orders:", error.message);
  //     }
  //   };
  // };