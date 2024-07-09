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
  Person2Outlined,
  ShoppingCartOutlined,
  MenuOutlined,
  AdminPanelSettingsOutlined,
  AddBoxOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AnchorTemporaryDrawer() {
  const { user } = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const [state, setState] = React.useState({});

  React.useEffect(() => {}, [user]);

  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };

  const handleClick = (value) => {
    if (value === "Logout") {
      navigate(`/login`);
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

  const icons = {
    "View Profile": <Person2Outlined />,
    Orders: <ShoppingCartOutlined />,
    About: <Info />,
    Contact: <ContactSupport />,
    Logout: <Logout />,
    "View Admin": <AdminPanelSettingsOutlined />,
    "New Product": <AddBoxOutlined />,
    "Update Product": <EditOutlined />,
    "Delete Product": <DeleteOutlined />,
  };

  const userOptions = ["View Profile", "Orders"];
  const adminOptions = [
    "View Admin",
    "New Product",
    "Update Product",
    "Delete Product",
  ];

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="grid justify-center items-center my-2 space-y-2">
        <Avatar sx={{ width: 150, height: 150 }} alt="User Avatar" />
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
        <Button className="space-x-2" onClick={toggleDrawer("avatar", true)}>
          <MenuOutlined sx={{ color: "black" }} />
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
