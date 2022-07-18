import React, {useEffect, useState} from 'react'
import SearchNav from '../components/SearchNav'
import StyledAll from '../styles/StyledAll.styled'
import SearchField from '../components/SearchField'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Loading from '../components/Loading'

const AllResults = () => {
  // const {loading, result, error} = useGoogleSearch("javascript", "search")

  // useEffect(
  //   () => {
  //     console.log(
  //       loading, result, error
  //     )
  //   }
  // )

  return (
    <Loading/>

    // <StyledAll>
    //   <SearchField />
    //   <SearchNav />
    //   <div>
    //     results
    //   </div>
    // </StyledAll>
  )
}

export default AllResults