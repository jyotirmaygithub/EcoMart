import {
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_REQUEST,
} from "../constants/userConstant";

const initialState = {
  loading: false,
  isAuthenticated: false,
  user: {},
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
        error: null,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload,
        error: null,
      };

    case REGISTER_USER_FAIL:
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
