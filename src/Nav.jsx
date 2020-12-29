import React from 'react'
import netflixLogo from '../src/images/netflix.png';
import './Nav.css';

function Nav() {
  return (
    <div className='nav'>

      <img
        className='navLogo'
        src={netflixLogo} alt="Netflix Logo"/>
      
    </div>
  )
}

export default Nav
