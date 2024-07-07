import React from "react";
import { Typography, Container, Grid, Button } from "@mui/material";
// import MetaData from "../component/layouts/MataData/MataData";
// import TermsImage from "../Image/about/tc.jpg";
import { Link } from "react-router-dom";

const About_UsPage = () => {
  return (
    <>
      <div className="pt-32 pb-16 bg-white w-full flex flex-col justify-center items-center">
        {/* <MetaData title={"About Us"} /> */}
        <Container className="p-8 text-center bg-white max-w-full">
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                src={"https://images.unsplash.com/photo-1631010231888-777b6285ef84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjAyNjIyODZ8&ixlib=rb-4.0.3&q=85"}
                alt="E-commerce"
                className="w-full h-auto mt-12 mb-8"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography
                variant="h2"
                component="h1"
                className="text-gray-800 text-lg p-8 font-medium"
              >
                About Us
              </Typography>
              <Typography variant="body1" className="max-w-2xl leading-7 my-6 text-gray-800 text-base font-normal text-justify p-4">
                Welcome to ShopEase, your number one source for all things fashion, electronics, and home essentials. We're dedicated to giving you the very best of products, with a focus on quality, customer service, and uniqueness.
              </Typography>
              <Typography variant="body1" className="max-w-2xl leading-7 my-6 text-gray-800 text-base font-normal text-justify p-4">
                Founded in 2020, ShopEase has come a long way from its beginnings. When we first started out, our passion for providing top-notch products at competitive prices drove us to do intense research, and gave us the impetus to turn hard work and inspiration into a booming online store. We now serve customers all over the world, and are thrilled to be a part of the e-commerce industry.
              </Typography>
            </Grid>
          </Grid>
        </Container>
        <Container className="p-8 text-center bg-white max-w-full">
          <Typography
            variant="h3"
            component="h1"
            className="text-gray-800 text-xl p-8 font-light text-center"
          >
            Who We Are
          </Typography>
          <Typography variant="body1" className="leading-7 my-8 text-gray-800 text-base font-normal text-justify p-4">
            At ShopEase, we believe in providing our customers with a wide variety of high-quality products that cater to their diverse needs and preferences. From trendy apparel to the latest electronics and home essentials, we strive to offer something for everyone.
          </Typography>
          <Typography variant="body1" className="leading-7 my-8 text-gray-800 text-base font-normal text-justify p-4">
            Our team is committed to delivering an exceptional shopping experience by focusing on customer satisfaction, convenience, and innovation. We work closely with top manufacturers and suppliers to ensure that our products meet the highest standards of quality and performance.
          </Typography>
          <Typography variant="body1" className="leading-7 my-8 text-gray-800 text-base font-normal text-justify p-4">
            ShopEase is more than just an online store; it's a community of passionate individuals who share a love for shopping and discovery. Join us on our journey as we continue to grow and bring you the best products and services.
          </Typography>
        </Container>
        <Container className="p-8 text-center bg-white max-w-full">
          <Typography
            variant="h3"
            component="h1"
            className="text-gray-800 text-xl p-8 font-light text-center"
          >
            Our Mission
          </Typography>
          <Typography variant="body1" className="leading-7 my-8 text-gray-800 text-base font-normal text-justify p-4">
            Our mission at ShopEase is to provide customers with a seamless online shopping experience that combines convenience, quality, and affordability. We aim to make online shopping easy and enjoyable, offering a curated selection of products that enhance our customers' lives.
          </Typography>
          <Typography variant="body1" className="leading-7 my-8 text-gray-800 text-base font-normal text-justify p-4">
            We are committed to continuous improvement and innovation, constantly seeking new ways to serve our customers better. Whether it's through expanding our product range, improving our website's functionality, or providing exceptional customer service, we are dedicated to exceeding your expectations.
          </Typography>
          <div className="flex justify-center items-center py-4 w-full mt-4">
            <Link
              to="/products"
              className="text-none text-none"
            >
              <Button variant="contained" className="bg-black text-white w-fit py-2 px-8 ml-12 rounded hover:bg-red-600 hover:text-white">
                Our Products
              </Button>
            </Link>
            <Link
              to="/contact"
              className="text-none text-none"
            >
              <Button variant="contained" className="bg-gray-800 text-white w-fit py-2 px-8 ml-4 rounded hover:bg-red-600 hover:text-white">
                Contact Us
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </>
  );
};

export default About_UsPage;
