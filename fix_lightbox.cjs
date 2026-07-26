const fs = require('fs');
let content = fs.readFileSync('src/components/Lightbox.tsx', 'utf8');

const interfaceTarget = `interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}`;

const interfaceReplacement = `interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl?: string;
}`;

if(content.includes(interfaceTarget)) {
  content = content.replace(interfaceTarget, interfaceReplacement);
}

const componentTarget = `export const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, title }) => {`;
const componentReplacement = `export const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, title, imageUrl }) => {`;

if(content.includes(componentTarget)) {
  content = content.replace(componentTarget, componentReplacement);
}

const renderTarget = `            <span className="text-3xl md:text-5xl font-light text-gray-800 tracking-wide text-center px-4">
              {title}
            </span>`;

const renderReplacement = `            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
            ) : (
              <span className="text-3xl md:text-5xl font-light text-gray-800 tracking-wide text-center px-4">
                {title}
              </span>
            )}`;

if(content.includes(renderTarget)) {
  content = content.replace(renderTarget, renderReplacement);
}

fs.writeFileSync('src/components/Lightbox.tsx', content);
console.log('Lightbox updated');
