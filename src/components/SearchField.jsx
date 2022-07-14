import React from 'react'
import { FaMicrophone, FaSearch } from 'react-icons/fa'
import StyledSearchField from '../styles/StyledSearchFIeld.styled'
import SearchButtons from './SearchButtons'

const SearchField = ({showButtons}) => {
  return (
    <StyledSearchField>

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