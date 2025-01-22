import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiEdit, FiTrash } from 'react-icons/fi';

const LinkCard = ({ link, handleDeleteLink, setEditLink, setShowModal }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-semibold text-lg truncate">{link.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => {
              setEditLink(link);
              setShowModal(true);
            }}
            className="text-gray-500 hover:text-blue-500 cursor-pointer"
          >
            <FiEdit />
          </button>
          <button
            onClick={() => handleDeleteLink(link.id)}
            className="text-gray-500 hover:text-red-500 cursor-pointer"
          >
            <FiTrash />
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-4 line-clamp-3">{link.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {link.tags.map(tag => (
          <span
            key={tag}
            className="px-2 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-600 flex items-center gap-2 cursor-pointer"
      >
        <FiExternalLink /> Abrir enlace
      </a>
    </motion.div>
  );
};

export default LinkCard;