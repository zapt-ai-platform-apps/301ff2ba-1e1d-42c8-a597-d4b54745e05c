import React from 'react';
import TagButton from './TagButton';

const LinkFormContent = ({
  formData,
  setFormData,
  availableTags,
  toggleTag,
  onClose,
  existingLink,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">Título *</label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 box-border"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">URL *</label>
        <input
          type="url"
          required
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 box-border"
          value={formData.url}
          onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-700">Descripción</label>
        <textarea
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 box-border"
          rows="4"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-3 text-gray-700">Categorías</label>
        <div className="flex flex-wrap gap-3">
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

      <div className="flex justify-end gap-4 mt-8">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2.5 text-gray-600 hover:bg-gray-100 rounded-xl cursor-pointer transition-colors"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="px-6 py-2.5 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-colors shadow-md cursor-pointer"
        >
          {existingLink ? 'Guardar Cambios' : 'Agregar Enlace'}
        </button>
      </div>
    </form>
  );
};

export default LinkFormContent;