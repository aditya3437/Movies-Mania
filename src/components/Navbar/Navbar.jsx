import React from 'react'
import { FaFire, FaStar } from 'react-icons/fa'
import { GiPartyPopper } from 'react-icons/gi'
import './Navbar.css';
import DarkMode from './DarkMode/DarkMode';

const Navbar = () => {
  return (
    <nav className='navbar'>

      <h1>Movies Mania</h1>
      <div className='nav-links'>
      <DarkMode />
        <a href='#'>
          <FaFire className='navbar_emoji' /> Popular
        </a>
        <a href='#'>
          <FaStar className='navbar_emoji' /> Top Rated
        </a>
        <a href='#'>
          <GiPartyPopper className='navbar_emoji' /> Upcoming
        </a>
      </div>
    </nav>
  )
}

export default Navbar
