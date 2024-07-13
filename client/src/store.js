import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducer/userReducer";
import {
  productsReducer,
  productDetailsReducer,
  productDeleteReducer,
  productUpdateReducer
} from "./reducer/productReducer";
import { authReducer } from "./reducer/authReducer";
import { cartReducer, cartAddReducer } from "./reducer/cartReducer";
import { imageUploadReducer } from "./reducer/imageReducer";
import { shippingReducer } from "./reducer/shippingReducer";
import { ordersReducer } from "./reducer/orderReducer";

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  userData: userReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth: authReducer,
  cart: cartReducer,
  imageUpload: imageUploadReducer,
  productDelete: productDeleteReducer,
  shipping: shippingReducer,
  orders: ordersReducer,
  cartAdd: cartAddReducer,
  productUpdate : productUpdateReducer,
});

// Create an array of middleware (in this case, just redux-thunk)
const middleware = [thunk];

// Create the Redux store with the root reducer and middleware
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware) // Apply the middleware without DevTools
);

export default store;
