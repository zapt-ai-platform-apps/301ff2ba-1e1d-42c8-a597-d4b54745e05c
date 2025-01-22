import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = ({ searchQuery, setSearchQuery, setShowModal }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            LinkFlow
          </motion.h1>
          
          <div className="flex items-center gap-4 w-full max-w-2xl">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar enlaces..."
                className="pl-12 pr-4 py-3 w-full rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent box-border smooth-transition"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-xl hover:shadow-lg smooth-transition flex items-center gap-2 cursor-pointer"
            >
              <FiPlus className="text-lg" />
              <span className="hidden sm:inline">Nuevo</span>
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;