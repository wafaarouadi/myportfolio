import React from 'react';
import './Navbar.css';
import { GiQueenCrown } from 'react-icons/gi';



export default function Navbar() {
  return (
    <div>
      <div className='Navbar' id='Home'>
        <h2 className='logo navbar-item'>  <GiQueenCrown/><span>My</span>Portfolio</h2>
        <ul className='navbar-nav'>
          <li><a href="#Hoome" className='navbar-item'>
            Home
          </a></li>
          <li><a href="#About" className='navbar-item'>
            About
          </a></li>
          <li><a href='#Skiles' className='navbar-item'>
            Skils
          </a></li>
          <li><a href='#Projects' className='navbar-item'>
            Projets
          </a></li>
          <li><a href='#Contact' className='navbar-item'>
            Contact
          </a></li>

        </ul>
      </div>
    </div>
  )
}
