import React from "react";
import { styled } from "@mui/system";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Input,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import {
  dispalyMoney,
  generateDiscountedPrice,
} from "../DisplayMoney/displayMoney";

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "1.5rem 2rem",
  width: "fit-content",
  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
  margin: "1rem 2rem",
  height: "auto",
  [theme.breakpoints.down(899)]: {
    padding: "3rem 3rem",
    margin: "1rem 3rem",
  },
  [theme.breakpoints.down(699)]: {
    padding: "2rem",
    margin: "1rem",
    width: "80%",
  },
  [theme.breakpoints.down(499)]: {
    padding: "2rem",
    margin: "1rem",
    width: "65%",
  },
}));

const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: "200px",
  height: "240px",
  marginRight: "16px",
  [theme.breakpoints.down(699)]: {
    width: "35%",
    marginLeft: "-2rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down(599)]: {
    width: "30%",
    marginLeft: "-2rem",
    paddingRight: "1rem",
  },
  [theme.breakpoints.down(499)]: {
    width: "20%",
    marginLeft: "-2rem",
    paddingRight: "1rem",
  },
}));

const StyledCardContent = styled(CardContent)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  width: "fit-content",
  [theme.breakpoints.down(699)]: {
    padding: "0",
    width: "fit-content",
  },
  [theme.breakpoints.down(599)]: {
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
  [theme.breakpoints.down(599)]: {
    fontSize: "14px",
    marginLeft: "0",
  },
  "& .MuiTypography-subtitle1": {
    [theme.breakpoints.down(599)]: {
      fontSize: "14px",
    },
  },
}));

const CartDeleteIconButton = styled(IconButton)(({ theme }) => ({
  color: "black",
  marginTop: "-.5rem",
  [theme.breakpoints.down(599)]: {
    marginRight: "-2.5rem",
  },
  "&:hover": {
    color: "#ed1c24",
  },
  [theme.breakpoints.down(499)]: {
    marginRight: "-2rem",
  },
}));

const PriceItem = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "baseline",
  gap: "1rem",
  marginLeft: "1.2rem",
  [theme.breakpoints.down(599)]: {
    marginLeft: "0rem",
    marginRight: "-1rem",
  },
}));

const CartSubHeadingsTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  textTransform: "uppercase",
  color: "#414141",
  [theme.breakpoints.down(599)]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down(499)]: {
    fontSize: "12px",
  },
}));

const ItemPriceTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  [theme.breakpoints.down(599)]: {
    fontSize: "14px",
  },
  [theme.breakpoints.down(499)]: {
    fontSize: "13px",
  },
}));

const ItemOldPriceTypography = styled(Typography)(({ theme }) => ({
  marginLeft: "-8px",
  fontSize: "14px",
  fontWeight: 400,
  [theme.breakpoints.down(499)]: {
    fontSize: "12px",
  },
}));

const ContentBottom = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  marginTop: "1rem",
  alignItems: "baseline",
  width: "fit-content",
  flexDirection: "column",
  [theme.breakpoints.down(599)]: {
    marginLeft: "0rem",
    marginRight: "-1rem",
  },
  [theme.breakpoints.down(550)]: {
    position: "relative",
    marginLeft: "0rem",
  },
}));

function CartItem({
  deleteCartItems,
  item,
  decreaseQuantity,
  increaseQuantity,
  length,
}) {
  console.log("item = ",item.title)
  // Calculate price after discount
  let finalPrice = generateDiscountedPrice(item.price);
  let discountedPrice = item.price - finalPrice;
  discountedPrice = dispalyMoney(discountedPrice);
  let total = finalPrice * item.quantity;
  total = dispalyMoney(total);
  finalPrice = dispalyMoney(finalPrice);
  return (
    <StyledCard>
      <StyledCardMedia
        image={item.image}
        title={item.title}
      />
      <StyledCardContent>
        <div>
          <CartHeader>
            <TitleTypography variant="subtitle1">
              {item.title}
            </TitleTypography>
            <CartDeleteIconButton
              aria-label="delete"
              onClick={() => deleteCartItems(item.productId)}
            >
              <DeleteIcon />
            </CartDeleteIconButton>
          </CartHeader>
          <PriceItem>
            <CartSubHeadingsTypography variant="body2">
              Price:
            </CartSubHeadingsTypography>
            <ItemPriceTypography variant="subtitle1">
              {finalPrice}
            </ItemPriceTypography>
            <ItemOldPriceTypography
              variant="caption"
              component="span"
              color="black"
            >
              <del>{discountedPrice}</del>
            </ItemOldPriceTypography>
          </PriceItem>
        </div>
        <ContentBottom>
          <div className="prod_details_additem">
            <h5>QTY:</h5>
            <div className="additem">
              <IconButton
                onClick={() => decreaseQuantity(item.productId, item.quantity)}
                className="additem_decrease"
              >
                <RemoveIcon />
              </IconButton>
              <Input
                readOnly
                type="number"
                value={item.quantity}
                className="input"
              />
              <IconButton
                onClick={() =>
                  increaseQuantity(item.productId, item.quantity, item.stock)
                }
                className="additem_increase"
              >
                <AddIcon />
              </IconButton>
            </div>
          </div>
          <PriceItem>
            <CartSubHeadingsTypography variant="body2">
              TOTAL:
            </CartSubHeadingsTypography>
            <Typography variant="subtitle1">
              {total}
            </Typography>
          </PriceItem>
        </ContentBottom>
      </StyledCardContent>
    </StyledCard>
  );
}

export default CartItem;
