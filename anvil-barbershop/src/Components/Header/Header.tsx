import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      // Set up to trigger slideUp animation
      const dropdownMenu = document.querySelector('.dropdown-menu');
      if (dropdownMenu) {
        dropdownMenu.classList.add('dropdown-exit');
        setTimeout(() => {
          setIsOpen(false);
          const dropdownMenuAfterTimeout = document.querySelector('.dropdown-menu');
          if (dropdownMenuAfterTimeout) {
            dropdownMenuAfterTimeout.classList.remove('dropdown-exit');
          }
        }, 100); // Duration of the slideUp animation
      }
    } else {
      setIsOpen(true);
    }
  };

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      toggleMenu();
    }
  };

  const handleButtonClick = () => {
    toggleMenu();
  };

  const location = useLocation();

  const specialPages = ['/hours', '/prices', '/faq'];

  const borderColor = specialPages.includes(location.pathname) ? '#014421' : '#fff';




  return (
    <>
      <header
        className={`header flex w-screen min-h-[90px] h-[8vh] justify-center bg-[black] px-4 py-1 relative z-20 ${
          isOpen
            ? 'border-none'
            : `border-b-4 border-${borderColor} border-double`
        }`}
        style={{ borderBottomColor: borderColor }}
      >
        <nav className="flex justify-between w-[90%] max-w-[1200px] items-center">
          <div className="Logo flex justify-center items-center w-auto h-[80px]">

            <h1 className='text-white text-3xl'>Anvil Barbershop</h1>

            {/*
            <Link to="/" className="hover:text-black block">
              <img
                src="../JackLogoWhite.png"
                alt="Jacks Junk Removal Logo"
                className="h-[100%]"
              />
            </Link>
            */}
          </div>

          <div className="block lg:hidden">
            <button
              onClick={handleButtonClick}
              className={`menu-button ${isOpen ? 'is-active' : ''}`}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-evenly text:lg text-center items-center text-white w-full lg:w-[60%]">
            <li>
              <Link
                to="/"
                className="link hover:text-[#014421] block py-2 lg:py-0 font-bold"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/hours"
                className="link hover:text-[#014421] block py-2 lg:py-0 font-bold"
                onClick={handleLinkClick}
              >
                Hours
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="link hover:text-[#014421] block py-2 lg:py-0 font-bold"
                onClick={handleLinkClick}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="link hover:text-[#014421] block py-2 lg:py-0 font-bold"
                onClick={handleLinkClick}
              >
                FAQ
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul
          className={`header-mobile items-center justify-evenly h-[45vh] bg-black text-white text-center text-2xl absolute top-[90px] left-0 right-0 flex flex-col z-20 border-b-4 border-double dropdown-enter dropdown-menu`}
          style={{ borderBottomColor: borderColor }}
        >
          <li>
            <Link
              to="/"
              className="link hover:text-[red] block py-2 font-bold"
              onClick={handleLinkClick}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/hours"
              className="link hover:text-[red] block py-2 font-bold"
              onClick={handleLinkClick}
            >
              Hours
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="link hover:text-[red] block py-2 font-bold"
              onClick={handleLinkClick}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="link hover:text-[red] block py-2 font-bold"
              onClick={handleLinkClick}
            >
              FAQ
            </Link>
          </li>
        </ul>
      )}
    </>
  );
};

export default Header;