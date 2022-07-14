import React from 'react'
import StyledSearchButtons from '../styles/StyledSearchButtons.styled'

const SearchButtons = () => {
  return (
        <StyledSearchButtons>
            <button type='submit'>
                Google Search
            </button>
            <a href='https://www.google.com/doodles'>
                I'm Feeling Lucky
            </a>
        </StyledSearchButtons>
  )
}

export default SearchButtons