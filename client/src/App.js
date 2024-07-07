import React from "react";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";

const theme = createTheme({
  palette: {
    primary: {
      main: "#60A5FA", // Set primary color to light blue
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          // Set the default icon color to primary.main (light blue)
          color: "#60A5FA", // or 'currentColor' for inherited color
        },
      },
    },
  },
});
function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_AUTH_CLIENT_ID}> */}
          <Router>
            <Routes>
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </Router>
          <ToastContainer autoClose={2000} transition={Slide} />
          {/* </GoogleOAuthProvider> */}
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
