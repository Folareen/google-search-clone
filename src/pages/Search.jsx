import React from "react";
import { StyledSearch } from "../styles/StyledSearch.styled";
import logo from "../assets/google-logo.png";
import { FaIcons, FaUser } from "react-icons/fa";
import SearchField from "../components/SearchField";
import SearchButtons from "../components/SearchButtons";

const Search = () => {
  return (
    <StyledSearch>
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
      <main>
        <img src={logo} alt="" />
        <SearchField showButtons={true} />
      </main>

      <p>Nigeria</p>
    </StyledSearch>
  );
};

export default Search;
