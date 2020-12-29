import React, {useState, useEffect} from 'react'
import netflixLogo from '../src/images/netflix.png';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll')
    };
  }, []);
  return (
    <div className={`nav ${show && 'navBlack'}`}>
      <img
        className='navLogo'
        src={netflixLogo} alt="Netflix Logo"/>
      
    </div>
  )
}

export default Nav
