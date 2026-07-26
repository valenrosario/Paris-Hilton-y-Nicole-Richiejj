const fs = require('fs');
let content = fs.readFileSync('src/views/Season.tsx', 'utf8');

const stateTarget = `  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<string>('');`;

const stateReplacement = `  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState<string>('');
  const [currentPhotoUrl, setCurrentPhotoUrl] = useState<string>('');`;

if(content.includes(stateTarget)) {
  content = content.replace(stateTarget, stateReplacement);
}

const functionTarget = `  const openLightbox = (photoTitle: string) => {
    setCurrentPhoto(photoTitle);
    setLightboxOpen(true);
  };`;

const functionReplacement = `  const openLightbox = (photoTitle: string, photoUrl: string) => {
    setCurrentPhoto(photoTitle);
    setCurrentPhotoUrl(photoUrl);
    setLightboxOpen(true);
  };`;

if(content.includes(functionTarget)) {
  content = content.replace(functionTarget, functionReplacement);
}

const callTarget = `                onClick={() => openLightbox(currentTitle)}`;
const callReplacement = `                onClick={() => openLightbox(currentTitle, galImg.desktop || galImg.mobile)}`;

if(content.includes(callTarget)) {
  content = content.replace(callTarget, callReplacement);
}

const jsxTarget = `      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        title={currentPhoto} 
      />`;

const jsxReplacement = `      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        title={currentPhoto} 
        imageUrl={currentPhotoUrl}
      />`;

if(content.includes(jsxTarget)) {
  content = content.replace(jsxTarget, jsxReplacement);
}

fs.writeFileSync('src/views/Season.tsx', content);
console.log('Season.tsx updated for Lightbox imageUrl');
