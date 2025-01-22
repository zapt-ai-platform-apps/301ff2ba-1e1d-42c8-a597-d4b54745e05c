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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-3 sm:gap-4">
          {links.filter(filterLinks).map(link => (
            <LinkCard
              key={link.id}
              link={link}
            />
          ))}
        </div>
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