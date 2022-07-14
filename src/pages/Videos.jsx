import React from 'react'
import SearchField from '../components/SearchField'
import SearchNav from '../components/SearchNav'
import StyledVideos from '../styles/StyledVideos.styled'

const Videos = () => {
  return (
    <StyledVideos>
        <SearchField/>
        <SearchNav/>
        <div>
            Videos results
        </div>
    </StyledVideos>
  )
}

export default Videos