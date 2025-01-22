import React from 'react';

const FormFields = ({ formData, setFormData }) => {
  return (
    <>
      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-300">Título *</label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary box-border text-white"
          value={formData.title}
          onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-300">URL *</label>
        <input
          type="url"
          required
          className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary box-border text-white"
          value={formData.url}
          onChange={(e) => setFormData(prev => ({ ...prev, url: e.target.value }))}
        />
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2 text-gray-300">Descripción</label>
        <textarea
          className="w-full px-4 py-3 rounded-xl bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-primary focus:border-primary box-border text-white"
          rows="4"
          value={formData.description}
          onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
        />
      </div>
    </>
  );
};

export default FormFields;