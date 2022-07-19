import React, { useContext, useEffect, useRef } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import StyledSearchField from "../styles/StyledSearchFIeld.styled";
import SearchButtons from "./SearchButtons";
import logo from "../assets/google-logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";
import useGoogleSearch from "../hooks/useGoogleSearch";
import { SearchTermContext } from "../context/SearchTermContext";

const SearchField = ({ showButtons, size }) => {
  const { searchTerm, setSearchTerm } = useContext(SearchTermContext);
  const searchInput = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  //
  // const [loading, result, error] = useGoogleSearch(searchTerm, "search")

  const googleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput.current.value);
    if (location.pathname === "/") {
      navigate("/all");
    }
  };

  // useEffect(
  //   () => {
  //     // console.log(result)
  //   }, [searchTerm]
  // )
  return (
    <StyledSearchField big={size} onSubmit={googleSearch}>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>
      <div>
        <FaSearch />
        <input type="search" ref={searchInput} />
        <FaMicrophone />
      </div>

      {showButtons && <SearchButtons />}
    </StyledSearchField>
  );
};

export default SearchField;
