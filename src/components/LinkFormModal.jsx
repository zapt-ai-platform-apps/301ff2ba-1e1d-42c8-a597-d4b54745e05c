import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ModalLayout from './ModalLayout';
import TagButton from './TagButton';

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
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Título *</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 box-border"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">URL *</label>
          <input
            type="url"
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 box-border"
            value={formData.url}
            onChange={(e) => setFormData({ ...formData, url: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Descripción</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 box-border"
            rows="3"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Etiquetas</label>
          <div className="flex flex-wrap gap-2">
            {availableTags.map(tag => (
              <TagButton
                key={tag}
                tag={tag}
                isSelected={formData.tags.includes(tag)}
                onToggle={toggleTag}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
          >
            {existingLink ? 'Guardar Cambios' : 'Crear Enlace'}
          </button>
        </div>
      </form>
    </ModalLayout>
  );
};

export default LinkFormModal;