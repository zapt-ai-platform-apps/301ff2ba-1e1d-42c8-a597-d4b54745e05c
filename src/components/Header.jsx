import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = ({ searchQuery, setSearchQuery, setShowModal }) => {
  return (
    <header className="bg-iosLight/80 backdrop-blur-xl border-b border-gray-200/80 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-semibold text-iosDark pl-2"
          >
            Mis Enlaces
          </motion.h1>
          
          <div className="flex items-center gap-3 w-full max-w-2xl">
            <div className="relative flex-1">
              <FiSearch className="absolute left-4 top-3.5 text-iosGray" />
              <input
                type="text"
                placeholder="Buscar"
                className="pl-12 pr-4 py-2.5 w-full rounded-xl bg-gray-100/80 border-0 focus:ring-2 focus:ring-primary focus:bg-gray-200/50 box-border transition-all duration-200"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowModal(true)}
              className="w-11 h-11 flex items-center justify-center bg-primary rounded-full shadow-ios-button cursor-pointer"
            >
              <FiPlus className="text-xl text-iosLight" />
            </motion.button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;