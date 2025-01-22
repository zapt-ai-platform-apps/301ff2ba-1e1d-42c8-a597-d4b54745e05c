import React from 'react';
import { FiTag } from 'react-icons/fi';

const TagFilter = ({ availableTags, selectedTags, setSelectedTags }) => {
  return (
    <div className="mb-6 flex gap-2 flex-wrap">
      {availableTags.map(tag => (
        <button
          key={tag}
          onClick={() => setSelectedTags(prev => 
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
          )}
          className={`px-4 py-2 rounded-xl flex items-center gap-2 cursor-pointer transition-all ${
            selectedTags.includes(tag) 
              ? 'bg-indigo-600 text-white shadow-lg' 
              : 'bg-white text-gray-600 hover:bg-indigo-50 hover:text-indigo-700 shadow-md'
          }`}
        >
          <FiTag className="shrink-0" /> {tag}
        </button>
      ))}
    </div>
  );
};

export default TagFilter;