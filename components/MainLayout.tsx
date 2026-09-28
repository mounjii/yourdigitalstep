import React, { Suspense, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import InteractiveBackground from './InteractiveBackground';

const MainLayout: React.FC = () => { 
  const { pathname, hash } = useLocation();

  // Effect to scroll to the top when the page (pathname) changes.
  useEffect(() => {
    // We only scroll to top if there's no hash, to allow anchor links to work.
    if (!hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return ( 
    <>
      <a href="#main-content" className="skip-link">Skip to content</a>
      <InteractiveBackground />
      <Header currentPath={pathname} />
      <main id="main-content">
        <Suspense fallback={
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundColor: '#0B0819',
            color: '#A9A5B8',
            fontFamily: 'sans-serif',
          }}>
            Loading page...
          </div>
        }>
          {/* The Outlet renders the current page's component based on the route */}
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

export default MainLayout;