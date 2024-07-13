import React, { useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { retrieveOrders } from "../../actions/ordersAction";
import OrderCard from "./utils/orderCard";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.userData);
  const { orders } = useSelector((state) => state.orders);

  useEffect(() => {
    console.log(user); // Logging user data on update
    dispatch(retrieveOrders());
  }, [dispatch, user]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" my={20}>
      {user.user_data && (
        <>
          <Box display="flex" flexDirection="column" alignItems="center" mb={5}>
            <Typography variant="h4" component="h2" fontWeight="bold" mb={2}>
              {user.user_data.name}
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
              <MailIcon sx={{ fontSize: 20, color: "gray", mr: 1 }} />
              <Typography variant="body1" color="textSecondary">
                {user.user_data.email}
              </Typography>
            </Box>
          </Box>
        </>
      )}
      <Typography variant="h5" component="p" fontWeight="bold" mb={4}>
        Your Placed Orders
      </Typography>
      {orders.length === 0 ? (
        <Box display="flex" flexDirection="column" alignItems="center">
          <RemoveShoppingCartIcon sx={{ color: "#F1C40F", fontSize: 54 }} />
          <Typography variant="h5" component="h1" fontWeight="bold" mb={2}>
            No Orders Placed
          </Typography>
          <Typography variant="body2" color="textSecondary" mb={2}>
            It looks like you haven't placed any orders yet.
          </Typography>
          <Button
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              bgcolor: "#F1C40F",
              borderRadius: "20px",
              "&:hover": {
                bgcolor: "#F1C40F",
              },
            }}
          >
            Shop Now
          </Button>
        </Box>
      ) : (
         <OrderCard />)
      }
    </Box>
  );
};

export default UserProfile;
