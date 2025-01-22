import React, { useState, useEffect } from 'react';
import ModalLayout from './ModalLayout';
import LinkFormContent from './LinkFormContent';

const LinkFormModal = ({ existingLink, availableTags, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    tags: []
  });

  useEffect(() => {
    if (existingLink) {
      setFormData(existingLink);
    }
  }, [existingLink]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.url) return;
    onSubmit(formData);
  };

  const toggleTag = (tag) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.includes(tag)
        ? prev.tags.filter(t => t !== tag)
        : [...prev.tags, tag]
    }));
  };

  return (
    <ModalLayout
      title={existingLink ? 'Editar Enlace' : 'Nuevo Enlace'}
      onClose={onClose}
    >
      <LinkFormContent
        formData={formData}
        setFormData={setFormData}
        availableTags={availableTags}
        toggleTag={toggleTag}
        onClose={onClose}
        existingLink={existingLink}
        handleSubmit={handleSubmit}
      />
    </ModalLayout>
  );
};

export default LinkFormModal;