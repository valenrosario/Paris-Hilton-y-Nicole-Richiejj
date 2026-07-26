import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  imageUrl?: string;
}

export const Lightbox: React.FC<LightboxProps> = ({ isOpen, onClose, title, imageUrl }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl aspect-[4/3] bg-[var(--color-accent-light)] rounded-xl flex items-center justify-center border border-white/20 shadow-2xl overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/40 text-gray-800 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
            {imageUrl ? (
              <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
            ) : (
              <span className="text-3xl md:text-5xl font-light text-gray-800 tracking-wide text-center px-4">
                {title}
              </span>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
