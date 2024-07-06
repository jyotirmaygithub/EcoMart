import React from "react";
import { SearchOutlined, CloseOutlined } from "@mui/icons-material";

const Search = ({
  handleSearchButtonClick,
  handleCrossButtonClick,
  searchBarActive,
  handleSearchFormSubmit,
  handleSearchInputChange,
  searchValue,
}) => {
  return (
    <>
      {!searchBarActive && (
        <button
          onClick={handleSearchButtonClick}
          className="border-none outline-none bg-transparent cursor-pointer"
        >
          <SearchOutlined fontSize="large" className="text-gray-700" />
        </button>
      )}
      {searchBarActive && (
        <div className="flex items-center w-full bg-gray-200 rounded-full p-1.5">
          <form
            onSubmit={handleSearchFormSubmit}
            className="flex-grow flex items-center"
          >
            <button
              onClick={handleSearchFormSubmit}
              className="border-none outline-none bg-transparent cursor-pointer"
            >
              <SearchOutlined fontSize="large" className="text-gray-700" />
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
            <CloseOutlined fontSize="large" className="text-gray-700" />
          </button>
        </div>
      )}
    </>
  );
};

export default Search;
