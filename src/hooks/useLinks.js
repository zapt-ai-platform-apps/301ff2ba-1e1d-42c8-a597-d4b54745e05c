import { useState, useEffect, useMemo } from 'react';

const useLinks = () => {
  const [links, setLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editLink, setEditLink] = useState(null);
  const [availableTags] = useState(['AI', 'Marketing', 'Crypto', 'Productividad', 'Diseño', 'Desarrollo', 'Redes Sociales', 'Herramientas']);

  useEffect(() => {
    const demoLinks = [
      {
        id: 1,
        title: 'Marketing OnOff',
        url: 'https://marketingonoff.com',
        description: 'Plataforma integral de marketing digital',
        tags: ['Marketing', 'Herramientas'],
        timestamp: new Date()
      },
      {
        id: 2,
        title: 'Leonardo AI',
        url: 'https://leonardo.ai',
        description: 'Generación avanzada de imágenes con IA',
        tags: ['AI', 'Diseño'],
        timestamp: new Date()
      },
      {
        id: 3,
        title: 'Trello',
        url: 'https://trello.com',
        description: 'Gestión de proyectos y tareas colaborativas',
        tags: ['Productividad', 'Herramientas'],
        timestamp: new Date()
      },
      {
        id: 4,
        title: 'PancakeSwap',
        url: 'https://pancakeswap.finance',
        description: 'Plataforma DeFi para intercambio de criptomonedas',
        tags: ['Crypto', 'Finanzas'],
        timestamp: new Date()
      },
      {
        id: 5,
        title: 'Runway ML',
        url: 'https://app.runwayml.com',
        description: 'Suite creativa con herramientas de IA generativa',
        tags: ['AI', 'Diseño'],
        timestamp: new Date()
      },
      {
        id: 6,
        title: 'Hostinger',
        url: 'https://www.hostinger.es',
        description: 'Hospedaje web y servicios de dominios',
        tags: ['Desarrollo', 'Herramientas'],
        timestamp: new Date()
      }
    ];
    setLinks(demoLinks);
  }, []);

  const filteredLinks = useMemo(() => links.filter(link => {
    const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      link.description?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => link.tags.includes(tag));
    return matchesSearch && matchesTags;
  }), [links, searchQuery, selectedTags]);

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
    filteredLinks,
    handleAddLink,
    handleUpdateLink,
    handleDeleteLink
  };
};

export default useLinks;