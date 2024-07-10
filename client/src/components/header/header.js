import React, { useState } from "react";
import SearchBar from "./searchBar";
import CartIcon from "./cartIcon";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileModal from "./profileModal";

function Header() {
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
          <div className="container mx-auto px-10 bg-gray-900">
            <div className="flex justify-between items-center py-6 space-x-4">
              <div className="flex items-center space-x-5">
                <p className="font-bold text-2xl text-white">EcoMart </p>
              </div>

              <div className="flex items-center w-full justify-end space-x-5">
                <div className="flex justify-end w-full ">
                  <SearchBar
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
          {/* </div> */}
        </div>
      </div>
    </>
  );
}

export default Header;
