import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
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
  return async function (dispatch) {
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

// to update a product
export function updateProductDetails(
  id,
  name,
  price,
  description,
  availability,
  newImages,
  originalPrice,
  discount,
  savings,
  inclusiveOfTaxes
) {
  return async function (dispatch) {
    try {
      dispatch({
        type: PRODUCT_UPDATE_REQUEST,
      });

      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/update/update-product/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            price,
            description,
            availability,
            newImages,
            originalPrice,
            discount,
            savings,
            inclusiveOfTaxes,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const updatedProductData = await response.json();
      dispatch({
        type: PRODUCT_UPDATE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_UPDATE_FAIL,
        payload: error.message,
      });
      console.error("Error updating product details:", error.message);
    }
  };
}


export function deleteProduct(id) {
  return async function (dispatch) {
    try {
      dispatch({
        type: PRODUCT_DELETE_REQUEST,
      });

      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/delete/delete-product/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      dispatch({
        type: PRODUCT_DELETE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: PRODUCT_DELETE_FAIL,
        payload: error.message,
      });
      console.error('Error deleting product:', error.message);
    }
  };
}

