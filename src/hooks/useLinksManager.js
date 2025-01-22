import { useState, useEffect } from 'react';
import { demoLinks } from '../data/demoLinks';
import {
  createHandleAddLink,
  createHandleUpdateLink,
  createHandleDeleteLink,
  createFilterLinks
} from './helpers/linkLogic';

const useLinksManager = () => {
  const [links, setLinks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editLink, setEditLink] = useState(null);
  const [availableTags] = useState(['Herramientas', 'Productividad', 'Comunicación', 'Almacenamiento', 'Sistema', 'Tienda', 'Bienestar']);

  useEffect(() => {
    setLinks(demoLinks);
  }, []);

  const handleAddLink = createHandleAddLink(setLinks, setShowModal);
  const handleUpdateLink = createHandleUpdateLink(setLinks, setShowModal, setEditLink);
  const handleDeleteLink = createHandleDeleteLink(setLinks);
  const filterLinks = createFilterLinks(searchQuery, selectedTags);

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