import {
  RETRIEVE_CART_ITEMS_REQUEST,
  RETRIEVE_CART_ITEMS_SUCCESS,
  RETRIEVE_CART_ITEMS_FAIL,
  REMOVE_ITEM_FROM_CART,
} from '../constants/cartConstants';

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
        cartItems: state.cartItems.filter(item => item.productId !== action.payload),
      };
    default:
      return state;
  }
};
