cat src/views/Season.tsx > src/views/Season.tsx.bak

# We will just replace the whole banner section in Season.tsx.
# This might be tricky with sed. Let's use a node script to replace it.

cat << 'NODE_EOF' > fix_season.js
const fs = require('fs');
let code = fs.readFileSync('src/views/Season.tsx', 'utf8');

const targetStr = `{/* Full Width Hero Banner */}
      <div className="relative w-full bg-neutral-900 pt-32 pb-12 overflow-hidden">
        {/* Desktop Banner Background */}
        <div 
          className="hidden md:flex absolute inset-0 bg-[var(--color-accent-light)] opacity-30 flex-col items-center justify-center text-center bg-cover bg-center"
          style={images.banner.desktop ? { backgroundImage: \`url(\${images.banner.desktop})\`, opacity: 0.6 } : {}}
        >
          {!images.banner.desktop && (
            <>
              <span className="text-white font-black text-4xl uppercase tracking-widest opacity-50 mb-2">
                <T en="Season Banner (PC)" es="Banner de la Temporada (PC)" />
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
          style={images.banner.mobile ? { backgroundImage: \`url(\${images.banner.mobile})\`, opacity: 0.6 } : {}}
        >
          {!images.banner.mobile && (
            <>
              <span className="text-white font-black text-2xl uppercase tracking-widest opacity-50 mb-2">
                <T en="Season Banner (Mobile)" es="Banner Temporada (Móvil)" />
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
`;

const replacementStr = `{/* Full Width Hero Banner */}
      <div className="w-full bg-neutral-900">
        {/* Desktop Banner Image */}
        <div 
          className="hidden md:flex w-full aspect-[21/9] bg-[var(--color-accent-light)] opacity-90 flex-col items-center justify-center text-center bg-cover bg-center relative"
          style={images.banner.desktop ? { backgroundImage: \`url(\${images.banner.desktop})\`, opacity: 1 } : {}}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          {!images.banner.desktop && (
            <div className="z-10">
              <span className="text-white font-black text-4xl uppercase tracking-widest opacity-50 mb-2 block">
                <T en="Season Banner (PC)" es="Banner de la Temporada (PC)" />
              </span>
              <span className="text-white font-bold text-xs uppercase opacity-40">
                <T en="Size: 1920x823" es="Tamaño: 1920x823" />
              </span>
            </div>
          )}
        </div>

        {/* Mobile Banner Image */}
        <div 
          className="flex md:hidden w-full aspect-video bg-[var(--color-accent)] opacity-90 flex-col items-center justify-center text-center bg-cover bg-center relative"
          style={images.banner.mobile ? { backgroundImage: \`url(\${images.banner.mobile})\`, opacity: 1 } : {}}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80 pointer-events-none"></div>
          {!images.banner.mobile && (
            <div className="z-10">
              <span className="text-white font-black text-2xl uppercase tracking-widest opacity-50 mb-2 block">
                <T en="Season Banner (Mobile)" es="Banner Temporada (Móvil)" />
              </span>
              <span className="text-white font-bold text-[10px] uppercase opacity-40">
                <T en="Size: 800x450" es="Tamaño: 800x450" />
              </span>
            </div>
          )}
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row gap-8 items-end -mt-16 md:-mt-32 pb-8">
`;

code = code.replace(targetStr, replacementStr);

fs.writeFileSync('src/views/Season.tsx', code);
NODE_EOF

node fix_season.js

