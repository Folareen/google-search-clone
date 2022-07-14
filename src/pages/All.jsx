import React, {useEffect, useState} from 'react'
import SearchNav from '../components/SearchNav'
import StyledAll from '../styles/StyledAll.styled'
import SearchField from '../components/SearchField'
import useGoogleSearch from '../hooks/useGoogleSearch'

const AllResults = ({children}) => {
  const {loading, result, error} = useGoogleSearch("elon", "search")

  useEffect(
    () => {
      console.log(
        loading, result, error
      )
    }
  )

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