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
    <div className="min-h-screen bg-iosDark flex items-center justify-center p-4">
      <div className="w-full max-w-[430px] h-[932px] bg-iosDark rounded-[50px] shadow-iphone overflow-hidden relative">
        <div className="absolute top-0 left-0 right-0 h-8 bg-iosDark z-50">
          <div className="w-20 h-1.5 bg-black/80 rounded-full mx-auto mt-2"></div>
        </div>
        
        <Header 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          setShowModal={setShowModal}
        />

        <main className="h-[calc(100%-64px)] overflow-y-auto">
          <div className="grid grid-cols-4 gap-2 p-4">
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
    </div>
  );
};

export default App;