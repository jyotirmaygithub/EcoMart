import React, { useEffect } from "react";
import { getProduct } from "../../actions/productAction";
import ProductLayout from "../../layout/product/productCard";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="flex-col justify-center items-center m-16">
      <div
        className="flex justify-center items-center my-5"
      >
        <h1 className="font-bold text-2xl">Our Products</h1>
      </div>
      <div className="flex flex-wrap">
        {products.data &&
          products.data.map((product) => (
            <ProductLayout key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
