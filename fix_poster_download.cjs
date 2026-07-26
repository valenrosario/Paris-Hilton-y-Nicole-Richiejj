const fs = require('fs');
let content = fs.readFileSync('src/views/Season.tsx', 'utf8');

const importMotionTarget = `import { motion } from 'motion/react';`;
const importMotionReplacement = `import { motion, AnimatePresence } from 'motion/react';`;
if (content.includes(importMotionTarget)) {
  content = content.replace(importMotionTarget, importMotionReplacement);
}

const importLucideTarget = `import { Download, Loader2 } from 'lucide-react';`;
const importLucideReplacement = `import { Download, Loader2, X, Maximize2 } from 'lucide-react';`;
if (content.includes(importLucideTarget)) {
  content = content.replace(importLucideTarget, importLucideReplacement);
}

const compTarget = `const PosterWithDownload: React.FC<{ url: string; fallbackText: React.ReactNode; seasonId: number; label: string; className: string }> = ({ url, fallbackText, seasonId, label, className }) => {
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
};`;

const compReplacement = `const PosterWithDownload: React.FC<{ url: string; fallbackText: React.ReactNode; seasonId: number; label: string; className: string }> = ({ url, fallbackText, seasonId, label, className }) => {
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
      link.download = \`The_Simple_Life_Season_\${seasonId}_Poster_\${label}.png\`;
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
        className={\`\${className} absolute inset-0 flex flex-col items-center justify-center z-10 p-4 text-center bg-cover bg-center group/poster \${url ? 'cursor-pointer' : ''}\`}
        style={url ? { backgroundImage: \`url(\${url})\` } : {}}
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
                  alt={\`Season \${seasonId} Poster\`} 
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
};`;

if (content.includes(compTarget)) {
  content = content.replace(compTarget, compReplacement);
  fs.writeFileSync('src/views/Season.tsx', content);
  console.log('Success');
} else {
  console.log('Target component not found');
}
