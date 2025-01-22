export const createHandleAddLink = (setLinks, setShowModal) => (newLink) => {
  setLinks(prev => [...prev, { ...newLink, id: Date.now(), timestamp: new Date() }]);
  setShowModal(false);
};

export const createHandleUpdateLink = (setLinks, setShowModal, setEditLink) => (updatedLink) => {
  setLinks(prev => prev.map(link => link.id === updatedLink.id ? updatedLink : link));
  setShowModal(false);
  setEditLink(null);
};

export const createHandleDeleteLink = (setLinks) => (id) => {
  setLinks(prev => prev.filter(link => link.id !== id));
};

export const createFilterLinks = (searchQuery, selectedTags) => (link) => {
  const matchesSearch = link.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    link.description?.toLowerCase().includes(searchQuery.toLowerCase());
  const matchesTags = selectedTags.length === 0 || 
    selectedTags.every(tag => link.tags.includes(tag));
  return matchesSearch && matchesTags;
};