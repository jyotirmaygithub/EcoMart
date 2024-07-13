import { RETRIEVE_ORDERS_REQUEST, RETRIEVE_ORDERS_SUCCESS, RETRIEVE_ORDERS_FAIL } from '../constants/orderConstants';

// Initial state
const initialState = {
  orders: [],
  loading: false,
  error: null,
};

// Orders reducer
export const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_ORDERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case RETRIEVE_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload, // Assuming payload is an array of orders
        error: null,
      };

    case RETRIEVE_ORDERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

