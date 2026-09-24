import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CustomCursor from './components/common/CustomCursor';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import QAPage from './pages/QAPage';
import UIUXPage from './pages/UIUXPage';
import ResumePage from './pages/ResumePage';

function AppContent() {
  const { currentPage } = useNavigation();

  const renderCurrentView = () => {
    switch (currentPage) {
      case 'projects':
        return <ProjectsPage key="projects-page" />;
      case 'qa':
        return <QAPage key="qa-page" />;
      case 'ui-ux':
        return <UIUXPage key="uiux-page" />;
      case 'resume':
        return <ResumePage key="resume-page" />;
      case 'home':
      case 'about':
      case 'contact':
      default:
        return <HomePage key="home-page" />;
    }
  };

  return (
    <div className="relative min-h-screen bg-dark-950 text-slate-100 bg-grid-pattern selection:bg-cyan-500/20 selection:text-cyan-300 flex flex-col justify-between">
      {/* Top subtle light effect */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-48 bg-cyan-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* Interactive Global Custom Cursor System */}
      <CustomCursor />

      {/* Global Sticky Navigation */}
      <Navbar />

      {/* Main Page Content with smooth transition */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentView()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer rendered on dedicated sub-pages */}
      {currentPage !== 'home' && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
