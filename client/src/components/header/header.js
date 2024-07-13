import React, { useEffect, useState } from "react";
import SearchBar from "./searchBar";
import CartIcon from "./cartIcon";
import ProfileModal from "./profileModal";
import { retrieveCartItems } from "../../actions/cartAction";
import { fetchUserDetails } from "../../actions/userActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.userData);

  const [searchBarActive, setSearchBarActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(retrieveCartItems());
    dispatch(fetchUserDetails());
  }, [dispatch]);

  const handleSearchButtonClick = () => {
    setSearchBarActive(!searchBarActive);
  };

  const handleSearchInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    if (searchValue.trim()) {
    } 
  };

  const handleCrossButtonClick = () => {
    setSearchValue("");
    setSearchBarActive(!searchBarActive);
  };

  return (
    <>
      <div className="header">
        <div className="container px-4 md:px-10 bg-gray-900 fixed z-30 top-0 w-full">
          <div className="flex flex-col md:flex-row justify-between items-center py-4 md:py-6 space-y-4 md:space-y-0 md:space-x-4">
            <div
              className="flex items-center space-x-5 cursor-pointer"
              onClick={() => navigation("/")}
            >
              <p className="font-bold text-2xl text-white">EcoMart</p>
            </div>

            <div className="flex items-center w-full justify-end space-x-5">
              <div className="flex justify-end w-full md:w-auto">
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
        </div>
      </div>
    </>
  );
}

export default Header;
