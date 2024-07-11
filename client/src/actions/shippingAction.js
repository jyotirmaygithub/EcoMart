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
    console.log("is it workign ")
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
