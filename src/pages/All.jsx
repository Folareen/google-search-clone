import React from 'react'
import SearchNav from '../components/SearchNav'
import StyledAll from '../styles/StyledAll.styled'
import SearchField from '../components/SearchField'

const AllResults = () => {
  return (
    <StyledAll>
      <SearchField />
      <SearchNav />
      <div>
        results
      </div>
    </StyledAll>
  )
}

export default AllResults