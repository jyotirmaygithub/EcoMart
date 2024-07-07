import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Rating from "@mui/material/Rating";
import { FitScreen } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { dispalyMoney, generateDiscountedPrice } from "../../components/DisplayMoney/displayMoney";
// import { addItemToCart } from "../../actions/cartAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let discountPrice = generateDiscountedPrice(product.price);
  discountPrice = dispalyMoney(discountPrice);
  const oldPrice = dispalyMoney(product.price);
  console.log("images = ",product)
  const truncated =
    product.description.split(" ").slice(0, 5).join(" ") + "...";
  const nameTruncated = product.name.split(" ").slice(0, 3).join(" ") + "...";

  const addTocartHandler = (id, qty) => {
    // dispatch(addItemToCart(id, qty));
  };

  function handleSingleProduct(){
     dispatch(handleSingleHotel(product._id))
    navigate(`/hotel/${product._id}`);
  }

  return (
    <Card className="w-72 h-auto m-4 bg-white cursor-pointer " onClick={handleSingleProduct}>
      {/* <Link
        to={`/product/${product._id}`}
        className="text-inherit no-underline"
      > */}
        <CardActionArea>
          <CardMedia
            component="img"
            className="h-52 w-11/12 object-cover mx-auto mt-4"
            image={product.images[0]}
            alt={product.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              className="font-bold text-black"
            >
              {nameTruncated}
            </Typography>
            <Box className="flex items-center">
              <Rating
                name="rating"
                value={product.ratings}
                precision={0.1}
                readOnly
                size="small"
                className="text-red-600 mr-2"
              />
              <Typography variant="body2" color="textSecondary">
                ({product.numOfReviews})
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="textSecondary"
              className="text-sm font-medium mt-1 mb-1 truncate-3-lines"
            >
              {truncated}
            </Typography>
            <Box className="flex items-center">
              <Typography
                variant="body1"
                className="line-through font-bold text-gray-600 mr-2"
              >
                {oldPrice}
              </Typography>
              <Typography
                variant="body1"
                className="font-bold text-lg"
              >
                {discountPrice}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      {/* </Link> */}
      <Box className="flex justify-center p-2">
        <Button
          variant="contained"
          className="bg-black text-white rounded-md font-bold w-full h-12 hover:bg-red-600 hover:text-black"
          onClick={() => addTocartHandler(product._id, 1)}
        >
          Add to Cart
        </Button>
      </Box>
    </Card>
  );
};

export default ProductCard;
