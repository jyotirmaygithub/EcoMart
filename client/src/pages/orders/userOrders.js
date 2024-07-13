import React, { useEffect } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import { useDispatch, useSelector } from "react-redux";
import { retrieveOrders } from "../../actions/ordersAction";
import OrderCard from "./utils/orderCard";

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userData);

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
      <OrderCard />
    </Box>
  );
};

export default UserProfile;
