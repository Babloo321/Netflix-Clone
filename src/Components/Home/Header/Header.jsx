import React from 'react'
import logo from "../../../Netflix_2015_logo.svg.png"
import {Link} from 'react-router-dom';
import {ImSearch} from 'react-icons/im';
function Header() {
   console.log(logo)
  return (
   <nav className='header'>
    <img src={logo} alt="netflix"/>
    <div>
    <Link to="/tvshows"> TV Shows</Link>
    <Link to="/Movies"> Movies</Link>
    <Link to="/Recently Added"> Recently Added</Link>
    <Link to="/My List"> My List</Link>
    </div>
    <ImSearch/>
   </nav>
  )
}

export default Header