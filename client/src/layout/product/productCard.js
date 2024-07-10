import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductDetails } from "../../actions/productAction";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../../components/DisplayMoney/displayMoney";
import nlp from "compromise";
import StarShowCase from "../../utils/star";
import FreeShippingIcon from "@mui/icons-material/LocalShipping";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log("rating =", product.ratings);

  let discountPrice = generateDiscountedPrice(product.price);
  discountPrice = dispalyMoney(discountPrice);
  const oldPrice = dispalyMoney(product.price);

  // Extract key features using compromise
  const extractKeyFeatures = (description) => {
    const doc = nlp(description);
    const keywords = doc.nouns().out("array");
    return keywords.slice(0, 10).join(" ") + "...";
  };

  const truncatedDescription = extractKeyFeatures(product.description);

  function handleSingleProduct() {
    dispatch(getProductDetails(product._id));
    navigate(`/product/${product._id}`);
  }

  return (
    <Card className="w-72 h-auto my-6 mx-6 bg-white cursor-pointer shadow-lg rounded-lg flex flex-col justify-between">
      <CardActionArea onClick={handleSingleProduct}>
        <CardMedia
          component="img"
          className="h-52 w-full object-cover rounded-t-lg"
          image={product.images[0]}
          alt={product.name}
        />
        <CardContent className="flex-grow">
          <Box className="flex flex-col items-start">
            <p className="font-bold">{discountPrice}</p>
            <Typography
              variant="body1"
              className="font-bold text-gray-600 mr-2"
            >
              MRP: <span className="line-through">{oldPrice}</span>
            </Typography>
          </Box>
          <Typography
            variant="body2"
            className="text-sm font-medium mt-1 mb-1 truncate-3-lines"
            sx={{ color: "#3498DB" }}
          >
            {truncatedDescription}
          </Typography>
          <StarShowCase rating={product.ratings} />

          <Typography
            variant="body2"
            className="text-xs font-medium mt-2 flex items-center"
            sx={{ color: "#6AB04C" }}
          >
            <FreeShippingIcon sx={{ fontSize: 16, mr: 1, color:"#6AB04C" }} />
            Free delivery for members only
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
