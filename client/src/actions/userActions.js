import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
} from "../constants/userConstant";

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
      console.log("resposne =", data);

      if (response.ok) {
        dispatch({ type: LOGIN_SUCCESS, payload: data.user });
      }
    } catch (error) {
      dispatch({ type: LOGIN_FAIL, payload: error.message });
    }
  };
}

// register user
export function signUp(name, email, password) {
  return async function (dispatch) {
    console.log("dispathc = ", dispatch);
    try {
      dispatch({ type: REGISTER_USER_REQUEST });
      console.log("process = ", process.env.REACT_APP_DEV_URL);
      console.log("name = ", name);

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
      console.log("resposne =", data);

      if (response.ok) {
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
