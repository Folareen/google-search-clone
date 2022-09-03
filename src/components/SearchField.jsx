import React, { useContext} from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import StyledSearchField from "../styles/StyledSearchFIeld.styled";
import SearchButtons from "./SearchButtons";
import logo from "../assets/google-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { SearchTermContext } from "../context/SearchTermContext";

const SearchField = ({ showButtons, size }) => {
  const {setSearchTerm, inputValue, setInputValue} = useContext(SearchTermContext);
  const navigate = useNavigate();
  const location = useLocation();

  const googleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(inputValue);
    if (location.pathname === "/") {
      navigate("/all");
    }
  };

  return (
    <StyledSearchField big={size} onSubmit={googleSearch}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div>
        <FaSearch />
        <input type="search" value={inputValue} onChange={
          (e) => {
            setInputValue(e.target.value)
          }
        }/>
        <FaMicrophone />
      </div>

      {showButtons && <SearchButtons />}
    </StyledSearchField>
  );
};

export default SearchField;
