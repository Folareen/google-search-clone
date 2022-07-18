import React, {useEffect, useState, useContext} from 'react'
import SearchNav from '../components/SearchNav'
import StyledAll from '../styles/StyledAll.styled'
import SearchField from '../components/SearchField'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Loading from '../components/Loading'
// import {termContext} from '../context/SearchTermContext'

const AllResults = () => {
  // const {loading, result, error} = useGoogleSearch("javascript", "search")

  // useEffect(
  //   () => {
  //     console.log(
  //       loading, result, error
  //     )
  //   }
  // )

  // const {searchTerm, setSearchTerm} = useContext(termContext)
  // console.log(hey)

  return (
    // <Loading/>

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