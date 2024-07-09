import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
} from "../constants/productConstant";

const initialState = {
  loading: false,
  products: [],
  error: null,
};

export const  productsReducer = (state = initialState, action) =>{
  switch (action.type) {
    case ALL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

const initialState2 = {
  product: {}, // Holds the product details
  loading: false, // Loading state indicator
  error: '', // Holds any error message
};

export const  productDetailsReducer = (state = initialState2, action) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: '', // Clear any previous error messages
      };
    case PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        product: action.payload, // Set product details from action payload
      };
    case PRODUCT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload, // Set error message from action payload
      };
    default:
      return state;
  }
};
