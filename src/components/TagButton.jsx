import React from 'react';

const TagButton = ({ tag, isSelected, onToggle }) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(tag)}
      className={`px-3 py-1.5 rounded-full flex items-center gap-2 cursor-pointer transition-all ${
        isSelected
          ? 'bg-primary text-white shadow-ios-button'
          : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
      }`}
    >
      {tag}
    </button>
  );
};

export default TagButton;