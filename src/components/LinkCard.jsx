import React from 'react';
import { motion } from 'framer-motion';

const LinkCard = ({ link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      className="flex flex-col items-center p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >
      <div className="w-full aspect-square mb-3 rounded-xl overflow-hidden bg-gray-100 flex items-center justify-center">
        <img 
          src="PLACEHOLDER"
          alt={link.title}
          data-image-request={`${link.title} app icon`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <span className="text-sm font-medium text-gray-700 text-center px-2 line-clamp-1">
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