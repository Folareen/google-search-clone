import React from 'react'
import { FaMicrophone, FaSearch } from 'react-icons/fa'
import StyledSearchField from '../styles/StyledSearchFIeld.styled'
import SearchButtons from './SearchButtons'
import logo from "../assets/google-logo.png";

const SearchField = ({showButtons, size}) => {
  return (
    <StyledSearchField big={size}>
        <img src={logo} alt="" />
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