import React from 'react';

const TagButton = ({ tag, isSelected, onToggle }) => {
  return (
    <button
      type="button"
      onClick={() => onToggle(tag)}
      className={`px-3 py-1.5 rounded-full flex items-center gap-2 cursor-pointer transition-all ${
        isSelected
          ? 'bg-primary text-iosLight shadow-ios-button'
          : 'bg-gray-100 text-iosGray hover:bg-gray-200'
      }`}
    >
      {tag}
    </button>
  );
};

export default TagButton;