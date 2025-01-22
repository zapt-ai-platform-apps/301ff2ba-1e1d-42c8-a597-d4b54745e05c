import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FiTag } from 'react-icons/fi';
import LinkFormModal from './components/LinkFormModal';
import Header from './components/Header';
import LinkCard from './components/LinkCard';

const App = () => {
  const [links, setLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editLink, setEditLink] = useState(null);
  const [availableTags] = useState(['trabajo', 'personal', 'investigación', 'ocio']);

  useEffect(() => {
    const demoLinks = [
      {
        id: 1,
        title: 'Documentación React',
        url: 'https://reactjs.org',
        description: 'Documentación oficial de React',
        tags: ['trabajo', 'investigación'],
        timestamp: new Date()
      },
      {
        id: 2,
        title: 'Articulo IA',
        url: 'https://example.com/ai',
        description: 'Últimos avances en inteligencia artificial',
        tags: ['personal', 'investigación'],
        timestamp: new Date()
      }
    ];
    setLinks(demoLinks);
  }, []);

  const filterLinks = (link) => {
    const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => link.tags.includes(tag));
    return matchesSearch && matchesTags;
  };

  const handleAddLink = (newLink) => {
    setLinks(prev => [...prev, { ...newLink, id: Date.now(), timestamp: new Date() }]);
    setShowModal(false);
  };

  const handleUpdateLink = (updatedLink) => {
    setLinks(prev => prev.map(link => link.id === updatedLink.id ? updatedLink : link));
    setShowModal(false);
    setEditLink(null);
  };

  const handleDeleteLink = (id) => {
    setLinks(prev => prev.filter(link => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        setShowModal={setShowModal}
      />

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6 flex gap-2 flex-wrap">
          {availableTags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTags(prev => 
                prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
              )}
              className={`px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer transition-colors ${
                selectedTags.includes(tag) 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <FiTag /> {tag}
            </button>
          ))}
        </div>

        <AnimatePresence>
          {links.filter(filterLinks).length === 0 ? (
            <div className="text-center py-12 text-gray-500">
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