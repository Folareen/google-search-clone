import React from 'react'
import StyledSearchNav from '../styles/StyledSearchNav.styled'
import { FaSearch, FaImage, FaVideo, FaRegNewspaper} from "react-icons/fa";
import { Link } from 'react-router-dom';

const navContents = [
  {icon: <FaSearch/>, title: "All", path:"/all"},
  {icon: <FaImage />, title: "Images", path:"/images"},
  {icon: <FaVideo />, title: "Videos", path:"/videos"},
  {icon: <FaRegNewspaper />, title: "News", path:"/news"}
]

const SearchNav = () => {
  return (
    <StyledSearchNav>
      
      {navContents.map(
        ({icon, title, path}, index) => {
          return <Link to={path} key={index}
          >
            {icon} {title}
          </Link>
        }
      )
      }
    </StyledSearchNav>
  )
}

export default SearchNav