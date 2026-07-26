import React from 'react';
import { motion } from 'motion/react';
import { Download } from 'lucide-react';
import { T, useLanguage } from '../LanguageContext';

export const Downloads: React.FC = () => {
  const { language } = useLanguage();

  const handleDownload = () => {
    const messageEn = "Files are not uploaded yet. Links will be active once real files are provided!";
    const messageEs = "¡Los archivos aún no están subidos. Los enlaces se activarán una vez se proporcionen los archivos reales!";
    alert(language === 'en' ? messageEn : messageEs);
  };

  const items = [
    { id: 1, en: "PC Wallpaper", es: "Fondo de Pantalla (PC)" },
    { id: 2, en: "Mobile Wallpaper", es: "Fondo de Pantalla (Móvil)" },
    { id: 3, en: "Folder Icons", es: "Pack de Iconos" },
    { id: 4, en: "'That's Hot' Ringtone", es: "Tono de Mensaje" },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center"
    >
      <div className="text-center mb-10 w-full">
        <h2 className="text-4xl font-black uppercase tracking-tighter text-neutral-900">
          <span className="text-[var(--color-accent)] italic">Y2K</span> <T en="DOWNLOAD ZONE" es="ZONA DE DESCARGAS" />
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 gap-6 w-full max-w-3xl">
        {items.map((item) => (
          <div key={item.id} className="flex items-center p-6 border border-neutral-100 rounded-2xl hover:border-[var(--color-accent)] transition-colors group">
            <div className="w-16 h-16 flex-shrink-0 bg-[var(--color-accent-light)] rounded-xl mr-6 transition-transform group-hover:scale-105"></div>
            <div className="flex-1">
              <h3 className="text-xs font-bold uppercase text-neutral-900">
                <T en={item.en} es={item.es} />
              </h3>
              <p className="text-[10px] text-neutral-400 mt-1 tracking-wide">
                <T en="High quality asset" es="Recurso de alta calidad" />
              </p>
            </div>
            <button 
              onClick={handleDownload}
              className="text-[10px] font-black uppercase text-[var(--color-accent)] px-2 py-1 hover:bg-[var(--color-accent-light)]/20 rounded transition-colors"
            >
              GET
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
