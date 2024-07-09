import React, { useEffect } from "react";
import Header from "../components/header/header";
import Carousel from "../components/Carousel/carousel";
import ProductList from "../components/products/products";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetails } from "../actions/userActions";

const LandingPage = () => {
  const dispatch = useDispatch();

  // const {authToken, } = useSelector((state) => state.auth)
  // console.log("i find = ",authToken)
  useEffect(() => {
    console.log("things are working")
    // Add any dispatch actions here if needed, for example:
    dispatch(fetchUserDetails());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Carousel />
      <ProductList />
    </div>
  );
};

export default LandingPage;
