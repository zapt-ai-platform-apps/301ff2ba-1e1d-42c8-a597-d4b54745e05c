import React from 'react';
import TagButton from './TagButton';

const TagSection = ({ availableTags, selectedTags, toggleTag }) => {
  return (
    <div>
      <label className="block text-sm font-semibold mb-3 text-gray-300">Categorías</label>
      <div className="flex flex-wrap gap-3">
        {availableTags.map(tag => (
          <TagButton
            key={tag}
            tag={tag}
            isSelected={selectedTags.includes(tag)}
            onToggle={toggleTag}
          />
        ))}
      </div>
    </div>
  );
};

export default TagSection;