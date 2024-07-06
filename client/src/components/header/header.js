import React, { useState } from "react";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchBar from "./searchBar";
import CartIcon from "./cartIcon";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import Sidebar from "./sideBar";
import { useSelector } from "react-redux";
import ProfileModal from "./profileModal";

function Header() {
  // const history = useHistory();
  const { isAuthenticated, user } = useSelector((state) => state.userData);

  const [searchBarActive, setSearchBarActive] = useState(false);
  const [country, setCountry] = useState("in");
  const [sideMenu, setSideMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleSideBarMenu = () => {
    setSideMenu(!sideMenu);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSearchButtonClick = () => {
    setSearchBarActive(!searchBarActive);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
      // history.push(`/products/${searchValue}`);
    } else {
      // history.push("/products");
    }
  };

  const handleCrossButtonClick = () => {
    setSearchValue("");
    setSearchBarActive(!searchBarActive);
  };

  return (
    <>
      <div className="header">
        <div className="bg-white shadow-lg">
          <div className="container mx-auto px-20">
            <div className="flex justify-between items-center py-6 space-x-4">
              <div className="flex items-center space-x-5">
                <Link to="/">
                  <img
                    src="https://images.unsplash.com/photo-1615915468538-0fbd857888ca?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTIzNDJ8MHwxfGFsbHx8fHx8fHx8fDE3MjAyNjk1NDN8&ixlib=rb-4.0.3&q=85"
                    alt="logo"
                    className="w-16 h-12 rounded-full object-cover"
                  />
                </Link>
                <p>Ecommerce </p>
              </div>

              <div className="flex items-center w-full justify-end space-x-5">
                <div className="flex justify-end w-full ">
                  <SearchBar
                    searchBarActive={searchBarActive}
                    searchValue={searchValue}
                    handleCrossButtonClick={handleCrossButtonClick}
                    handleSearchButtonClick={handleSearchButtonClick}
                    handleSearchInputChange={handleSearchInputChange}
                    handleSearchFormSubmit={handleSearchFormSubmit}
                  />
                </div>
                <div>
                  <Link to="/cart">
                    <CartIcon />
                  </Link>
                </div>
                <div>
                  <ProfileModal user={user} isAuthenticated={isAuthenticated} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
