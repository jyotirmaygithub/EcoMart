import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
  AUTHENTICATED_USER_REQUEST,
  AUTHENTICATED_USER_REQUEST_SUCCESS,
  AUTHENTICATED_USER_REQUEST_FAIL,
} from "../constants/userConstant";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case REGISTER_USER_REQUEST:
    case AUTHENTICATED_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        error: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_USER_SUCCESS:
    case AUTHENTICATED_USER_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case LOGIN_FAIL:
    case REGISTER_USER_FAIL:
    case AUTHENTICATED_USER_REQUEST_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user: {},
        error: action.payload,
      };

    default:
      return state;
  }
};
