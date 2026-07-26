import React from 'react';
import { T } from '../LanguageContext';

export const Footer: React.FC = () => {
  return (
    <footer className="py-6 border-t border-neutral-50 flex flex-col md:flex-row items-center justify-between px-4 md:px-10 text-[10px] font-bold uppercase tracking-widest text-neutral-400 mt-20">
      <div className="mb-4 md:mb-0">
        <T en="Made with 💕 by Valentino" es="Hecho con 💕 por Valentino" />
      </div>
      <div className="flex gap-6">
        <a href="#" className="hover:text-neutral-900 transition-colors">Instagram</a>
        <a href="#" className="hover:text-neutral-900 transition-colors">TikTok</a>
        <a href="#" className="hover:text-neutral-900 transition-colors">FOX TV</a>
      </div>
    </footer>
  );
};
