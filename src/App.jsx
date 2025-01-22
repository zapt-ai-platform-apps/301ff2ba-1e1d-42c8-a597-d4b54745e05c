import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import LinkFormModal from './components/LinkFormModal';
import LinkCard from './components/LinkCard';
import useLinksManager from './hooks/useLinksManager';

const App = () => {
  const {
    links,
    searchQuery,
    setSearchQuery,
    selectedTags,
    setSelectedTags,
    showModal,
    setShowModal,
    editLink,
    setEditLink,
    availableTags,
    filterLinks,
    handleAddLink,
    handleUpdateLink,
    handleDeleteLink
  } = useLinksManager();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        setShowModal={setShowModal}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence>
          {links.filter(filterLinks).length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              No se encontraron enlaces
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {links.filter(filterLinks).map(link => (
                <LinkCard
                  key={link.id}
                  link={link}
                  handleDeleteLink={handleDeleteLink}
                  setEditLink={setEditLink}
                  setShowModal={setShowModal}
                />
              ))}
            </div>
          )}
        </AnimatePresence>
      </main>

      {showModal && (
        <LinkFormModal
          existingLink={editLink}
          availableTags={availableTags}
          onClose={() => {
            setShowModal(false);
            setEditLink(null);
          }}
          onSubmit={editLink ? handleUpdateLink : handleAddLink}
        />
      )}
    </div>
  );
};

export default App;