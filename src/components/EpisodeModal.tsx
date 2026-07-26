import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { T } from '../LanguageContext';

// --- EDITABLE IMAGES (EPISODE) ---
// Add your image URLs here. Leave empty strings to show the placeholder blocks.
const IMAGES = {
  header: {
    desktop: "", // Size: 896x384
    mobile: "",  // Size: 800x450
  },
  gallery: [
    { desktop: "", mobile: "" }, // Image 1 (Size: 800x800)
    { desktop: "", mobile: "" }, // Image 2 (Size: 800x800)
    { desktop: "", mobile: "" }, // Image 3 (Size: 800x800)
  ]
};

interface EpisodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  episode: {
    title: { en: string; es: string };
    summary: { en: string; es: string };
  } | null;
  seasonId: number;
}

export const EpisodeModal: React.FC<EpisodeModalProps> = ({ isOpen, onClose, episode, seasonId }) => {
  if (!episode) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-neutral-900/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-full"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-white/50 hover:bg-white text-neutral-900 w-8 h-8 flex items-center justify-center rounded-full transition-colors backdrop-blur-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Header Image Placeholder */}
            <div className="w-full relative flex-shrink-0">
               {/* Desktop Header Image */}
               <div 
                 className="hidden md:flex w-full aspect-[21/9] bg-[var(--color-accent-light)] flex-col items-center justify-center bg-cover bg-center relative"
                 style={IMAGES.header.desktop ? { backgroundImage: `url(${IMAGES.header.desktop})` } : {}}
               >
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                 {!IMAGES.header.desktop && (
                   <div className="z-10 flex flex-col items-center">
                     <span className="text-white font-bold tracking-widest text-sm uppercase opacity-80 mb-1">
                       <T en="Episode Still (PC)" es="Imagen del Episodio (PC)" />
                     </span>
                     <span className="text-white font-medium text-[10px] uppercase opacity-70 bg-black/30 px-2 py-0.5 rounded">
                       <T en="Size: 896x384" es="Tamaño: 896x384" />
                     </span>
                   </div>
                 )}
               </div>
               
               {/* Mobile Header Image */}
               <div 
                 className="flex md:hidden w-full aspect-video bg-[var(--color-accent)] flex-col items-center justify-center bg-cover bg-center relative"
                 style={IMAGES.header.mobile ? { backgroundImage: `url(${IMAGES.header.mobile})` } : {}}
               >
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
                 {!IMAGES.header.mobile && (
                   <div className="z-10 flex flex-col items-center">
                     <span className="text-white font-bold tracking-widest text-sm uppercase opacity-80 mb-1">
                       <T en="Episode Still (Mobile)" es="Imagen del Episodio (Móvil)" />
                     </span>
                     <span className="text-white font-medium text-[10px] uppercase opacity-70 bg-black/30 px-2 py-0.5 rounded">
                       <T en="Size: 800x450" es="Tamaño: 800x450" />
                     </span>
                   </div>
                 )}
               </div>
            </div>

            {/* Content */}
            <div className="p-6 sm:p-10 overflow-y-auto">
              <div className="flex flex-col h-full">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
                  <T en={`Season ${seasonId}`} es={`Temporada ${seasonId}`} />
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 mb-6 leading-tight">
                  <T en={episode.title.en} es={episode.title.es} />
                </h3>
                
                <div className="mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b border-neutral-100 pb-2">
                    <T en="Synopsis" es="Sinopsis" />
                  </h4>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {/* Reusing summary but adding some extra text to make it longer as requested */}
                    <T 
                      en={`${episode.summary.en} In this unforgettable episode from The Simple Life, Paris and Nicole face new challenges outside of their Beverly Hills comfort zone, pushing their friendship and the patience of those around them to the limit. Reality TV history was made here.`} 
                      es={`${episode.summary.es} En este inolvidable episodio de The Simple Life, Paris y Nicole se enfrentan a nuevos desafíos fuera de su zona de confort de Beverly Hills, llevando al límite su amistad y la paciencia de quienes las rodean. Aquí se hizo historia en la telerrealidad.`} 
                    />
                  </p>
                </div>

                {/* Episode Gallery */}
                <div className="mb-8">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-3 border-b border-neutral-100 pb-2">
                    <T en="Gallery" es="Galería" />
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {[0, 1, 2].map((i) => {
                      const galImg = IMAGES.gallery[i] || { desktop: "", mobile: "" };
                      return (
                        <div key={i} className="aspect-square rounded-xl overflow-hidden relative group cursor-pointer bg-neutral-800">
                           {/* Desktop Gallery Image */}
                           <div 
                             className="hidden md:flex absolute inset-0 bg-[var(--color-accent-light)] flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity bg-cover bg-center"
                             style={galImg.desktop ? { backgroundImage: `url(${galImg.desktop})`, opacity: 1 } : {}}
                           >
                             {!galImg.desktop && (
                               <>
                                 <span className="text-white font-black tracking-widest text-[10px] uppercase opacity-70 z-10 relative text-center px-2 mb-1">
                                   <T en={`Image ${i + 1} (PC)`} es={`Imagen ${i + 1} (PC)`} />
                                 </span>
                                 <span className="text-white font-medium text-[8px] uppercase opacity-60 z-10 relative bg-black/40 px-1 py-0.5 rounded">
                                   <T en="Size: 800x800" es="800x800" />
                                 </span>
                               </>
                             )}
                           </div>

                           {/* Mobile Gallery Image */}
                           <div 
                             className="flex md:hidden absolute inset-0 bg-[var(--color-accent)] flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity bg-cover bg-center"
                             style={galImg.mobile ? { backgroundImage: `url(${galImg.mobile})`, opacity: 1 } : {}}
                           >
                             {!galImg.mobile && (
                               <>
                                 <span className="text-white font-black tracking-widest text-[10px] uppercase opacity-70 z-10 relative text-center px-2 mb-1">
                                   <T en={`Img ${i + 1} (Mob)`} es={`Img ${i + 1} (Móv)`} />
                                 </span>
                                 <span className="text-white font-medium text-[8px] uppercase opacity-60 z-10 relative bg-black/40 px-1 py-0.5 rounded">
                                   <T en="Size: 800x800" es="800x800" />
                                 </span>
                               </>
                             )}
                           </div>
                           <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-0 pointer-events-none"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Where to Watch */}
                <div className="mt-auto pt-6 border-t border-neutral-100">
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-4">
                    <T en="Where to Watch" es="Dónde Ver" />
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <a href="https://www.peacocktv.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-neutral-900 text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-neutral-800 transition-colors">
                      Peacock
                    </a>
                    <a href="https://www.amazon.com/The-Simple-Life/dp/B001LXX84E" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#00A8E1] text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#0092c4] transition-colors">
                      Prime Video
                    </a>
                    <a href="https://tubitv.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#FF4500] text-white text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-[#e03d00] transition-colors">
                      Tubi
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
