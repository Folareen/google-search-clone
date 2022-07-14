import React from 'react'
import SearchField from '../components/SearchField'
import SearchNav from '../components/SearchNav'
import StyledNews from '../styles/StyledNews.styled'

const News = () => {
  return (
    <StyledNews>
        <SearchField/>
        <SearchNav/>
        <div>
            News results
        </div>
    </StyledNews>
  )
}

export default News