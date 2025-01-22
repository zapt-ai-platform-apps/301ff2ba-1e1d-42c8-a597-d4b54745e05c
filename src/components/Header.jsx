import React from 'react';
import { FiSearch, FiPlus } from 'react-icons/fi';

const Header = ({ searchQuery, setSearchQuery, setShowModal }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">LinkFlow</h1>
        <div className="flex gap-4 items-center w-96">
          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar enlaces..."
              className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 box-border"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <FiPlus /> Nuevo
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;