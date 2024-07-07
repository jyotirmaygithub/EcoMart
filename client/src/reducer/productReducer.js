import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
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
