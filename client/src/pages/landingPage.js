import React, { useEffect } from "react";
import Header from "../components/header/header";
import Carousel from "../components/Carousel/carousel";
import ProductList from "../components/products/products";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../actions/productAction";
import Slider from "../components/slider/slider";
import Footer from "../components/footer";
import GitLoader from "../layout/loader/gitLoader";

const LandingPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  return (
    <div>
      <Header />
      {products.data ? (
        <>
          <Slider />
          <Carousel />
          <ProductList />
        </>
      ) : <GitLoader />}
      <Footer />
    </div>
  );
};

export default LandingPage;
