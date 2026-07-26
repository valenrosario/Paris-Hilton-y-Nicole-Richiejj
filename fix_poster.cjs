const fs = require('fs');
let content = fs.readFileSync('src/views/Season.tsx', 'utf8');

const importTarget = `import { EpisodeModal } from '../components/EpisodeModal';`;
const importReplacement = `import { EpisodeModal } from '../components/EpisodeModal';
import { Download, Loader2 } from 'lucide-react';`;

if(content.includes(importTarget)) {
  content = content.replace(importTarget, importReplacement);
}

const componentTarget = `export const Season: React.FC<SeasonProps> = ({ data }) => {`;
const componentReplacement = `const PosterWithDownload: React.FC<{ url: string; fallbackText: React.ReactNode; seasonId: number; label: string; className: string }> = ({ url, fallbackText, seasonId, label, className }) => {
  const [size, setSize] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

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

  const handleDownload = async () => {
    if (!url || isDownloading) return;
    setIsDownloading(true);
    try {
      const response = await fetch(url);
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = objectUrl;
      link.download = \`The_Simple_Life_Season_\${seasonId}_Poster_\${label}.png\`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(objectUrl);
    } catch (error) {
      console.error("Error downloading:", error);
      window.open(url, '_blank');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <div 
      className={\`\${className} absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center bg-cover bg-center group/poster \${url ? 'cursor-pointer' : ''}\`}
      style={url ? { backgroundImage: \`url(\${url})\` } : {}}
      onClick={handleDownload}
    >
      {url ? (
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/poster:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center backdrop-blur-sm">
          {isDownloading ? (
             <Loader2 className="w-10 h-10 text-white mb-2 animate-spin" />
          ) : (
             <Download className="w-10 h-10 text-white mb-2" />
          )}
          <span className="text-white font-bold tracking-widest text-sm uppercase text-center px-4">
            {isDownloading ? <T en="Downloading..." es="Descargando..." /> : <T en="Download" es="Descargar" />}
          </span>
          {size && !isDownloading && (
            <span className="text-white/80 text-xs mt-2 font-medium bg-black/40 px-2 py-1 rounded-md">
              {size}
            </span>
          )}
        </div>
      ) : (
        fallbackText
      )}
    </div>
  );
};

export const Season: React.FC<SeasonProps> = ({ data }) => {`;

if(content.includes(componentTarget)) {
  content = content.replace(componentTarget, componentReplacement);
}

const posterDesktopTarget = `               {/* Desktop Poster */}
               <div 
                 className="hidden md:flex absolute inset-0 flex-col items-center justify-center z-10 p-4 text-center bg-cover bg-center"
                 style={images.poster.desktop ? { backgroundImage: \`url(\${images.poster.desktop})\` } : {}}
               >
                 {!images.poster.desktop && (
                   <>
                     <span className="text-[var(--color-accent)] font-black tracking-widest text-xs leading-relaxed mb-1">
                       <T en={\`Season \${data.id} Poster (PC)\`} es={\`Póster T\${data.id} (PC)\`} />
                     </span>
                     <span className="text-[var(--color-accent)] font-medium text-[8px] uppercase opacity-60">
                       <T en="Size: 800x1200" es="Tamaño: 800x1200" />
                     </span>
                   </>
                 )}
               </div>`;

const posterDesktopReplacement = `               {/* Desktop Poster */}
               <PosterWithDownload 
                 url={images.poster.desktop} 
                 seasonId={data.id} 
                 label="PC"
                 className="hidden md:flex"
                 fallbackText={
                   <>
                     <span className="text-[var(--color-accent)] font-black tracking-widest text-xs leading-relaxed mb-1">
                       <T en={\`Season \${data.id} Poster (PC)\`} es={\`Póster T\${data.id} (PC)\`} />
                     </span>
                     <span className="text-[var(--color-accent)] font-medium text-[8px] uppercase opacity-60">
                       <T en="Size: 800x1200" es="Tamaño: 800x1200" />
                     </span>
                   </>
                 }
               />`;

if(content.includes(posterDesktopTarget)) {
  content = content.replace(posterDesktopTarget, posterDesktopReplacement);
}

const posterMobileTarget = `               {/* Mobile Poster */}
               <div 
                 className="flex md:hidden absolute inset-0 flex-col items-center justify-center z-10 p-4 text-center bg-cover bg-center"
                 style={images.poster.mobile ? { backgroundImage: \`url(\${images.poster.mobile})\` } : {}}
               >
                 {!images.poster.mobile && (
                   <>
                     <span className="text-[var(--color-accent)] font-black tracking-widest text-xs leading-relaxed mb-1">
                       <T en={\`Season \${data.id} Poster (Mobile)\`} es={\`Póster T\${data.id} (Móvil)\`} />
                     </span>
                     <span className="text-[var(--color-accent)] font-medium text-[8px] uppercase opacity-60">
                       <T en="Size: 800x1200" es="Tamaño: 800x1200" />
                     </span>
                   </>
                 )}
               </div>`;

const posterMobileReplacement = `               {/* Mobile Poster */}
               <PosterWithDownload 
                 url={images.poster.mobile} 
                 seasonId={data.id} 
                 label="Mobile"
                 className="flex md:hidden"
                 fallbackText={
                   <>
                     <span className="text-[var(--color-accent)] font-black tracking-widest text-xs leading-relaxed mb-1">
                       <T en={\`Season \${data.id} Poster (Mobile)\`} es={\`Póster T\${data.id} (Móvil)\`} />
                     </span>
                     <span className="text-[var(--color-accent)] font-medium text-[8px] uppercase opacity-60">
                       <T en="Size: 800x1200" es="Tamaño: 800x1200" />
                     </span>
                   </>
                 }
               />`;

if(content.includes(posterMobileTarget)) {
  content = content.replace(posterMobileTarget, posterMobileReplacement);
}

fs.writeFileSync('src/views/Season.tsx', content);
console.log('Season.tsx updated with downloads');

