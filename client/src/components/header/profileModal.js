import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar } from "@mui/material";
import {
  ContactSupport,
  Info,
  Logout,
  ShoppingCartOutlined,
  MenuOutlined,
  AdminPanelSettingsOutlined,
  AddBoxOutlined,
} from "@mui/icons-material";
import { checkCookie, deleteAuthToken } from "../../actions/authAction";
import {  clearCart} from "../../actions/cartAction";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function AnchorTemporaryDrawer() {
  const { user } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const [state, setState] = React.useState({});
  const dispatch = useDispatch()

  React.useEffect(() => {}, [user]);

  const toggleDrawer = (anchor, open) => (event) => {
    if(dispatch(checkCookie())){
      setState({ ...state, [anchor]: open });
    }
    else{
      navigate("/login")
    }
  };

  const handleClick = (value) => {
    if (value === "Logout") {
      dispatch(deleteAuthToken())
      dispatch(clearCart());
      navigate(`/`);
      toast.success("Logout Successfully");
    } else {
      navigate(`/${value.toLowerCase().replace(" ", "-")}`);
    }
  };

  const isAdmin = (userData) => {
    // Check if user and user data exist, then compare email and ID
    if (user && userData) {
      if (
        process.env.REACT_APP_ADMIN_EMAIL === userData.email &&
        process.env.REACT_APP_ADMIN_ID === userData._id
      ) {
        console.log("User is an admin.");
        return true;
      } else {
        console.log("User is not an admin.");
      }
    }

    return false;
  };

  // Define the icon color
  const iconColor = { color: "#F1C40F" };

  const icons = {
    "View Admin": <AdminPanelSettingsOutlined sx={iconColor} />,
    "View Products": <AddBoxOutlined sx={iconColor} />,
    Cart: <ShoppingCartOutlined sx={iconColor} />,
    Orders: <ShoppingCartOutlined sx={iconColor} />,
    About: <Info sx={iconColor} />,
    Contact: <ContactSupport sx={iconColor} />,
    Logout: <Logout sx={iconColor} />,
  };

  const userOptions = ["Cart", "Orders"];
  const adminOptions = ["View Admin", "View Products"];

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="grid justify-center items-center my-2 space-y-2">
        <Avatar  src={user.user_data ? user.user_data.picture : ""} sx={{ width: 150, height: 150 }} alt="User Avatar" />
      </div>
      <List>
        {isAdmin(user.user_data) &&
          adminOptions.map((text) => (
            <ListItem
              key={text}
              disablePadding
              onClick={() => handleClick(text)}
            >
              <ListItemButton>
                <ListItemIcon>{icons[text]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        <Divider />
        {userOptions.map((text) => (
          <ListItem key={text} disablePadding onClick={() => handleClick(text)}>
            <ListItemButton>
              <ListItemIcon>{icons[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["About", "Contact", "Logout"].map((text) => (
          <ListItem key={text} disablePadding onClick={() => handleClick(text)}>
            <ListItemButton>
              <ListItemIcon>{icons[text]}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key="avatar">
        <Button className="space-x-2 border-white" onClick={toggleDrawer("avatar", true)}>
          <Avatar  src={user.user_data ? user.user_data.picture : ""} sx={{border: '2px solid white',}} alt="User Avatar" />
          <MenuOutlined sx={{ color: "white" }} />     
        </Button>
        <Drawer
          anchor="right"
          open={state["avatar"]}
          onClose={toggleDrawer("avatar", false)}
        >
          {list("avatar")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
