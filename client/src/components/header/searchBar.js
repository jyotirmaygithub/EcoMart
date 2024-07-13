import React from "react";
import { SearchOutlined, CloseOutlined } from "@mui/icons-material";

const Search = ({
  handleSearchButtonClick,
  handleCrossButtonClick,
  handleSearchFormSubmit,
  handleSearchInputChange,
  searchValue,
}) => {
  return (
    <>
        <div className="flex items-center w-full bg-gray-200 rounded-full p-1.5">
          <form
            onSubmit={handleSearchFormSubmit}
            className="flex-grow flex items-center"
          >
            <button
              onClick={handleSearchFormSubmit}
              className="border-none outline-none bg-transparent cursor-pointer"
            >
              <SearchOutlined fontSize="large"sx={{color : "#212529"}} />
            </button>
            <input
              type="text"
              placeholder="Search..."
              value={searchValue}
              onChange={handleSearchInputChange}
              className="w-full outline-none bg-transparent ml-2 mr-2 text-lg p-1"
            />
          </form>
          <button
            onClick={handleCrossButtonClick}
            className="border-none outline-none bg-transparent cursor-pointer"
          >
            <CloseOutlined fontSize="large" sx={{color : "#212529"}}  />
          </button>
        </div>
    </>
  );
};

export default Search;
