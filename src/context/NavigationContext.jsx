import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

const NavigationContext = createContext(null);

export function NavigationProvider({ children }) {
  // Normalize initial hash e.g. "#/projects" -> "projects"
  const getPageFromHash = () => {
    const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    const parts = raw.split('/');
    const main = parts[0];
    if (['projects', 'qa', 'ui-ux', 'resume'].includes(main)) {
      return main;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromHash);

  // Sync state with browser hash changes (e.g. back/forward button)
  useEffect(() => {
    const handleHashChange = () => {
      const raw = window.location.hash.replace(/^#\/?/, '').toLowerCase();
      const parts = raw.split('/');
      const page = getPageFromHash();
      setCurrentPage(page);

      const sectionId = parts[1] || (['work', 'about', 'contact'].includes(parts[0]) ? parts[0] : null);
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
            return;
          }
        }, 120);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = useCallback((page, sectionId = null) => {
    setCurrentPage(page);
    if (page === 'home' && !sectionId) {
      window.location.hash = '#/';
    } else if (page === 'home' && sectionId) {
      window.location.hash = `#/${page}/${sectionId}`;
    } else {
      window.location.hash = `#/${page}`;
    }

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
    }, 100);
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
