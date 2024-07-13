import React from "react";
import { styled } from "@mui/system";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  dispalyMoney,
} from "../DisplayMoney/displayMoney";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "1.5rem 2rem",
  width: "fit-content",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  margin: "1rem 2rem",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    padding: "3rem 3rem",
    margin: "1rem 3rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "2rem",
    margin: "1rem",
    width: "80%",
  },
  [theme.breakpoints.down("xs")]: {
    padding: "2rem",
    margin: "1rem",
    width: "65%",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "200px",
  height: "240px",
  marginRight: "16px",
  [theme.breakpoints.down("sm")]: {
    width: "35%",
    marginLeft: "-2rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down("xs")]: {
    width: "30%",
    marginLeft: "-2rem",
    paddingRight: "1rem",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "fit-content",
  [theme.breakpoints.down("sm")]: {
    padding: "0",
    width: "fit-content",
  },
}));

const CartHeader = styled("div")({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "flex-start",
});

const TitleTypography = styled(Typography)(({ theme }) => ({
  width: "90%",
  fontSize: "1rem",
  fontWeight: 600,
  marginLeft: "1rem",
  [theme.breakpoints.down("xs")]: {
    fontSize: "14px",
    marginLeft: "0",
  },
}));

const CartDeleteIconButton = styled(IconButton)(({ theme }) => ({
  color: "black",
  marginTop: "-.5rem",
  [theme.breakpoints.down("xs")]: {
    marginRight: "-2rem",
  },
  "&:hover": {
    color: "#ed1c24",
  },
}));

const PriceItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: "1rem",
  marginLeft: "1.2rem",
  [theme.breakpoints.down("xs")]: {
    marginLeft: "0rem",
    marginRight: "-1rem",
  },
}));




const ContentBottom = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "1rem",
  alignItems: "baseline",
  width: "fit-content",
  flexDirection: "column",
  [theme.breakpoints.down("xs")]: {
    marginLeft: "0rem",
    marginRight: "-1rem",
  },
}));

function CartItem({ deleteCartItems, item }) {

  const price = dispalyMoney(item.price);
  const finalPrice = dispalyMoney(item.quantity * item.price);

  return (
    <StyledCard>
      <StyledCardMedia image={item.image} title={item.title} />
      <StyledCardContent>
        <div>
          <CartHeader>
            <TitleTypography variant="subtitle1">{item.title}</TitleTypography>
            <CartDeleteIconButton
              aria-label="delete"
              onClick={() => deleteCartItems(item.productId)}
            >
              <DeleteIcon sx={{ color: "red" }} />
            </CartDeleteIconButton>
          </CartHeader>
          <PriceItem>
            <p >
              Price:
            </p>
            <p className="font-semibold">
              {price}
            </p>
          </PriceItem>
        </div>
        <ContentBottom>
          <div className="flex space-x-4">
            <h5>QTY:</h5>
           <p>{item.quantity}</p>
            </div>
          <PriceItem>
            <p variant="body2">
              Total:
            </p>
            <p className="font-semibold" variant="subtitle1">{finalPrice}</p>
          </PriceItem>
        </ContentBottom>
      </StyledCardContent>
    </StyledCard>
  );
}

export default CartItem;
