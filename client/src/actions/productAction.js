import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
} from "../constants/productConstant"

export function getProduct() {
    return async function (dispatch) {
      try {
        // Initial state:
        dispatch({
          type: ALL_PRODUCT_REQUEST,
        });
  
        // Fetch products data from the API
        const response = await fetch(
          `${process.env.REACT_APP_DEV_URL}/api/retriveData/products-data`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const products = await response.json();
  
        // Dispatch success action with products data
        dispatch({
          type: ALL_PRODUCT_SUCCESS,
          payload: products,
        });
      } catch (error) {
        // Dispatch fail action with error message
        dispatch({
          type: ALL_PRODUCT_FAIL,
          payload: error.message,
        });
      }
    };
  }

  // Get Products Details
export const getProductDetails = (id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: PRODUCT_DETAILS_REQUEST,
      });

      const { data } = await axios.get(`/api/v1/product/${id}`);

      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: data.Product,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.message,
      });
    }
  };
};