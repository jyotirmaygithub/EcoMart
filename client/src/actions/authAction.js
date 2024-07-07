// authActions.js
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
  } from '../constants/authConstants';
  
  // Function : to check auth-token status : exist or not.
  export function checkAuthTokenStatus() {
    return function(dispatch) {
      try {
        dispatch({
          type: AUTH_TOKEN_STATUS_REQUEST,
        });
  
        const exists = document.cookie.split(";").some(cookie => cookie.trim().startsWith("auth-token="));
  
        dispatch({
          type: AUTH_TOKEN_STATUS_SUCCESS,
          payload: exists,
        });
  
      } catch (error) {
        dispatch({
          type: AUTH_TOKEN_STATUS_FAIL,
          payload: error.message,
        });
        console.error("Error checking auth token status:", error.message);
      }
    };
  }
  
  // Function : To delete the auth token.
  export function deleteAuthToken() {
    return function(dispatch) {
      try {
        dispatch({
          type: DELETE_AUTH_TOKEN_REQUEST,
        });
  
        document.cookie = `auth-token=; Expires=Thu, 01 Jan 1970 00:00:00 UTC; Path=/;`;
  
        dispatch({
          type: DELETE_AUTH_TOKEN_SUCCESS,
        });
  
      } catch (error) {
        dispatch({
          type: DELETE_AUTH_TOKEN_FAIL,
          payload: error.message,
        });
        console.error("Error deleting auth token:", error.message);
      }
    };
  }
  
  // Function : To get the auth-token from the cookie.
  export function getAuthToken() {
    return function(dispatch) {
      try {
        dispatch({
          type: GET_AUTH_TOKEN_REQUEST,
        });
  
        const authToken = document.cookie.split(";").reduce((token, cookie) => {
          const trimmedCookie = cookie.trim();
          if (trimmedCookie.startsWith("auth-token=")) {
            return trimmedCookie.substring("auth-token=".length);
          }
          return token;
        }, null);
  
        dispatch({
          type: GET_AUTH_TOKEN_SUCCESS,
          payload: authToken,
        });
  
      } catch (error) {
        dispatch({
          type: GET_AUTH_TOKEN_FAIL,
          payload: error.message,
        });
        console.error("Error getting auth token:", error.message);
      }
    };
  }
  