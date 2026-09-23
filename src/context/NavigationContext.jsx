import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  // Normalize initial hash e.g. "#/projects" -> "projects"
  const getPageFromHash = () => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    if (['projects', 'qa', 'ui-ux', 'about', 'resume', 'contact'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  // Sync state with browser hash changes (e.g. back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((page, sectionId = null) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' && !sectionId ? '#/' : `#/${page}`;
    
    // Smooth scroll to top of page or target section
    setTimeout(() => {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          return;
        }
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 50);
  }, []);

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}
