import React from 'react';
import './End.css';
import { AiFillInstagram } from 'react-icons/ai';
import { FaTelegramPlane } from 'react-icons/fa';
import { BsTwitter } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';
import { BsMessenger } from 'react-icons/bs';

export default function End() {
  return (


    <div ClassName="end">

      <div className='icon-end'>
        <a href='#' className='media'><BsTwitter /></a>
        <a href='#' className='media'><AiFillInstagram /></a>
        <a href='#' className='media'><FaTelegramPlane /></a>
        <a href='#' className='media'><BsFacebook /></a>
        <a href='#' className='media'><BsMessenger /></a>
      </div>
      <footer>
        <svg viewBox="0 0 120 28">
          <defs>
            <mask id="xxx">
              <circle cx="7" cy="12" r="40" fill="#fff" />
            </mask>

            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="
           1 0 0 0 0  
           0 1 0 0 0  
           0 0 1 0 0  
           0 0 0 13 -9" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
            <path id="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
          </defs>

          <use id="wave3" class="wave" href="#wave" x="0" y="-2" ></use>
          <use id="wave2" class="wave" href="#wave" x="0" y="0" ></use>

          <g class="topball">
            <circle class="ball" cx="110" cy="8" r="4" stroke="none" stroke-width="0" fill="red" />

            <g class="arrow">
              <polyline class="" points="108,8 110,6 112,8" fill="none" />
              <polyline class="" points="110,6 110,10.5" fill="none" />
            </g>

          </g>
          <g class="gooeff">
            <circle class="drop drop1" cx="20" cy="2" r="1.8" />
            <circle class="drop drop2" cx="25" cy="2.5" r="1.5" />
            <circle class="drop drop3" cx="16" cy="2.8" r="1.2" />
            <use id="wave1" class="wave" href="#wave" x="0" y="1" />


            <path id="wave1" class="wave" d="M 0,10 C 30,10 30,15 60,15 90,15 90,10 120,10 150,10 150,15 180,15 210,15 210,10 240,10 v 28 h -240 z" />
          </g>


        </svg>

        <div ClassName="thanks">Thank U For visiting My Portfolio-by Wafae Rouadi</div>
      </footer>

    </div>





  )
}
