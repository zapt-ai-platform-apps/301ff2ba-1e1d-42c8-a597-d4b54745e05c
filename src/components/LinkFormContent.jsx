import React from 'react';
import FormFields from './FormFields';
import TagSection from './TagSection';
import ActionButtons from './ActionButtons';

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
      <FormFields formData={formData} setFormData={setFormData} />
      <TagSection 
        availableTags={availableTags} 
        selectedTags={formData.tags} 
        toggleTag={toggleTag} 
      />
      <ActionButtons onClose={onClose} existingLink={existingLink} />
    </form>
  );
};

export default LinkFormContent;