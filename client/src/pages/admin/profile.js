import React, { useEffect } from "react";
import { Typography, Card, CardContent } from "@mui/material";
import { styled } from "@mui/system";
import Box from "../../components/admin/box";
import { totalUsers } from "../../actions/userActions";
import { getProduct } from "../../actions/productAction";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useSelector, useDispatch } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const StyledCard = styled(Card)({
  marginBottom: 30,
  padding: 20,
  backgroundColor: "#f5f5f5",
});

const ChartContainer = styled("div")({
  width: "80%",
  margin: "0 auto",
});

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  const { totalusers } = useSelector((state) => state.userData);

  useEffect(() => {
    dispatch(totalUsers());
    dispatch(getProduct());
  }, [dispatch]);

  const data = {
    labels: ["Users", "Products"],
    datasets: [
      {
        label: "Count",
        data: [totalusers?.data || 0, products?.data?.length || 0],
        backgroundColor: ["#36A2EB", "#FF6384"],
        borderColor: ["#36A2EB", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "User and Product Data Visualization",
      },
    },
  };

  return (
    <div className="my-32 mx-5">
      <StyledCard>
        <CardContent>
          <Typography variant="h4" component="div">
            Hello, Admin!
          </Typography>
          <Typography variant="body1" component="div" color="textSecondary">
            Welcome back to your dashboard. Here you can manage all your data,
            visualize user and product metrics, and much more.
          </Typography>
        </CardContent>
      </StyledCard>

      {products?.data && totalusers?.data && (
        <Box totalusers={totalusers.data} products={products.data.length} />
      )}

      <ChartContainer>
        <Bar data={data} options={options} />
      </ChartContainer>
    </div>
  );
};

export default Dashboard;
