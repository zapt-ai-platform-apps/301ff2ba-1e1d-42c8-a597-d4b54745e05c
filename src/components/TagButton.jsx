import React from 'react';

const TagButton = ({ tag, isSelected, onToggle }) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(tag)}
      className={`px-3 py-1 rounded-full flex items-center gap-2 cursor-pointer transition-colors ${
        isSelected
          ? 'bg-blue-500 text-white'
          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {tag}
    </button>
  );
};

export default TagButton;