import React from 'react';

const ActionButtons = ({ onClose, existingLink }) => {
  return (
    <div className="flex justify-end gap-4 mt-8">
      <button
        type="button"
        onClick={onClose}
        className="px-6 py-2.5 text-gray-300 hover:bg-gray-700/50 rounded-xl cursor-pointer transition-colors"
      >
        Cancelar
      </button>
      <button
        type="submit"
        className="px-6 py-2.5 bg-primary text-white rounded-xl hover:bg-blue-600 transition-colors shadow-md cursor-pointer"
      >
        {existingLink ? 'Guardar Cambios' : 'Agregar Enlace'}
      </button>
    </div>
  );
};

export default ActionButtons;