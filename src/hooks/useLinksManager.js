import { useState, useEffect } from 'react';

const useLinksManager = () => {
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
        title: 'Artículo IA',
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

  return {
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
  };
};

export default useLinksManager;