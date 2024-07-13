// reducers/cartReducer.js

import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAIL,
  RETRIEVE_CART_ITEMS_REQUEST,
  RETRIEVE_CART_ITEMS_SUCCESS,
  RETRIEVE_CART_ITEMS_FAIL,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART,
} from "../constants/cartConstants";

const initialState = {
  loading: false,
  cartItems: [],
  error: null,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_CART_ITEMS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case RETRIEVE_CART_ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        cartItems: action.payload,
      };
    case RETRIEVE_CART_ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload
        ),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};

// Initial state for the cart
const initialState2 = {
  loading2: false,
  error: null,
};

// Define your reducer function
export function cartAddReducer(state = initialState2, action) {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return {
        ...state,
        loading2: true,
        error: null,
      };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        loading2: false,
        error: null,
      };
    case ADD_ITEM_TO_CART_FAIL:
      return {
        ...state,
        loading2: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
