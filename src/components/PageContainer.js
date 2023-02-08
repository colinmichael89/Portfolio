import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

function PageContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // Switch rather than if/else
  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Resume':
        return <Resume />;
      case 'Contact':
        return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="page-cont">
        <main className="container box">{renderPage()}</main>
      </div>
      <Footer />
    </div>
  );
}

export default PageContainer;
