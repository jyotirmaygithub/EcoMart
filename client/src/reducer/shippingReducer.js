// reducers.js
import * as types from '../constants/shippingConstant';

const initialState = {
  loading: false,
  savedInfo: null,
  error: null,
};

export const shippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SAVE_SHIPPING_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case types.SAVE_SHIPPING_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        savedInfo: action.payload,
        error: null,
      };
    case types.SAVE_SHIPPING_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
