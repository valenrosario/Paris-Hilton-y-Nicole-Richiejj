import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage, T } from '../LanguageContext';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, setCurrentView }) => {
  const { language, toggleLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSeasonsOpen, setMobileSeasonsOpen] = useState(false);

  const handleNavClick = (id: string) => {
    setCurrentView(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-neutral-100">
      <div className="w-full px-4 md:px-10">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => handleNavClick('home')}>
            <div className="w-12 h-12 bg-[var(--color-accent-light)] rounded-xl flex items-center justify-center text-[10px] font-black text-white tracking-widest uppercase shadow-sm">
              LOGO
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 lg:space-x-8 items-center text-xs font-bold uppercase tracking-widest">
            <button
              onClick={() => handleNavClick('home')}
              className={`transition-colors ${
                currentView === 'home' 
                  ? 'text-[var(--color-accent)]' 
                  : 'text-neutral-900 hover:text-[var(--color-accent)]'
              }`}
            >
              <T en="Home" es="Inicio" />
            </button>
            
            <div className="relative group">
              <button
                className={`flex items-center transition-colors py-2 ${
                  currentView.startsWith('s') 
                    ? 'text-[var(--color-accent)]' 
                    : 'text-neutral-900 hover:text-[var(--color-accent)]'
                }`}
              >
                <T en="Seasons" es="Temporadas" />
                <ChevronDown size={14} className="ml-1" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white border border-neutral-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {[1, 2, 3, 4, 5].map((season) => (
                  <button
                    key={`s${season}`}
                    onClick={() => handleNavClick(`s${season}`)}
                    className={`block w-full text-left px-4 py-3 text-xs font-bold uppercase hover:bg-neutral-50 hover:text-[var(--color-accent)] transition-colors ${currentView === `s${season}` ? 'text-[var(--color-accent)] bg-neutral-50' : 'text-neutral-900'}`}
                  >
                    <T en={`Season ${season}`} es={`Temporada ${season}`} />
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleNavClick('downloads')}
              className={`transition-colors ${
                currentView === 'downloads' 
                  ? 'text-[var(--color-accent)]' 
                  : 'text-neutral-900 hover:text-[var(--color-accent)]'
              }`}
            >
              <T en="Downloads" es="Descargas" />
            </button>

            <button 
              onClick={toggleLanguage}
              className="bg-[var(--color-accent)] text-white px-4 py-2 rounded-full hover:shadow-lg hover:shadow-pink-100 transition-all ml-4"
            >
              EN | ES
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={toggleLanguage}
              className="bg-[var(--color-accent)] text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase transition-all"
            >
              EN | ES
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutral-900 hover:text-[var(--color-accent)]"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-neutral-100 bg-white">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`block w-full text-left py-3 text-xs font-bold uppercase tracking-widest ${
                currentView === 'home' ? 'text-[var(--color-accent)]' : 'text-neutral-900'
              }`}
            >
              <T en="Home" es="Inicio" />
            </button>
            
            <button
              onClick={() => setMobileSeasonsOpen(!mobileSeasonsOpen)}
              className={`flex w-full justify-between items-center text-left py-3 text-xs font-bold uppercase tracking-widest ${
                currentView.startsWith('s') ? 'text-[var(--color-accent)]' : 'text-neutral-900'
              }`}
            >
              <T en="Seasons" es="Temporadas" />
              <ChevronDown size={14} className={`transform transition-transform ${mobileSeasonsOpen ? 'rotate-180' : ''}`} />
            </button>

            {mobileSeasonsOpen && (
              <div className="pl-4 space-y-1 pb-2">
                {[1, 2, 3, 4, 5].map((season) => (
                  <button
                    key={`s${season}`}
                    onClick={() => handleNavClick(`s${season}`)}
                    className={`block w-full text-left py-2 text-xs font-bold uppercase tracking-widest ${currentView === `s${season}` ? 'text-[var(--color-accent)]' : 'text-neutral-500'}`}
                  >
                    <T en={`Season ${season}`} es={`Temporada ${season}`} />
                  </button>
                ))}
              </div>
            )}

            <button
              onClick={() => handleNavClick('downloads')}
              className={`block w-full text-left py-3 text-xs font-bold uppercase tracking-widest ${
                currentView === 'downloads' ? 'text-[var(--color-accent)]' : 'text-neutral-900'
              }`}
            >
              <T en="Downloads" es="Descargas" />
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
