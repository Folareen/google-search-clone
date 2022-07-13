import React from 'react'
import { StyledSearch } from '../styles/StyledSearch.styled'
import logo from '../assets/google-logo.png'

const Search = () => {
  return (
    <StyledSearch>
        <nav>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </nav> 
        <div>
            <img src={logo} alt="" />
        </div>
        <StyledSearchField>
        </StyledSearchField>
        <button type='submit'>
            Google Search
        </button>
        <a href='https://www.google.com/doodles'>
            I'm Feeling Lucky
        </a>


    </StyledSearch>
  )
}

export default Search