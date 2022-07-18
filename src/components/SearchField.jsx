import React, {useContext} from 'react'
import { FaMicrophone, FaSearch } from 'react-icons/fa'
import StyledSearchField from '../styles/StyledSearchFIeld.styled'
import SearchButtons from './SearchButtons'
import logo from "../assets/google-logo.png";
import {Link} from 'react-router-dom'
import useGoogleSearch from '../hooks/useGoogleSearch';

const SearchField = ({showButtons, size}) => {
  const searchTerm = "elon"
  // 
  const [loading, result, error] = useGoogleSearch(searchTerm, "search")
  
  const googleSearch = (e) => {
    e.preventDefault();
    // searchTerm 
  }
  return (
    <StyledSearchField big={size} onSubmit={googleSearch}>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <div>
          <FaSearch/>
          <input type="search" />
          <FaMicrophone/>
        </div>

        {
          showButtons && <SearchButtons/>
        }

    </StyledSearchField>
  )
}

export default SearchField