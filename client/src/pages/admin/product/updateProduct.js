import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Button,
  TextField,
  Typography,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
  Box,
} from "@mui/material";
import {
  Description as DescriptionIcon,
  ShoppingCartOutlined as ShoppingCartOutlinedIcon,
  AttachMoney as AttachMoneyIcon,
  AddCircleOutline as AddCircleOutlineIcon,
} from "@mui/icons-material";
import { Paper, Grid, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import GitLoader from "../../../layout/loader/gitLoader";
import Circle from "../../../layout/loader/Loader";
import { getProductDetails } from "../../../actions/productAction";
import { uploadImage } from "../../../actions/imageAction";
import { updateProductDetails } from "../../../actions/productAction";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

function UpdateProduct() {
  const UploadContainer = styled("div")({
    textAlign: "center",
  });

  const paperStyle = {
    width: "100%",
    padding: "32px",
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.87)",
    border: "2px dashed #ccc",
    borderRadius: "8px",
    cursor: "pointer",
    "&:hover": {
      borderColor: "#3f51b5",
    },
  };

  const iconStyle = {
    fontSize: "200px",
    color: "#F1C40F",
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { error, product, loading } = useSelector(
    (state) => state.productDetails
  );

  const { loader } = useSelector((state) => state.imageUpload);

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const [originalPrice, setOriginalPrice] = useState(0); // Example initial values
  const [discount, setDiscount] = useState(0);
  const [savings, setSavings] = useState(0);
  const [inclusiveOfTaxes, setInclusiveOfTaxes] = useState(false);

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product && product._id) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setAvailability(product.availability);
      setOldImages(product.images);
      // Set other product details here
      setOriginalPrice(product.original_price);
      setDiscount(product.discount);
      setSavings(product.savings);
      setInclusiveOfTaxes(product.inclusive_of_taxes);
    }

    if (error) {
      console.error("Error fetching product details:", error);
    }
  }, [product, error]);

  async function handleUpdateProduct() {
    const newImages = [];

    try {
      // Wait for all image uploads to complete
      const imageURLs = await Promise.all(
        imagesPreview.map(async (image) => {
          const imageURL = await dispatch(uploadImage(image));
          console.log("image url cloudinary =", imageURL);
          return imageURL;
        })
      );

      newImages.push(...imageURLs);

      console.log("avaliblity =", availability);
      // Dispatch update product action here
      dispatch(
        updateProductDetails(
          id,
          name,
          price,
          description,
          availability,
          newImages,
          originalPrice,
          discount,
          savings,
          inclusiveOfTaxes
        )
      ).then(() => {
        toast.success("Product has been updated");
      });
    } catch (error) {
      console.error("Error uploading images:", error);
    }
  }

  const updateProductImagesChange = (event) => {
    setOldImages([]);
    const files = event.target.files;
    const selected = Array.from(files).map((file) => file);
    setImagesPreview(selected);
  };

  return (
    <>
      {loading ? (
        <GitLoader />
      ) : (
        <div className="flex my-32">
          <div className="flex-1">
            <div className="max-w-2xl mx-auto p-4">
              <div className="mb-4">
                <Avatar className="bg-blue-500 rounded-full">
                  <AddCircleOutlineIcon color="yellow" />
                </Avatar>
                <Typography
                  variant="h5"
                  component="h1"
                  className="text-xl font-bold mt-4"
                >
                  Update Product
                </Typography>
              </div>
              <div className="mb-4 space-y-5">
                <TextField
                  variant="outlined"
                  fullWidth
                  className="w-full mb-4"
                  label="Product Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <ShoppingCartOutlinedIcon
                          style={{ fontSize: 20, color: "#414141" }}
                        />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Price"
                  value={price}
                  required
                  fullWidth
                  className="w-full mb-4"
                  onChange={(e) => setPrice(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ fontSize: 20, color: "#414141" }}
                      >
                        <AttachMoneyIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <FormControl fullWidth>
                  <Select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    displayEmpty
                    className="w-full mb-4"
                  >
                    <MenuItem value={true}>In stock</MenuItem>
                    <MenuItem value={false}>Out of stock</MenuItem>
                  </Select>
                </FormControl>
                <TextField
                  variant="outlined"
                  label="Product Description"
                  value={description}
                  required
                  multiline
                  rows={4}
                  className="w-full mb-4"
                  onChange={(e) => setDescription(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ fontSize: 20, color: "#414141" }}
                      >
                        <DescriptionIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Original Price"
                  value={originalPrice}
                  required
                  fullWidth
                  className="w-full mb-4"
                  onChange={(e) => setOriginalPrice(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  label="Discount"
                  value={discount}
                  required
                  fullWidth
                  className="w-full mb-4"
                  onChange={(e) => setDiscount(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  label="Savings"
                  value={savings}
                  required
                  fullWidth
                  className="w-full mb-4"
                  onChange={(e) => setSavings(e.target.value)}
                />
                <FormControl fullWidth>
                  <Select
                    value={inclusiveOfTaxes}
                    onChange={(e) => setInclusiveOfTaxes(e.target.value)}
                    displayEmpty
                    className="w-full mb-4"
                  >
                    <MenuItem value={true}>Inclusive of Taxes</MenuItem>
                    <MenuItem value={false}>Not inclusive of Taxes</MenuItem>
                  </Select>
                </FormControl>
                <Grid item xs={12} component={UploadContainer}>
                  <IconButton component="label">
                    <Paper style={paperStyle}>
                      <CloudUploadOutlinedIcon style={iconStyle} />
                      <input
                        accept="image/*"
                        style={{ display: "none" }}
                        type="file"
                        onChange={updateProductImagesChange}
                        multiple
                      />
                      <Typography variant="body2" color="textSecondary">
                        PNG, JPG, GIF up to 10MB
                      </Typography>
                    </Paper>
                  </IconButton>
                </Grid>
                {loader ? (
                  <div className="flex items-center justify-center">
                    <Circle size={70} color={"yellow"} />
                  </div>
                ) : (
                  <Box mt={2} mb={2} className="w-full">
                    <div className="flex flex-wrap justify-center gap-2 mt-4">
                      {oldImages.length > 0 &&
                        oldImages.map((image, index) => (
                          <Avatar
                            key={index}
                            alt="Old Product Image"
                            src={image}
                            variant="square"
                            style={{ width: "100px", height: "100px" }}
                          />
                        ))}
                    </div>
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
                      {imagesPreview.length > 0 &&
                        imagesPreview.map((image, index) => (
                          <Avatar
                            key={index}
                            src={URL.createObjectURL(image)}
                            alt={`Uploaded  ${index + 1}`}
                            loading="lazy"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                            }}
                          />
                        ))}
                    </div>
                  </Box>
                )}
              </div>
              <Button
                variant="contained"
                onClick={handleUpdateProduct}
                sx={{
                  bgcolor: "#F1C40F",
                  borderRadius: "20px",
                  "&:hover": {
                    bgcolor: "#F1C40F",
                  },
                }}
              >
                Update Product
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default UpdateProduct;
