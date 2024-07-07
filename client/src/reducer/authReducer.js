// authReducer.js
import {
  AUTH_TOKEN_STATUS_REQUEST,
  AUTH_TOKEN_STATUS_SUCCESS,
  AUTH_TOKEN_STATUS_FAIL,
  DELETE_AUTH_TOKEN_REQUEST,
  DELETE_AUTH_TOKEN_SUCCESS,
  DELETE_AUTH_TOKEN_FAIL,
  GET_AUTH_TOKEN_REQUEST,
  GET_AUTH_TOKEN_SUCCESS,
  GET_AUTH_TOKEN_FAIL,
} from "../constants/authConstants";

const initialState = {
  authTokenExists: false,
  authToken: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_TOKEN_STATUS_REQUEST:
    case DELETE_AUTH_TOKEN_REQUEST:
    case GET_AUTH_TOKEN_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case AUTH_TOKEN_STATUS_SUCCESS:
      return {
        ...state,
        authTokenExists: action.payload,
        loading: false,
      };

    case DELETE_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        authTokenExists: false,
        authToken: null,
        loading: false,
      };

    case GET_AUTH_TOKEN_SUCCESS:
      return {
        ...state,
        authToken: action.payload,
        loading: false,
      };

    case AUTH_TOKEN_STATUS_FAIL:
    case DELETE_AUTH_TOKEN_FAIL:
    case GET_AUTH_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
