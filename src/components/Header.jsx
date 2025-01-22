import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Header = ({ searchQuery, setSearchQuery, setShowModal }) => {
  return (
    <header className="glass-effect border-b border-white/10 sticky top-0 z-50">
      <div className="px-4 py-2">
        <div className="status-bar">
          <span>9:41</span>
          <div className="flex items-center gap-2">
            <span>5G</span>
            <span className="w-4 h-4 bg-no-repeat bg-contain bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgZmlsbD0iI2ZmZiI+PHBhdGggZD0iTTEwLjUgNi41YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwek0zIDdsMiAxMGw2LTEwLTEwIDB6bTEwIDBsLTYgMTAgMi0xMGg0eiIvPjwvc3ZnPg==')]"></span>
            <span>100%</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-2 px-2">
          <div className="relative flex-1">
            <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar"
              className="pl-12 pr-4 py-2.5 w-full rounded-xl bg-gray-800/80 border-0 focus:ring-2 focus:ring-primary focus:bg-gray-700/50 box-border transition-all duration-200 text-white"
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
            <FiPlus className="text-xl text-white" />
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;