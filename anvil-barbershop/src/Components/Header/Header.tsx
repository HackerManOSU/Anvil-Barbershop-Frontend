import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const handleLinkClick = () => {
    if (window.innerWidth < 1024) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `link block py-2 font-bold transition-colors duration-300 ${
      isActive ? 'text-anvilRed' : 'text-white hover:text-anvilLightRed'
    }`;

  return (
    <>
      <header
        className="header fixed top-0 left-0 right-0 min-h-[90px] bg-anvilBackground border-b-4 border-double border-white z-30"
      >
        <nav className="mx-auto flex min-h-[90px] w-[92%] max-w-[1200px] items-center justify-between" aria-label="Primary">
          <Link to="/" className="text-white text-2xl sm:text-3xl font-bold tracking-wide hover:text-anvilLightRed transition-colors duration-300">
            Anvil Barbershop
          </Link>

          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className={`menu-button ${isOpen ? 'is-active' : ''}`}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              type="button"
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex justify-evenly text-center items-center w-full lg:w-[60%]" role="list">
            <li>
              <NavLink
                to="/"
                className={linkClassName}
                onClick={handleLinkClick}
                end
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/hours"
                className={linkClassName}
                onClick={handleLinkClick}
              >
                Hours
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={linkClassName}
                onClick={handleLinkClick}
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/faq"
                className={linkClassName}
                onClick={handleLinkClick}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <nav className="header-mobile fixed top-[90px] left-0 right-0 bg-anvilBackground border-b-4 border-double border-white z-20" aria-label="Mobile">
          <ul id="mobile-navigation" className="items-center justify-evenly min-h-[40vh] text-center text-2xl flex flex-col dropdown-enter" role="list">
            <li>
              <NavLink to="/" className={linkClassName} onClick={handleLinkClick} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/hours" className={linkClassName} onClick={handleLinkClick}>
                Hours
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={linkClassName} onClick={handleLinkClick}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={linkClassName} onClick={handleLinkClick}>
                FAQ
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;