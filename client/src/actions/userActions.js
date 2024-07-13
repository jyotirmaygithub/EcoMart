import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  AUTHENTICATED_USER_REQUEST,
  AUTHENTICATED_USER_REQUEST_SUCCESS,
  AUTHENTICATED_USER_REQUEST_FAIL,
  TOTAL_NUMBER_USER_REQUEST_SUCCESS
} from "../constants/userConstant";
import {getAuthToken} from "../actions/authAction"

function storeAuthToken(userAuth_Token) {
  // Set the cookie with an expiration time
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 7); // Set to expire in 7 days
  document.cookie = `auth-token=${
    userAuth_Token.auth_token
  }; expires=${expirationDate.toUTCString()}; path=/`;
}

// login user

export function login(email, password) {
  return async function (dispatch) {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      
      const data = await response.json();


      if (response.ok) {
        storeAuthToken(data);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      } else {
        const error = new Error(data.message || 'Invalid Credentials');
        error.status = response.status;
        throw error;
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
  };
}


// register user
export function signUp(name, email, password) {
  return async function (dispatch) {
    try {
      dispatch({ type: REGISTER_USER_REQUEST });

      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/auth/newuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, password }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        storeAuthToken(data)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data });
      } else {
        dispatch({
          type: REGISTER_USER_FAIL,
          payload: data.message || "Registration failed",
        });
      }
    } catch (error) {
      dispatch({ type: REGISTER_USER_FAIL, payload: error.message });
    }
  };
}

export function fetchUserDetails() {
  return async function (dispatch, getState) {
    try {
      dispatch({
        type:   AUTHENTICATED_USER_REQUEST,
      });

      // Get authToken from redux state
      const { authToken: currentAuthToken } = getState().auth;

      // If authToken is not present in redux state, fetch it
      if (!currentAuthToken) {
        await dispatch(getAuthToken()); // Assuming getAuthToken is a thunk action
      }
      // Get authToken again after dispatch
      const { authToken } = getState().auth;

      // Now use the authToken in the fetch request
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/auth/user-data`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "auth-token": authToken,
          },
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const userData = await response.json();

      dispatch({
        type: AUTHENTICATED_USER_REQUEST_SUCCESS,
        payload: userData,
      });
    } catch (error) {
      dispatch({
        type: AUTHENTICATED_USER_REQUEST_FAIL,
        payload: error.message,
      });
      console.error("Error adding item to cart:", error.message);
    }
  };
}

export function totalUsers() {
  return async function (dispatch) {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_DEV_URL}/api/retriveData/total-users`,
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

      const userData = await response.json();

      dispatch({
        type: TOTAL_NUMBER_USER_REQUEST_SUCCESS,
        payload: userData,
      });
    } catch (error) {
      console.error("Error adding item to cart:", error.message);
    }
  };
}
