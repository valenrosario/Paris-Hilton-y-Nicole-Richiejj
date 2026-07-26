/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { LanguageProvider } from './LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './views/Home';
import { Season } from './views/Season';
import { Downloads } from './views/Downloads';
import { seasonsData } from './data';

function AppContent() {
  const [currentView, setCurrentView] = useState('home');

  const renderView = () => {
    if (currentView === 'home') return <Home setCurrentView={setCurrentView} />;
    if (currentView === 'downloads') return <Downloads />;
    
    if (currentView.startsWith('s')) {
      const seasonId = parseInt(currentView.substring(1));
      const season = seasonsData.find(s => s.id === seasonId);
      if (season) return <Season data={season} />;
    }
    
    return <Home setCurrentView={setCurrentView} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-800 selection:bg-[var(--color-accent)] selection:text-neutral-900 font-sans">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderView()}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
