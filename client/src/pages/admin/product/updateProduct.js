import React, { useEffect, useState, useRef } from "react";
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
import DescriptionIcon from "@mui/icons-material/Description";
import StorageIcon from "@mui/icons-material/Storage";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CollectionsIcon from "@mui/icons-material/Collections";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, useParams } from "react-router-dom";

function UpdateProduct() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id: productId } = useParams();
  const { error, product } = useSelector((state) => state.productDetails);
  // const { loading, error: updateError, isUpdated } = useSelector(
  //   (state) => state.deleteUpdateProduct
  // );

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [isCategory, setIsCategory] = useState(false);
  const [Stock, setStock] = useState(0);
  const [images, setImages] = useState([]);
  const [info, setInfo] = useState("");
  const [imagesPreview, setImagesPreview] = useState([]);
  const [oldImages, setOldImages] = useState([]);
  const fileInputRef = useRef();
  const [toggle, setToggle] = useState(false);
  const categories = [
    "Cricket Kits",
    "Batting Gloves",
    "Batting Pads",
    "Bats",
    "Bags",
    "Helmets",
    "Balls",
    "Stumps",
    "Shoes",
    "Clothing",
    "Accessories",
  ];

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setIsCategory(true);
  };

  useEffect(() => {
    if (product && product._id !== productId) {
      // dispatch(getProductDetails(productId));
    } else {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setCategory("");
      setInfo(product.info);
      setStock(product.Stock);
      setOldImages(product.images);
    }

    if (error) {
      // alert.error(error);
      // dispatch(clearErrors());
    }

    // if (updateError) {
    //   // alert.error(updateError);
    //   // dispatch(clearErrors());
    // }

    // if (isUpdated) {
    //   // alert.success("Product Updated Successfully");
    //   navigate("/admin/products");
    //   // dispatch({ type: UPDATE_PRODUCT_RESET });
    // }
  }, [
    dispatch,
    // alert,
    error,
    navigate,
    // isUpdated,
    productId,
    product,
    // updateError,
  ]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("price", price);
    myForm.set("description", description);
    myForm.set("category", category);
    myForm.set("Stock", Stock);
    myForm.set("info", info);
    images.forEach((currImg) => {
      myForm.append("images", currImg);
    });

    // dispatch(updateProduct(productId, myForm));
  };

  const handleImageUpload = () => {
    fileInputRef.current.click();
  };

  const updateProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImages([]);
    setImagesPreview([]);
    setOldImages([]);
    files.forEach((file) => {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((prev) => [...prev, reader.result]);
          setImages((prev) => [...prev, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const toggleHandler = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <div className="flex">
        {/* Sidebar Component */}
        {/* <Sidebar /> */}
        {/* Main Content */}
        <div className="flex-1">
          {/* Navbar Component */}
          {/* <Navbar toggleHandler={toggleHandler} /> */}
          <div className="max-w-2xl mx-auto p-4">
            <form
              className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              encType="multipart/form-data"
            >
              <div className="mb-4">
                <Avatar className="bg-blue-500 rounded-full">
                  <AddCircleOutlineIcon />
                </Avatar>
                <Typography variant="h5" component="h1" className="text-xl font-bold mt-4">
                  Update Product
                </Typography>
              </div>
              <div className="mb-4">
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
                <TextField
                  variant="outlined"
                  label="Stock"
                  value={Stock}
                  required
                  className="w-full mb-4"
                  onChange={(e) => setStock(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ fontSize: 20, color: "#414141" }}
                      >
                        <StorageIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  variant="outlined"
                  label="Product Info"
                  value={info}
                  required
                  className="w-full mb-4"
                  onChange={(e) => setInfo(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment
                        position="end"
                        style={{ fontSize: 20, color: "#414141" }}
                      >
                        <InfoIcon />
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="mb-4">
                  {!isCategory && (
                    <Typography
                      variant="body2"
                      className="mb-2 text-gray-600"
                    >
                      Choose Category
                    </Typography>
                  )}
                  <FormControl className="w-full">
                    <Select
                      variant="outlined"
                      fullWidth
                      value={category}
                      onChange={handleCategoryChange}
                      className="mb-4"
                      inputProps={{
                        name: "category",
                        id: "category-select",
                      }}
                    >
                      {!category && (
                        <MenuItem value="">
                          <em>Choose Category</em>
                        </MenuItem>
                      )}
                      {categories.map((cate) => (
                        <MenuItem key={cate} value={cate}>
                          {cate}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </div>
                <TextField
                  variant="outlined"
                  fullWidth
                  className="w-full mb-4"
                  label="Product Description"
                  multiline
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <DescriptionIcon className="text-gray-400" />
                      </InputAdornment>
                    ),
                  }}
                />
                <div className="flex items-center mb-4">
                  <CollectionsIcon fontSize="large" style={{ fontSize: 40 }} />
                  <input
                    type="file"
                    name="avatar"
                    className="hidden"
                    accept="image/*"
                    onChange={updateProductImagesChange}
                    multiple
                    ref={fileInputRef}
                  />
                  <Button
                    variant="contained"
                    color="primary"
                    component="span"
                    onClick={handleImageUpload}
                    className="ml-4"
                    startIcon={<CloudUploadIcon />}
                  >
                    Update Image
                  </Button>
                </div>
                <Box className="flex">
                  {imagesPreview.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt="Images Preview"
                      className="w-1/2 mr-2 mb-2"
                    />
                  ))}
                  {oldImages.map((img, index) => (
                    <img
                      key={index}
                      src={img.url}
                      alt="Old Images"
                      className="w-1/2 mr-2 mb-2"
                    />
                  ))}
                </Box>
              </div>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className="w-full mb-4"
                onClick={createProductSubmitHandler}
              >
                Update Product
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default UpdateProduct;
