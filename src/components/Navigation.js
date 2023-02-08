import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <nav className="nav-cont">
      <ul>
        <li className="nav-cont">
          <a
            href="#about"
            onClick={() => handlePageChange('Home')}
            className={currentPage === 'Home' ? 'active' : ''}
            title="About"
          >
            About Me
          </a>
        </li>
        <li className="nav-cont">
          <a
            href="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            className={currentPage === 'Portfolio' ? 'active' : ''}
            title="Portfolio"
          >
            Portfolio
          </a>
        </li>
        <li className="nav-cont">
          <a
            href="#resume"
            onClick={() => handlePageChange('Resume')}
            className={currentPage === 'Resume' ? 'active' : ''}
            title="Resume"
          >
            Resume
          </a>
        </li>
        <li className="nav-cont">
          <a
            href="#contact"
            onClick={() => handlePageChange('Contact')}
            className={currentPage === 'Contact' ? 'active' : ''}
            title="Contact"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
