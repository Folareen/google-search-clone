import React,{useContext} from 'react'
import SearchField from '../components/SearchField'
import SearchNav from '../components/SearchNav'
import StyledVideos from '../styles/StyledVideos.styled'
import ReactPlayer from 'react-player'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Loading from '../components/Loading'
import {SearchTermContext} from '../context/SearchTermContext'
import Error from '../components/Error'

const Videos = () => {
  const {searchTerm, setSearchTerm} = useContext(SearchTermContext)

  const [loading, result, error] = useGoogleSearch(searchTerm, "video")

  return (
    <StyledVideos>
        <SearchField/>
        <SearchNav/>
{
        loading ?
        <Loading/>
        :
          (
        error ?
        <Error/>
        :
        <div >
          {result?.results?.map((video, index) => (
            <div key={index} >
              <ReactPlayer url={video.additional_links?.[0].href} controls width="400px" height="250px" />
            </div>
          ))}
        </div>      
          )

      }
    </StyledVideos>
  )
}

export default Videos