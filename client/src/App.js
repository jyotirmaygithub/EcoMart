import React from "react";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/signIn";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store from "./store";
import AbouUsPage from "./pages/about";
import ContactForm from "./pages/contact";
import LandingPage from "./pages/landingPage";
import ProductDetails from "./layout/product/productDetails";
import Header from "./components/header/header";
import Cart from "./components/Cart/cart";
import ViewAdminProfile from "./pages/admin/profile";
import ProductList from "./pages/admin/productList";
import UpdateProduct from "./pages/admin/product/updateProduct";
import Footer from "./components/footer";
import Address from "./pages/checkout/address";
import Payment from "./pages/checkout/payment";
import Success from "./pages/checkout/success";
import Orders from "./pages/orders/userOrders";

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
          color: "white ", // or 'currentColor' for inherited color
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
          <Router>
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
              <Route
                exact
                path="/about"
                element={
                  <>
                    <Header />
                    <AbouUsPage />
                  </>
                }
              />
              <Route exact path="/contact" element={<ContactForm />} />
              <Route
                exact
                path="/product/:id"
                element={
                  <>
                    <Header />
                    <ProductDetails />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/cart"
                element={
                  <>
                    <Header />
                    <Cart />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/view-admin"
                element={
                  <>
                    <Header />
                    <ViewAdminProfile />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/view-products"
                element={
                  <>
                    <Header />
                    <ProductList />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/admin/product/:id"
                element={
                  <>
                    <Header />
                    <UpdateProduct />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/process/shipping"
                element={
                  <>
                    <Header />
                    <Address />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/process/payment"
                element={
                  <>
                    <Header />
                    <Payment />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/process/success"
                element={
                  <>
                    <Header />
                    <Success />
                    <Footer />
                  </>
                }
              />
              <Route
                exact
                path="/orders"
                element={
                  <>
                    <Header />
                    <Orders />
                    <Footer />
                  </>
                }
              />
            </Routes>
          </Router>
          <ToastContainer autoClose={2000} transition={Slide} />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
