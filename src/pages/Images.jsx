import React,{useContext} from 'react'
import SearchField from '../components/SearchField'
import SearchNav from '../components/SearchNav'
import StyledImages from '../styles/StyledImages.styled'
import useGoogleSearch from '../hooks/useGoogleSearch'
import Loading from '../components/Loading'
import {SearchTermContext} from '../context/SearchTermContext'
import Error from '../components/Error'

const Images = () => {
  const {searchTerm, setSearchTerm} = useContext(SearchTermContext)

  const [loading, result, error] = useGoogleSearch(searchTerm, "image")

  return (
    <StyledImages>
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
        {result?.image_results?.map(({ image, link: { href, title } }, index) => {
          return (
          <a href={href} target="_blank" key={index}>
            <img src={image?.src} alt={title} />
            <p >{title}</p>
          </a>)
        }
        )}
      </div>        
          )

      }
    </StyledImages>
  )
}

export default Images