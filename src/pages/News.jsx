import React, {useContext} from 'react'
import SearchField from '../components/SearchField'
import SearchNav from '../components/SearchNav'
import StyledNews from '../styles/StyledNews.styled'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Loading from '../components/Loading'
import {SearchTermContext} from '../context/SearchTermContext'
import Error from '../components/Error'

const News = () => {

  const {searchTerm} = useContext(SearchTermContext)

  const [loading, result, error] = useGoogleSearch(searchTerm, "news")

  return (
    <StyledNews>
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
        <div>
          {result?.entries?.map(({ id, links, source, title }) => (
            <div key={id}>
              <a href={links?.[0].href} target="_blank" rel="noreferrer ">
              {title}
              </a>
              <a href={source?.href} target="_blank" rel="noreferrer"> {source?.href}</a>
            </div>
          ))}
        </div> 

        )}

    </StyledNews>
  )
}

export default News