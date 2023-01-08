import React from "react";
import "./bottomnav.css";

function BottomNav(props) {
  return (
    <div>
      <ul class='nav'>
        <span class='nav-indicator'></span>
        <li>
          <a href='#'>
            <i class='bx bx-home'></i>
            <span class='title'>Home</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <i class='bx bx-receipt'></i>
            <span class='title'>Receipt</span>
          </a>
        </li>
        <li>
          <a href='#' class='nav-item-active'>
            <i class='bx bx-plus-circle'></i>
            <span class='title'>Add</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <i class='bx bx-bell'></i>
            <span class='title'>Noti</span>
          </a>
        </li>
        <li>
          <a href='#'>
            <i class='bx bx-user'></i>
            <span class='title'>Account</span>
          </a>
        </li>
      </ul>

      <svg xmlns='http://www.w3.org/2000/svg' version='1.1' id='filter-svg'>
        <defs>
          <filter id='goo'>
            <feGaussianBlur
              in='SourceGraphic'
              stdDeviation='10'
              result='blur'
            />
            <feColorMatrix
              in='blur'
              mode='matrix'
              values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7'
              result='goo'
            />
            <feBlend in='SourceGraphic' in2='goo' />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default BottomNav;
