import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/productAction";
import ProductLayout from "../../layout/product/productCard";

const ProductList = () => {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <div className="flex flex-wrap">
      { products.data &&
        products.data.map((product) => (
          <ProductLayout key={product._id} product={product} />
        ))
      }
    </div>
  );
};

export default ProductList;
