import React from 'react';
import Navigation from './Navigation';

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="header-bg">
        <h1>Colin McNatt</h1>
        <Navigation
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </header>
  );
}

export default Header;
