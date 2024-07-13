import React, { useEffect } from "react";
import { Card, Typography, Divider, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { retrieveOrders } from "../../../actions/ordersAction";
import { useNavigate } from "react-router-dom";

const Root = styled("div")(({ theme }) => ({
  padding: "1rem",
}));

const OrderCardContainer = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: 2,
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "box-shadow 0.3s ease-in-out",
  "&:hover": {
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  },
}));

const FirstBlock = styled("div")(({ theme }) => ({
  height: "fit-content",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
  width: "100%",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  marginTop: "1rem",
}));

const LeftSide = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
});

const RightSide = styled("div")({
  display: "flex",
  flexDirection: "column",
  padding: "0rem 0rem 1rem",
  justifyContent: "center",
});

const DividerStyled = styled(Divider)(({ theme }) => ({
  margin: "1.5rem 0rem",
  width: "50%",
}));

const ProductContainer = styled("div")({
  display: "flex",
  flexWrap: "wrap",
  gap: "2rem",
  justifyContent: "center",
  alignItems: "center",
  padding: "1rem 0rem",
});

const ProductCard = styled("div")({
  maxWidth: "300px",
  borderRadius: "8px",
  overflow: "hidden",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const OrderCard = () => {
  const { orders } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const isSmallScreen = useMediaQuery("(max-width: 999px)");

  useEffect(() => {
    dispatch(retrieveOrders());
  }, [dispatch]);

  console.log("orders=", orders);

  return (
    <Root>
      {orders.map((order, index) => (
        <div key={index}>
          <FirstBlock>
            <LeftSide>
              <Typography variant="subtitle1" style={{ fontWeight: "500" }}>
                ORDER PLACED
              </Typography>
              <Typography variant="body2" style={{ fontWeight: "500" }}>
                ORDER-ID: #{order._id}
              </Typography>
            </LeftSide>
            {!isSmallScreen && (
              <RightSide>
                <Typography variant="subtitle1" style={{ fontWeight: "500" }}>
                  Total:
                </Typography>
                <Typography variant="body2" color="141414">
                  <strong> ₹</strong>
                  {order.orderedProduct.reduce(
                    (total, product) =>
                      total + product.price * product.quantity,
                    0
                  )}
                </Typography>
              </RightSide>
            )}
          </FirstBlock>

          <ProductContainer>
            {order.orderedProduct.map((product, index) => (
              <div key={index}>
                <img
                  className="w-full h-48 object-cover"
                  src={product.image}
                  alt={product.title}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{product.title}</div>
                  <p className="text-gray-700 text-base">
                    Product Name: {product.title}
                  </p>
                  <p className="text-gray-700 text-base">
                    Product ID: {product.productId}
                  </p>
                  <p className="text-gray-700 text-base">
                    Price: ${product.price}
                  </p>
                  <p className="text-gray-700 text-base">
                    Quantity: {product.quantity}
                  </p>
                </div>
              </div>
            ))}
          </ProductContainer>

          <DividerStyled />
        </div>
      ))}
    </Root>
  );
};

export default OrderCard;
