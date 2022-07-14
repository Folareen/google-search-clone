import React from 'react'
import SearchField from '../components/SearchField'
import SearchNav from '../components/SearchNav'
import StyledImages from '../styles/StyledImages.styled'

const Images = () => {
  return (
    <StyledImages>
        <SearchField/>
        <SearchNav/>
        <div>
            images results
        </div>
    </StyledImages>
  )
}

export default Images