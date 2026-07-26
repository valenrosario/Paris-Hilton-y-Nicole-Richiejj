import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { T } from '../LanguageContext';
import { seasonsData } from '../data';

// --- EDITABLE IMAGES (HOME) ---
// Leave empty strings to show the placeholder blocks. Add URLs to show real images.
const IMAGES = {
  hero: {
    desktop: "", // Size: 1920x823
    mobile: "",  // Size: 800x450
  },
  paris: {
    desktop: "https://is1-ssl.mzstatic.com/image/thumb/d1q7ZLWEagpu1__6r-L21Q/1000x1000ve.webp", // Size: 800x800
    mobile: "https://is1-ssl.mzstatic.com/image/thumb/d1q7ZLWEagpu1__6r-L21Q/1000x1000ve.webp",  // Size: 800x800
  },
  nicole: {
    desktop: "https://is1-ssl.mzstatic.com/image/thumb/aQqyFN7JFMFgBxjIn9uLiw/1000x1000ve.webp", // Size: 800x800
    mobile: "https://is1-ssl.mzstatic.com/image/thumb/aQqyFN7JFMFgBxjIn9uLiw/1000x1000ve.webp",  // Size: 800x800
  }
};

export const Home: React.FC<{ setCurrentView: (view: string) => void }> = ({ setCurrentView }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
    >
      {/* Full Width Hero Banner */}
      <div className="w-full relative overflow-hidden mb-12">
        {/* Desktop Hero Image */}
        <div 
          className="hidden md:flex w-full aspect-[21/9] bg-[var(--color-accent-light)] flex-col items-center justify-center p-6 text-center bg-cover bg-center"
          style={IMAGES.hero.desktop ? { backgroundImage: `url(${IMAGES.hero.desktop})` } : {}}
        >
          {!IMAGES.hero.desktop && (
            <>
              <span className="text-white font-black text-5xl uppercase tracking-widest opacity-80 mb-2">
                <T en="General Series Image (PC)" es="Imagen General de la Serie (PC)" />
              </span>
              <span className="text-white font-bold text-xs uppercase opacity-60 bg-black/20 px-3 py-1 rounded-full">
                <T en="Size: 1920x823" es="Tamaño: 1920x823" />
              </span>
            </>
          )}
        </div>

        {/* Mobile Hero Image */}
        <div 
          className="flex md:hidden w-full aspect-video bg-[var(--color-accent)] flex-col items-center justify-center p-6 text-center bg-cover bg-center"
          style={IMAGES.hero.mobile ? { backgroundImage: `url(${IMAGES.hero.mobile})` } : {}}
        >
          {!IMAGES.hero.mobile && (
            <>
              <span className="text-white font-black text-3xl uppercase tracking-widest opacity-80 mb-2">
                <T en="Series Image (Mobile)" es="Imagen Serie (Móvil)" />
              </span>
              <span className="text-white font-bold text-[10px] uppercase opacity-60 bg-black/20 px-3 py-1 rounded-full">
                <T en="Size: 800x450" es="Tamaño: 800x450" />
              </span>
            </>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <h1 className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tighter leading-none text-neutral-900">
          <T en="LIVING THE DREAM" es="VIVIENDO EL SUEÑO" />
        </h1>
        <p className="text-neutral-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium mb-6">
          <T 
            en="Two socialites, one farm. A minimalist tribute to the era of pink phones, oversized sunglasses, and saying 'That's Hot' at every opportunity."
            es="Dos socialités, una granja. Un tributo minimalista a la era de los teléfonos rosas, gafas gigantes y decir 'That's Hot' en cada oportunidad."
          />
        </p>
        <div className="max-w-3xl mx-auto space-y-6 text-neutral-500 text-sm md:text-base leading-relaxed mb-16">
          <p>
            <T 
              en="The Simple Life is a totally unscripted series starring everyone's favorite spoiled socialites, Paris Hilton and Nicole Richie! During the shows first season, Paris and Nicole got a reality check when they learned what it was really like to live among the middle-class as they moved from their posh Beverly Hills pads to the small town of Altus, Arkansas (population 817) for a one-month stay. Paris and Nicole were horribly inept at their jobs, which were the first they had ever had-including gigs at a dairy farm and a fast-food joint. But pretty soon they were up to their old tricks, picking up guys and causing mischief along the way, all in an effort to spice up the lives of their small town family and to win the hearts of the town's simple, kind-hearted residents. In the end, the girls survived the challenge, and most certainly served to prove that you can take the girl out of the city, but you can't take the city out of the girl!"
              es="¡The Simple Life es una serie totalmente sin guion protagonizada por las socialités consentidas favoritas de todos, Paris Hilton y Nicole Richie! Durante la primera temporada del programa, Paris y Nicole recibieron un golpe de realidad al descubrir lo que verdaderamente significaba vivir entre la clase media cuando se mudaron de sus lujosas residencias en Beverly Hills al pequeño pueblo de Altus, Arkansas (con una población de 817 habitantes), para una estadía de un mes. Paris y Nicole fueron horriblemente ineptas en sus trabajos, los cuales eran los primeros que habían tenido en toda su vida, incluyendo empleos en una granja lechera y en un local de comida rápida. Pero muy pronto volvieron a las andadas, coqueteando con chicos y haciendo travesuras por el camino, todo en un esfuerzo por darle emoción a la vida de la familia que las hospedaba y ganarse el corazón de los residentes sencillos y bondadosos del pueblo. Al final, las chicas sobrevivieron al desafío y, sin duda alguna, sirvieron para demostrar que puedes sacar a la chica de la ciudad, ¡pero no puedes sacar a la ciudad de la chica!"
            />
          </p>
        </div>

        {/* Profiles Section */}
        <div className="w-full border-t border-neutral-100 pt-16 mb-16">
          <h2 className="text-2xl font-black uppercase tracking-widest text-center mb-12 text-neutral-900">
            <T en="The Icons" es="Los Íconos" />
          </h2>
          <div className="grid md:grid-cols-2 gap-12 w-full">
            {/* Paris Profile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-full aspect-square relative overflow-hidden rounded-2xl mb-6 bg-[var(--color-accent-light)] transition-transform group-hover:-translate-y-1">
                 {/* Desktop Paris Image */}
                 <div 
                   className="hidden md:flex absolute inset-0 flex-col items-center justify-center p-6 text-center bg-cover bg-center"
                   style={IMAGES.paris.desktop ? { backgroundImage: `url(${IMAGES.paris.desktop})` } : {}}
                 >
                   {!IMAGES.paris.desktop && (
                     <>
                       <span className="text-white font-bold tracking-widest text-xs uppercase opacity-70 mb-1">
                         <T en="Paris Portrait (PC)" es="Retrato de Paris (PC)" />
                       </span>
                       <span className="text-white font-medium text-[10px] uppercase opacity-50 bg-black/20 px-2 py-0.5 rounded-full">
                         <T en="Size: 800x800" es="Tamaño: 800x800" />
                       </span>
                     </>
                   )}
                 </div>
                 {/* Mobile Paris Image */}
                 <div 
                   className="flex md:hidden absolute inset-0 bg-[var(--color-accent)] flex-col items-center justify-center p-6 text-center bg-cover bg-center"
                   style={IMAGES.paris.mobile ? { backgroundImage: `url(${IMAGES.paris.mobile})` } : {}}
                 >
                   {!IMAGES.paris.mobile && (
                     <>
                       <span className="text-white font-bold tracking-widest text-xs uppercase opacity-70 mb-1">
                         <T en="Paris Portrait (Mobile)" es="Retrato de Paris (Móvil)" />
                       </span>
                       <span className="text-white font-medium text-[10px] uppercase opacity-50 bg-black/20 px-2 py-0.5 rounded-full">
                         <T en="Size: 800x800" es="Tamaño: 800x800" />
                       </span>
                     </>
                   )}
                 </div>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-900 mb-2">
                Paris Hilton
              </h3>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-accent)] italic mb-4">
                "<T en="That's hot" es="That's hot" />"
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                <T 
                  en="The hotel heiress who defined Y2K fashion. Known for her designer dogs, trademark catchphrases, and playing the 'dumb blonde' character to perfection, Paris proved she was secretly a marketing genius all along." 
                  es="La heredera de hoteles que definió la moda de los años 2000. Conocida por sus perros de diseñador, sus frases características y por interpretar el personaje de 'rubia tonta' a la perfección, Paris demostró que en secreto siempre fue un genio del marketing." 
                />
              </p>
            </div>

            {/* Nicole Profile */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left group">
              <div className="w-full aspect-square relative overflow-hidden rounded-2xl mb-6 bg-[var(--color-accent-light)] transition-transform group-hover:-translate-y-1">
                 {/* Desktop Nicole Image */}
                 <div 
                   className="hidden md:flex absolute inset-0 flex-col items-center justify-center p-6 text-center bg-cover bg-center"
                   style={IMAGES.nicole.desktop ? { backgroundImage: `url(${IMAGES.nicole.desktop})` } : {}}
                 >
                   {!IMAGES.nicole.desktop && (
                     <>
                       <span className="text-white font-bold tracking-widest text-xs uppercase opacity-70 mb-1">
                         <T en="Nicole Portrait (PC)" es="Retrato de Nicole (PC)" />
                       </span>
                       <span className="text-white font-medium text-[10px] uppercase opacity-50 bg-black/20 px-2 py-0.5 rounded-full">
                         <T en="Size: 800x800" es="Tamaño: 800x800" />
                       </span>
                     </>
                   )}
                 </div>
                 {/* Mobile Nicole Image */}
                 <div 
                   className="flex md:hidden absolute inset-0 bg-[var(--color-accent)] flex-col items-center justify-center p-6 text-center bg-cover bg-center"
                   style={IMAGES.nicole.mobile ? { backgroundImage: `url(${IMAGES.nicole.mobile})` } : {}}
                 >
                   {!IMAGES.nicole.mobile && (
                     <>
                       <span className="text-white font-bold tracking-widest text-xs uppercase opacity-70 mb-1">
                         <T en="Nicole Portrait (Mobile)" es="Retrato de Nicole (Móvil)" />
                       </span>
                       <span className="text-white font-medium text-[10px] uppercase opacity-50 bg-black/20 px-2 py-0.5 rounded-full">
                         <T en="Size: 800x800" es="Tamaño: 800x800" />
                       </span>
                     </>
                   )}
                 </div>
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight text-neutral-900 mb-2">
                Nicole Richie
              </h3>
              <p className="text-[10px] uppercase tracking-widest font-bold text-[var(--color-accent)] italic mb-4">
                "<T en="Sanasa!" es="¡Sanasa!" />"
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed">
                <T 
                  en="The rockstar's daughter and the ultimate instigator. Nicole brought the sharp wit, unpredictable humor, and fearless attitude that perfectly balanced Paris's persona, making them an unstoppable comedic duo." 
                  es="La hija de la estrella de rock y la máxima instigadora. Nicole aportó el ingenio agudo, el humor impredecible y la actitud valiente que equilibró perfectamente la personalidad de Paris, convirtiéndolas en un dúo cómico imparable." 
                />
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-16">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="border-2 border-neutral-900 px-10 py-4 font-bold uppercase tracking-widest text-xs hover:bg-neutral-900 hover:text-white transition-colors rounded-none"
          >
            <T en="Explore Seasons" es="Explorar Temporadas" />
          </button>
        </div>

        {/* About Us Section */}
        <div className="w-full border-t border-neutral-100 pt-16 mt-8">
          <h2 className="text-2xl font-black uppercase tracking-widest text-center mb-8 text-neutral-900">
            <T en="About Us" es="Sobre Nosotros" />
          </h2>
          <div className="max-w-3xl mx-auto space-y-6 text-neutral-500 text-sm md:text-base leading-relaxed text-center">
            <p>
              <T 
                en="Our goal is to preserve the history, the images, and everything about the most iconic series of the 2000s. We believe that The Simple Life wasn't just a reality show, but a cultural phenomenon that defined an entire generation's fashion, vocabulary, and understanding of celebrity." 
                es="Nuestro punto es preservar la historia, las imágenes y todo sobre la serie más icónica de los 2000s. Creemos que The Simple Life no fue solo un reality show, sino un fenómeno cultural que definió la moda, el vocabulario y la comprensión de la celebridad de toda una generación." 
              />
            </p>
            <p>
              <T 
                en="This digital archive serves as a tribute to Paris and Nicole's unforgettable journey across America. Whether you're here to relive the nostalgia or discovering their chaotic adventures for the first time, welcome to the simple life."
                es="Este archivo digital sirve como un tributo al inolvidable viaje de Paris y Nicole a través de América. Ya sea que estés aquí para revivir la nostalgia o descubriendo sus caóticas aventuras por primera vez, bienvenido a la vida simple."
              />
            </p>
          </div>
        </div>
      </div>

      {/* Season Selection Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-neutral-900 flex flex-col p-6 sm:p-12 overflow-y-auto"
          >
            {/* Close Button */}
            <div className="flex justify-end mb-8 md:mb-12">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-white hover:text-[var(--color-accent)] transition-colors p-2 flex items-center gap-3 group"
              >
                <span className="text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  <T en="Close" es="Cerrar" />
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="max-w-6xl mx-auto w-full flex-grow flex flex-col justify-center">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-8 md:mb-16 border-b border-neutral-800 pb-4">
                <T en="Select a Season" es="Selecciona una Temporada" />
              </h3>
              
              <div className="flex flex-col space-y-6 md:space-y-10">
                {seasonsData.map((season) => (
                  <div 
                    key={season.id}
                    onClick={() => {
                      setIsModalOpen(false);
                      setCurrentView(`s${season.id}`);
                    }}
                    className="group cursor-pointer flex flex-col md:flex-row md:items-center justify-between border-b border-neutral-800 pb-6 md:pb-10 hover:border-white transition-colors"
                  >
                    <div className="flex flex-col md:w-2/3">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-[var(--color-accent)] transition-colors mb-2 md:mb-4">
                        <T en={`Season ${season.id}`} es={`Temporada ${season.id}`} />
                      </span>
                      <h4 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-600 group-hover:text-white transition-colors">
                        <T en={season.title.en} es={season.title.es} />
                      </h4>
                    </div>
                    
                    <div className="hidden md:flex md:w-1/3 justify-end items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <div className="w-32 aspect-[2/3] bg-neutral-800 rounded-lg overflow-hidden relative border border-neutral-700">
                         <div className="absolute inset-0 flex flex-col items-center justify-center p-2 text-center">
                           <span className="text-[var(--color-accent)] font-black tracking-widest text-[8px] uppercase opacity-50 mb-1">
                             <T en={`Season ${season.id} Poster`} es={`Póster Temporada ${season.id}`} />
                           </span>
                           <span className="text-[var(--color-accent)] font-medium text-[6px] uppercase opacity-40">
                             <T en="Size: 800x1200" es="Tamaño: 800x1200" />
                           </span>
                         </div>
                       </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
