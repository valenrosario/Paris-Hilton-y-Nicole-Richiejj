import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { T, useLanguage } from '../LanguageContext';
import { Lightbox } from '../components/Lightbox';
import { EpisodeModal } from '../components/EpisodeModal';
import { Download, Loader2, X, Maximize2 } from 'lucide-react';

// --- EDITABLE IMAGES (SEASONS) ---
// Add your image URLs here for each season. Leave empty strings to show the placeholder blocks.
const SEASON_IMAGES: Record<number, {
  banner: { desktop: string; mobile: string };
  poster: { desktop: string; mobile: string };
  gallery: { desktop: string; mobile: string }[];
}> = {
  1: {
    banner: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrlSEI_L3FTpMmwUyiC6v7dlUDwYZu_twI7SIug9Twv91Nll0R5eGDBj_LCi72jysdpk4RYUxHkXIS2_Jwr6XWpTZ0x7Szn7mIPM7XAseXqiDruYUTyem5y5GLn-ypc2sjUqyktdgF1opKKMlpEJ8CORZlOHJt4fgD7sxE9twhajb05j5iHb6o7y0c5A/s1472/BACKGROUND%20SL1.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVrlSEI_L3FTpMmwUyiC6v7dlUDwYZu_twI7SIug9Twv91Nll0R5eGDBj_LCi72jysdpk4RYUxHkXIS2_Jwr6XWpTZ0x7Szn7mIPM7XAseXqiDruYUTyem5y5GLn-ypc2sjUqyktdgF1opKKMlpEJ8CORZlOHJt4fgD7sxE9twhajb05j5iHb6o7y0c5A/s1472/BACKGROUND%20SL1.png" },
    poster: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYLKZ_pHnVroISFxf8suy-Omzq9Y4B_4v71tHU03DlWGjwPvFN8NUhfvNX-fngWahHghfrVn9XpxXSGR6cJ6Cg77i8hsA8ssJMf1J_0lkIP765bUA53O76DbKQZjQfTWo8COKPIvu-VcIa8IFIHZTpt_6zDv-49Jsv-5OPemgme9ZsvefxiltAIVNTrdQ/s8400/SL%20Poster%201%20Upscaled.png" },
    gallery: [
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc87DuXzgcG_NJbHoR8SGd-iYjGRf1L1-PRTwgtLL8YhLa0nD9j9w4P3WAMwtde8ZcQRl0al_mEpOkE9L8F_5L5kYiV22f1LrqBbBtWsnnabYZltAnGBiob3Ms8Sls_qESTOlpy7G71UjdfLiAnjtxCjgpSXOSCAbRE5fI6Yd3I-j8L0X595xKKBruPcw/s5760/NP%20S1.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc87DuXzgcG_NJbHoR8SGd-iYjGRf1L1-PRTwgtLL8YhLa0nD9j9w4P3WAMwtde8ZcQRl0al_mEpOkE9L8F_5L5kYiV22f1LrqBbBtWsnnabYZltAnGBiob3Ms8Sls_qESTOlpy7G71UjdfLiAnjtxCjgpSXOSCAbRE5fI6Yd3I-j8L0X595xKKBruPcw/s5760/NP%20S1.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgp60hN7AiqxORd71WajLHyNq8_En-rTHw1x6Oid3dgfiyz4yEKP0W1VcIYEj0giJg6ws4LRjqn2wOMIE9-u43xL0U-PeU2ThS_ziWc3EciT7-BFboAE6QGESAN7_eI-IkoC5GQcFrK1zElHkkEYxjDuwdg86EUSHZuFjJF74EtMvnlslfL3pE1noqgTfU/s3136/NP%20SPQ.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgp60hN7AiqxORd71WajLHyNq8_En-rTHw1x6Oid3dgfiyz4yEKP0W1VcIYEj0giJg6ws4LRjqn2wOMIE9-u43xL0U-PeU2ThS_ziWc3EciT7-BFboAE6QGESAN7_eI-IkoC5GQcFrK1zElHkkEYxjDuwdg86EUSHZuFjJF74EtMvnlslfL3pE1noqgTfU/s3136/NP%20SPQ.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYPeOxAHSJLhYb6qY_e7pImeO4XrdKkKjWfmwPedkWjJF4UnI0OtY4uQfd5UBl9yr0VF0Dl0t65rTBy0WjsQA4nmI9oPXv2GqdvvC0A7wbZ54TH86fnu1OsUYP3uHvSrlB8cLaBJUWX5SvYRWx3Phqh-GUXumGJFXPBC2HQxovhPNJCI22-UzbHMR92dY/s6144/NP%20SPQK.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYPeOxAHSJLhYb6qY_e7pImeO4XrdKkKjWfmwPedkWjJF4UnI0OtY4uQfd5UBl9yr0VF0Dl0t65rTBy0WjsQA4nmI9oPXv2GqdvvC0A7wbZ54TH86fnu1OsUYP3uHvSrlB8cLaBJUWX5SvYRWx3Phqh-GUXumGJFXPBC2HQxovhPNJCI22-UzbHMR92dY/s6144/NP%20SPQK.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIHNc_2dO4Kp9mBSwmzXQ5CZ-bxWu8iBDRVENbME3QufG5_zQGKgJyRpGgAfslFQCLxPj87rgaJoAAyqlCzaaati0PphyxXoSKLMPD4CIEQu-uYvZqTHx52MfyvXQIzGu-Q4yi2vXhDxiSp6HYS8hC1GI4_hUPrT98XaL7iVm-isKOuQqbt3HixTUiWSA/s6144/NP%20SPQKT.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhIHNc_2dO4Kp9mBSwmzXQ5CZ-bxWu8iBDRVENbME3QufG5_zQGKgJyRpGgAfslFQCLxPj87rgaJoAAyqlCzaaati0PphyxXoSKLMPD4CIEQu-uYvZqTHx52MfyvXQIzGu-Q4yi2vXhDxiSp6HYS8hC1GI4_hUPrT98XaL7iVm-isKOuQqbt3HixTUiWSA/s6144/NP%20SPQKT.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVDJE1ZWtwuqDhfAvOfjXnApgS8-Hc6IoweTaMNEZ8GUaO5neCZrH42WBmJtRjznoKarJMZZ7TFYWeEjKa9D-_QlMGyY33UtOzrkLuVsmEIW9ezcXHANFLB7Jn7lE45iMRcdpHWBJZsfv7RXlhMP8qIpz-1jRU5Z7g0UKAHXBRR-TkmG9iAT1qRWwjArM/s6144/NP%20SPQKR.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiVDJE1ZWtwuqDhfAvOfjXnApgS8-Hc6IoweTaMNEZ8GUaO5neCZrH42WBmJtRjznoKarJMZZ7TFYWeEjKa9D-_QlMGyY33UtOzrkLuVsmEIW9ezcXHANFLB7Jn7lE45iMRcdpHWBJZsfv7RXlhMP8qIpz-1jRU5Z7g0UKAHXBRR-TkmG9iAT1qRWwjArM/s6144/NP%20SPQKR.png" },
      { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje-vR1S4EWdfN-ZdTxiGj0Z9zWRnXg1zpo75Yp11lAFlGq6N95r06vWg_dLpS8qP0R6kofuMFdYP5Jo9i7BcpWxQSMdXpvc7VtkyC04rx400hId25ZncK0NxVXQENbq2YWKbvfhF1J15_aq01MnTOe2NCtPbrS3y0aAO8Cm73VR3e6nUckcEnnn6lb4k0/s768/DVD4.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje-vR1S4EWdfN-ZdTxiGj0Z9zWRnXg1zpo75Yp11lAFlGq6N95r06vWg_dLpS8qP0R6kofuMFdYP5Jo9i7BcpWxQSMdXpvc7VtkyC04rx400hId25ZncK0NxVXQENbq2YWKbvfhF1J15_aq01MnTOe2NCtPbrS3y0aAO8Cm73VR3e6nUckcEnnn6lb4k0/s768/DVD4.png" }
    ]
  },
  2: {
    banner: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEii1Op95Yqmn_U0js_D4WquG5Xtw_vvsa1LA83-EOVfnUnx9donShSnVtK4ourlMeuOuSCiH4sarjZhiF0BVhv7GGNqt7gJLmwyeb26Rlj3ocj6YO3U-nO7MSYKdyrIjLgjGd0-zvFtbWBE2WrCH63p1I4h0dQJpgcoK2ND629TGMLj2AAqSGmkpjyhKqw/s3548/SL%20Background%201.png", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEii1Op95Yqmn_U0js_D4WquG5Xtw_vvsa1LA83-EOVfnUnx9donShSnVtK4ourlMeuOuSCiH4sarjZhiF0BVhv7GGNqt7gJLmwyeb26Rlj3ocj6YO3U-nO7MSYKdyrIjLgjGd0-zvFtbWBE2WrCH63p1I4h0dQJpgcoK2ND629TGMLj2AAqSGmkpjyhKqw/s3548/SL%20Background%201.png" },
    poster: { desktop: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjB7fofJ4USv1BcVYvoLcOS_RWn4ShizYTgbuarhPVj_6fM-1tGBzIY_StxFQ7KUe6KRKLwdojB83hVRHwiT_X-RWVzvxU_dx9jyLLFoOtAj64E9sVWRc1tG-2lkA2JALrmjVrgKSY0xIh3TLvsyU_bICx0Ryks-NMb0_4Gmb053YRXC1mTLBMj4fXeUk/s2100/9RZDVWFkCn4c4YMQ0azHlKrBIRj.webp", mobile: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjjB7fofJ4USv1BcVYvoLcOS_RWn4ShizYTgbuarhPVj_6fM-1tGBzIY_StxFQ7KUe6KRKLwdojB83hVRHwiT_X-RWVzvxU_dx9jyLLFoOtAj64E9sVWRc1tG-2lkA2JALrmjVrgKSY0xIh3TLvsyU_bICx0Ryks-NMb0_4Gmb053YRXC1mTLBMj4fXeUk/s2100/9RZDVWFkCn4c4YMQ0azHlKrBIRj.webp" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },
  3: {
    banner: { desktop: "", mobile: "" },
    poster: { desktop: "", mobile: "" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },
  4: {
    banner: { desktop: "", mobile: "" },
    poster: { desktop: "", mobile: "" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  },
  5: {
    banner: { desktop: "", mobile: "" },
    poster: { desktop: "", mobile: "" },
    gallery: Array(6).fill({ desktop: "", mobile: "" })
  }
};

interface SeasonProps {
  data: {
    id: number;
    title: { en: string; es: string };
    synopsis: { en: string; es: string };
    description?: { en: string; es: string };
    highlights?: { en: string; es: string }[];
    episodes?: { title: { en: string; es: string }; summary: { en: string; es: string } }[];
    family: { en: string; es: string };
    photos: number;
    stats?: any;
  };
}

const PosterWithDownload: React.FC<{ url: string; fallbackText: React.ReactNode; seasonId: number; label: string; className: string }> = ({ url, fallbackText, seasonId, label, className }) => {
  const [size, setSize] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  React.useEffect(() => {
    if (!url) return;
    fetch(url, { method: 'HEAD' })
      .then(res => {
        const length = res.headers.get('content-length');
        if (length) {
          setSize((Number(length) / 1024 / 1024).toFixed(2) + ' MB');
        }
      })
      .catch(() => {});
  }, [url]);

  const handleDownload = async (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!url || isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = `The_Simple_Life_Season_${seasonId}_Poster_${label}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      window.open(url, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <>
      <div 
        className={`${className} absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center bg-cover bg-center group/poster ${url ? 'cursor-pointer' : ''}`}
        style={url ? { backgroundImage: `url(${url})` } : {}}
        onClick={() => url && setIsModalOpen(true)}
      >
        {url ? (
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
            <Maximize2 className="w-10 h-10 text-white mb-2" />
            <span className="text-white font-bold tracking-widest text-sm uppercase text-center px-4">
              <T en="View Poster" es="Ver Póster" />
            </span>
          </div>
        ) : (
          fallbackText
        )}
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative flex flex-col items-center w-full max-w-[90vw]"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 p-2 text-white/70 hover:text-white transition-colors"
              >
                <X size={28} />
              </button>
              
              <div className="relative flex items-center justify-center max-w-full">
                <img 
                  src={url} 
                  alt={`Season ${seasonId} Poster`} 
                  className="max-h-[75vh] max-w-full w-auto object-contain rounded-lg shadow-2xl"
                />
              </div>
              
              <button
                onClick={handleDownload}
                disabled={isDownloading}
                className="mt-6 flex items-center gap-3 px-8 py-3 bg-white text-black rounded-full font-bold uppercase tracking-wider hover:scale-105 transition-transform disabled:opacity-50 disabled:hover:scale-100"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <T en="Downloading..." es="Descargando..." />
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5" />
                    <T en="Download Poster" es="Descargar Póster" />
                    {size && <span className="opacity-70 normal-case ml-1">({size})</span>}
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export const Season: React.FC<SeasonProps> = ({ data }) => {
  const { language } = useLanguage();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<string>('');
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState<string>('');
  
  // Episode Modal State
  const [selectedEpisode, setSelectedEpisode] = useState<{title: {en: string, es: string}, summary: {en: string, es: string}} | null>(null);
  const [isEpisodeModalOpen, setIsEpisodeModalOpen] = useState(false);

  const openLightbox = (photoTitle: string, photoUrl: string) => {
    setCurrentPhoto(photoTitle);
    setCurrentPhotoUrl(photoUrl);
    setLightboxOpen(true);
  };

  const openEpisodeModal = (episode: {title: {en: string, es: string}, summary: {en: string, es: string}}) => {
    setSelectedEpisode(episode);
    setIsEpisodeModalOpen(true);
  };

  const images = SEASON_IMAGES[data.id] || SEASON_IMAGES[1];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full"
      key={`season-${data.id}`}
    >
      {/* Full Width Hero Banner */}
      <div className="relative w-full bg-neutral-900 pt-32 pb-12 overflow-hidden">
        {/* Desktop Banner Background */}
        <div 
          className="hidden md:flex absolute inset-0 bg-[var(--color-accent-light)] opacity-30 flex-col items-center justify-center text-center bg-cover bg-center"
          style={images.banner.desktop ? { backgroundImage: `url(${images.banner.desktop})`, opacity: 0.6 } : {}}
        >
          {!images.banner.desktop && (
            <>
              <span className="text-white font-black text-4xl uppercase tracking-widest opacity-50 mb-2">
                <T en={`Season ${data.id} Banner (PC)`} es={`Banner Temporada ${data.id} (PC)`} />
              </span>
              <span className="text-white font-bold text-xs uppercase opacity-40">
                <T en="Size: 1920x1080" es="Tamaño: 1920x1080" />
              </span>
            </>
          )}
        </div>

        {/* Mobile Banner Background */}
        <div 
          className="flex md:hidden absolute inset-0 bg-[var(--color-accent)] opacity-30 flex-col items-center justify-center text-center bg-cover bg-center"
          style={images.banner.mobile ? { backgroundImage: `url(${images.banner.mobile})`, opacity: 0.6 } : {}}
        >
          {!images.banner.mobile && (
            <>
              <span className="text-white font-black text-2xl uppercase tracking-widest opacity-50 mb-2">
                <T en={`Season ${data.id} Banner (Mobile)`} es={`Banner Temporada ${data.id} (Móvil)`} />
              </span>
              <span className="text-white font-bold text-[10px] uppercase opacity-40">
                <T en="Size: 1080x1920" es="Tamaño: 1080x1920" />
              </span>
            </>
          )}
        </div>
        
        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent"></div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row gap-8 items-end">
           {/* Left Column: Poster */}
          <div className="md:w-1/3 w-full max-w-[240px] mx-auto md:mx-0">
             <div className="w-full aspect-[2/3] bg-white rounded-xl shadow-2xl border border-neutral-100/10 relative overflow-hidden group">
               <div className="absolute inset-0 bg-[var(--color-accent)] opacity-20"></div>
               {/* Desktop Poster */}
               <PosterWithDownload 
                 url={images.poster.desktop} 
                 seasonId={data.id} 
                 label="PC"
                 className="hidden md:flex"
                 fallbackText={
                   <>
                     <span className="text-[var(--color-accent)] font-black tracking-widest text-xs leading-relaxed mb-1">
                       <T en={`Season ${data.id} Poster (PC)`} es={`Póster T${data.id} (PC)`} />
                     </span>
                     <span className="text-[var(--color-accent)] font-medium text-[8px] uppercase opacity-60">
                       <T en="Size: 800x1200" es="Tamaño: 800x1200" />
                     </span>
                   </>
                 }
               />
               {/* Mobile Poster */}
               <PosterWithDownload 
                 url={images.poster.mobile} 
                 seasonId={data.id} 
                 label="Mobile"
                 className="flex md:hidden"
                 fallbackText={
                   <>
                     <span className="text-[var(--color-accent)] font-black tracking-widest text-xs leading-relaxed mb-1">
                       <T en={`Season ${data.id} Poster (Mobile)`} es={`Póster T${data.id} (Móvil)`} />
                     </span>
                     <span className="text-[var(--color-accent)] font-medium text-[8px] uppercase opacity-60">
                       <T en="Size: 800x1200" es="Tamaño: 800x1200" />
                     </span>
                   </>
                 }
               />
             </div>
          </div>

          {/* Right Column: Title */}
          <div className="md:w-2/3 w-full pb-2 md:pb-6 text-center md:text-left">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white drop-shadow-md">
              <T en={data.title.en} es={data.title.es} />
            </h2>
          </div>
        </div>
      </div>

      {/* Main Content (White background) */}
      <div className="w-full bg-white">
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-10">
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            {/* Left Column: Hosts & Synopsis */}
            <div className="md:w-1/3 space-y-6">
               <div>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">
                   <T en="Hosts" es="Anfitriones" />
                 </p>
                 <p className="text-xl font-black uppercase text-neutral-900 mb-8">
                    <T en={data.family.en} es={data.family.es} />
                 </p>
                 <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2">
                   <T en="Synopsis" es="Sinopsis" />
                 </p>
                 <p className="text-sm text-neutral-600 leading-relaxed">
                    <T en={data.synopsis.en} es={data.synopsis.es} />
                 </p>
               </div>
            </div>

            {/* Right Column: Description */}
            <div className="md:w-2/3 space-y-8">
              {data.description && (
                <p className="text-neutral-600 text-base leading-relaxed">
                  <T en={data.description.en} es={data.description.es} />
                </p>
              )}
            </div>
          </div>

          {/* Episodes List */}
          {data.episodes && (
            <div className="mb-16">
          <h3 className="text-xl font-black uppercase tracking-widest text-neutral-900 mb-6 border-b border-neutral-100 pb-4">
            <T en="Episodes" es="Episodios" />
          </h3>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max">
              {data.episodes.map((episode, i) => (
                <div 
                  key={i} 
                  onClick={() => openEpisodeModal(episode)}
                  className="w-72 bg-white border border-neutral-100 p-6 rounded-2xl flex-shrink-0 hover:border-[var(--color-accent)] transition-colors group cursor-pointer shadow-sm"
                >
                  <h4 className="text-sm font-black uppercase text-neutral-900 mb-2 group-hover:text-[var(--color-accent)] transition-colors">
                    <T en={episode.title.en} es={episode.title.es} />
                  </h4>
                  <p className="text-xs text-neutral-500 leading-relaxed line-clamp-3">
                    <T en={episode.summary.en} es={episode.summary.es} />
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Gallery Carousel */}
      <h3 className="text-xl font-black uppercase tracking-widest text-neutral-900 mb-6 border-b border-neutral-100 pb-4">
        <T en="Photoshoot" es="Sesión de Fotos" />
      </h3>
      <div className="overflow-x-auto pb-4">
        <div className="flex gap-4 min-w-max">
          {Array.from({ length: data.photos }).map((_, i) => {
            const photoTitleEn = `S${data.id}: Promo Photo ${i + 1}`;
            const photoTitleEs = `T${data.id}: Foto Promo ${i + 1}`;
            const currentTitle = language === 'en' ? photoTitleEn : photoTitleEs;
            const galImg = images.gallery[i] || { desktop: "", mobile: "" };

            return (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98 }}
                onClick={() => openLightbox(currentTitle, galImg.desktop || galImg.mobile)}
                className="w-72 sm:w-80 md:w-96 aspect-video rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity relative overflow-hidden"
              >
                {/* Desktop Gallery Image */}
                <div 
                  className="hidden md:flex absolute inset-0 bg-[var(--color-accent-light)] flex-col items-center justify-center p-4 bg-cover bg-center"
                  style={galImg.desktop ? { backgroundImage: `url(${galImg.desktop})` } : {}}
                >
                  {!galImg.desktop && (
                    <>
                      <div className="text-[10px] font-bold text-white uppercase text-center mb-1">
                        <T en={`${photoTitleEn} (PC)`} es={`${photoTitleEs} (PC)`} />
                      </div>
                      <div className="text-[8px] font-medium text-white uppercase text-center opacity-75">
                        <T en="Size: 1920x1080" es="Tamaño: 1920x1080" />
                      </div>
                    </>
                  )}
                </div>
                {/* Mobile Gallery Image */}
                <div 
                  className="flex md:hidden absolute inset-0 bg-[var(--color-accent)] flex-col items-center justify-center p-4 bg-cover bg-center"
                  style={galImg.mobile ? { backgroundImage: `url(${galImg.mobile})` } : {}}
                >
                  {!galImg.mobile && (
                    <>
                      <div className="text-[10px] font-bold text-white uppercase text-center mb-1">
                        <T en={`${photoTitleEn} (Mobile)`} es={`${photoTitleEs} (Móvil)`} />
                      </div>
                      <div className="text-[8px] font-medium text-white uppercase text-center opacity-75">
                        <T en="Size: 1920x1080" es="Tamaño: 1920x1080" />
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Season Data */}
      <div className="mt-16">
        <h3 className="text-xl font-black uppercase tracking-widest text-neutral-900 mb-6 border-b border-neutral-100 pb-4">
          <T en="Season Data" es="Datos de la Temporada" />
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
              <T en="Year" es="Año" />
            </span>
            <span className="text-2xl font-black text-neutral-900">
              {data.stats?.year || "200X"}
            </span>
          </div>
          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
              <T en="Network" es="Cadena" />
            </span>
            <span className="text-xl font-black text-neutral-900 flex items-center justify-center min-h-[2.5rem]">
              {(!data.stats?.network || data.stats?.network === "Fox") ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Fox_Broadcasting_Company_logo_%282019%29.svg" alt="Fox" className="h-5 object-contain" />
              ) : data.stats?.network === "E!" ? (
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/E%21_Logo.svg" alt="E!" className="h-10 object-contain" />
              ) : (
                data.stats?.network
              )}
            </span>
          </div>
          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
              <T en="Episodes" es="Episodios" />
            </span>
            <span className="text-2xl font-black text-neutral-900">
              {data.episodes ? data.episodes.length : 0}
            </span>
          </div>
          <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-100 flex flex-col items-center justify-center text-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400 mb-2">
              <T en="Location" es="Ubicación" />
            </span>
            <span className="text-sm font-black text-neutral-900 uppercase">
              {data.stats?.location || <T en="Various" es="Varias" />}
            </span>
          </div>
        </div>
      </div>
        </div>
      </div>

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        title={currentPhoto} 
        imageUrl={currentPhotoUrl}
      />

      <EpisodeModal 
        isOpen={isEpisodeModalOpen}
        onClose={() => setIsEpisodeModalOpen(false)}
        episode={selectedEpisode}
        seasonId={data.id}
      />
    </motion.div>
  );
};
