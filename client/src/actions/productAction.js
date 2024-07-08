import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
} from "../constants/productConstant";

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
export function getProductDetails(id) {
  return async function(dispatch) {
    try {
      dispatch({
        type: PRODUCT_DETAILS_REQUEST,
      });

      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/retriveData/single-product`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ id }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const productData = await response.json();
      console.log("of a product = " , productData.data)
      dispatch({
        type: PRODUCT_DETAILS_SUCCESS,
        payload: productData.data,
      });

    } catch (error) {
      dispatch({
        type: PRODUCT_DETAILS_FAIL,
        payload: error.message,
      });
      console.error("Error fetching product details:", error.message);
    }
  };
}

