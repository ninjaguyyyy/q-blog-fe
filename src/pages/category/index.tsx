import React, { useState } from 'react';
import CategoryDropdown from 'components/catergories';
import SubcategoryDropdown from 'components/subcatergories';

const CategorySubcategoryDropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');

  const handleCategoryChange = (category: any) => {
    setSelectedCategory(category);
    setSelectedSubcategory('');
  };

  const handleSubcategoryChange = (subcategory: any) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div>
      <CategoryDropdown onCategoryChange={handleCategoryChange} />
      {selectedCategory && <SubcategoryDropdown category={selectedCategory} onSubcategoryChange={handleSubcategoryChange} />}
      {selectedSubcategory && <p>You have selected subcategory {selectedSubcategory}.</p>}
    </div>
  );
};

export default CategorySubcategoryDropdown;
