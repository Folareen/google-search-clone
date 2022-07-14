import React from "react";
import StyledSearch  from "../styles/StyledSearch.styled";
import { FaIcons, FaUser } from "react-icons/fa";
import SearchField from "../components/SearchField";

const Search = () => {
  return (
    <StyledSearch >
      <nav>
        <div>
          <button>Gmail</button>
          <button>Images</button>
        </div>
        <div>
          <button>
            <FaIcons />
          </button>
          <button>
            <FaUser />
          </button>
        </div>
      </nav>
      <SearchField showButtons={true} size />
      <p>Nigeria</p>
    </StyledSearch>
  );
};

export default Search;
