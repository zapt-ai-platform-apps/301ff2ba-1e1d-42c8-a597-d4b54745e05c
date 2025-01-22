import React from 'react';
import { motion } from 'framer-motion';

const LinkCard = ({ link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group flex flex-col items-center p-2 bg-gray-800 rounded-2xl shadow-ios-medium hover:shadow-ios-large transition-all duration-200 cursor-pointer"
    >
      <div className="icon-container">
        <img 
          src="PLACEHOLDER"
          alt={link.title}
          data-image-request={`${link.title} app icon`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <span className="text-xs font-medium text-white/90 text-center px-1 line-clamp-1 group-hover:text-primary transition-colors mt-2">
        {link.title}
      </span>
      
      <a 
        href={link.url} 
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute inset-0 z-10"
        aria-label={`Abrir ${link.title}`}
      />
    </motion.div>
  );
};

export default LinkCard;