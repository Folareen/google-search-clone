import React, {useEffect, useState, useContext} from 'react'
import SearchNav from '../components/SearchNav'
import StyledAll from '../styles/StyledAll.styled'
import SearchField from '../components/SearchField'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Loading from '../components/Loading'
import {SearchTermContext} from '../context/SearchTermContext'
import Error from '../components/Error'

const AllResults = () => {

  const {searchTerm, setSearchTerm} = useContext(SearchTermContext)

  const [loading, result, error] = useGoogleSearch(searchTerm, "search")

  return (

    <StyledAll>
      <SearchField />
      <SearchNav />
      {
        loading ?
        <Loading/>
        :
          (
        error ?
        <Error/>
        :
      <div>
        {
          result?.results?.map(
            ({title, link, description}, index) => {
              return <div key={index}>
                <p>
                  {link}
                </p>
                <a href={link}>
                  {title}
                </a>
                <p>
                  {description}
                </p>
                </div>
            }
          )
        }
      </div>        
          )

      }


    </StyledAll>
  )
}

export default AllResults