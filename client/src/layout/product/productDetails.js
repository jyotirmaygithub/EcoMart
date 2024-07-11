import React, { useEffect, useState } from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { IconButton, Input, Button } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { addItemToCart, retrieveCartItems } from "../../actions/cartAction";
import { toast } from "react-toastify";
import nlp from "compromise";
import GitLoader from "../../layout/loader/gitLoader";
import Star from "../../utils/star";
import FreeShippingIcon from "@mui/icons-material/LocalShipping";
import { generateDiscountedPrice, calculateDiscount, dispalyMoney } from "../../components/DisplayMoney/displayMoney";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const [previewImg, setPreviewImg] = useState("");

  const { product, loading } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setPreviewImg(product.images[0]);
    }
  }, [product]);

  // Extract key features using compromise
  const extractKeyFeatures = (description) => {
    const doc = nlp(description);
    const keywords = doc.nouns().out("array");
    const keywordDescription = keywords.slice(0, 15).join(" , ");
    return keywordDescription;
  };

  const truncatedDescription = product ? extractKeyFeatures(product.description) : "";

  const handleAddItem = () => {
    dispatch(retrieveCartItems());
    dispatch(
      addItemToCart(
        id,
        quantity,
        product.name,
        product.price,
        product.images[0]
      )
    );
  };

  const handlePreviewImg = (images, i) => {
    setPreviewImg(images[i]);
  };

  const increaseQuantityHandler = () => {
    if (product.Stock <= quantity) return;
    setQuantity((prev) => prev + 1);
  };

  const decreaseQuantityHandler = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const newPrice = dispalyMoney(product.price);
  const oldPrice = dispalyMoney(product.original_price);
  const savedPrice = dispalyMoney(product.savings);

  return (
    <>
      {loading ? (
        <GitLoader />
      ) : (
        <div className="prodcutDetialsContainer mt-24">
          <section id="product_details" className="section">
            <div className="product_container">
              <div className="wrapper prod_details_wrapper">
                <div className="prod_details_left_col">
                  <div className="prod_details_tabs">
                    {product.images &&
                      product.images.map((img, i) => (
                        <div
                          key={i}
                          onClick={() => handlePreviewImg(product.images, i)}
                        >
                          <img src={img} alt="product-img" />
                        </div>
                      ))}
                  </div>
                  <figure className="prod_details_img">
                    <img src={previewImg} alt="product-img" />
                  </figure>
                </div>
                <div className="space-y-3 prod_details_right_col_001">
                  <h1 className="text-2xl font-semibold font-serif">
                    {truncatedDescription}
                  </h1>
                  <Star rating={product.ratings} />
                  <p className="text-sm font-semibold font-serif">
                    <FreeShippingIcon
                      sx={{ fontSize: 16, mr: 1, color: "#F1C40F" }}
                    />
                    Free delivery for members only
                  </p>
                  <hr />
                  <div className="prod_details_price">
                    <div className="price_box">
                      <h2 className="text-2xl font-bold">
                        {newPrice} &nbsp;
                        <small className="del_price">
                          <del>{oldPrice}</del>
                        </small>
                      </h2>
                      <p className="font-bold text-green-600">
                        You save: {savedPrice} ({product.discount}%)
                      </p>
                      <span className="text-sm font-semibold">
                        (Inclusive of all taxes)
                      </span>
                    </div>
                    <div className="badge">
                      {product.availability === "In Stock" ? (
                        <span className="instock">
                          <DoneIcon /> In Stock
                        </span>
                      ) : (
                        <span className="outofstock">
                          <CloseIcon />
                          Out of stock
                        </span>
                      )}
                    </div>
                  </div>
                  <hr />
                  <div className="productDescription">
                    <div className="prod_details_offers">
                      <h4>Offers and Discounts</h4>
                      <ul className="font-bold">
                        <li className="font-bold">No Cost EMI on Credit Card</li>
                        <li>Pay Later & Avail Cashback</li>
                      </ul>
                    </div>
                  </div>
                  <hr />
                  <div className="prod_details_additem">
                    <h5>QTY :</h5>
                    <div className="additem">
                      <IconButton
                        sx={{ color: "black" }}
                        onClick={decreaseQuantityHandler}
                      >
                        <RemoveIcon sx={{ color: "black" }} />
                      </IconButton>
                      <Input
                        readOnly
                        type="number"
                        value={quantity}
                        className="input"
                      />
                      <IconButton
                        onClick={increaseQuantityHandler}
                      >
                        <AddIcon sx={{ color: "black" }} />
                      </IconButton>
                    </div>
                    <Button
                      variant="contained"
                      onClick={handleAddItem}
                      sx={{
                        bgcolor: "#F1C40F",
                        borderRadius: "20px",
                        "&:hover": {
                          bgcolor: "#F1C40F",
                        },
                      }}
                    >
                      Add to cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
