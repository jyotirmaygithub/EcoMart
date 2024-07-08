import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducer/userReducer";
import {
  productsReducer,
  productDetailsReducer,
} from "./reducer/productReducer";
import {authReducer} from "./reducer/authReducer"
import {cartReducer} from "./reducer/cartReducer"

// Combine your reducers into a root reducer
const rootReducer = combineReducers({
  userData: userReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  auth : authReducer,
  cart : cartReducer
});

// Create an array of middleware (in this case, just redux-thunk)
const middleware = [thunk];

// Create the Redux store with the root reducer and middleware
const store = createStore(
  rootReducer,
  applyMiddleware(...middleware) // Apply the middleware without DevTools
);

export default store;
