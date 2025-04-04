'use client';

import Link from 'next/link';
import { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <Link className='nav-brand' href='/'>
        unfoldproblems
      </Link>
      <div onClick={handleClick} class='hamburger'>
        <div class='line'></div>
        <div class='line'></div>
        <div class='line'></div>
      </div>
      <ul class={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <Link onClick={handleClick} className='nav-link' href=''>
            home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} className='nav-link' href='/algebra'>
            algebra
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} className='nav-link' href='/kinematics'>
            kinematics
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} className='nav-link' href='/calculator'>
            calculator
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
