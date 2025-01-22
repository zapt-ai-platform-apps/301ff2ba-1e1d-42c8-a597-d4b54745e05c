import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiEdit, FiTrash } from 'react-icons/fi';

const LinkCard = ({ link, handleDeleteLink, setEditLink, setShowModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -4 }}
      className="gradient-border smooth-transition"
    >
      <div className="p-6 h-full">
        <div className="flex justify-between items-start mb-4">
          <h3 className="font-semibold text-lg truncate text-gray-800">{link.title}</h3>
          <div className="flex gap-2">
            <button
              onClick={() => {
                setEditLink(link);
                setShowModal(true);
              }}
              className="text-gray-500 hover:text-primary smooth-transition cursor-pointer p-1.5 rounded-lg hover:bg-gray-50"
            >
              <FiEdit className="text-xl" />
            </button>
            <button
              onClick={() => handleDeleteLink(link.id)}
              className="text-gray-500 hover:text-red-500 smooth-transition cursor-pointer p-1.5 rounded-lg hover:bg-gray-50"
            >
              <FiTrash className="text-xl" />
            </button>
          </div>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-3 text-sm leading-relaxed">{link.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {link.tags.map(tag => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm rounded-full font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-secondary smooth-transition cursor-pointer group"
        >
          <FiExternalLink className="transition-transform group-hover:translate-x-0.5" />
          <span className="text-sm font-medium">Abrir enlace</span>
        </a>
      </div>
    </motion.div>
  );
};

export default LinkCard;