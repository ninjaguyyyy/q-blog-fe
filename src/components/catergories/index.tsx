import axios from 'axios';
import React, { useState, useEffect } from 'react';

const CategoryDropdown = (props:any) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://api.publicapis.org/categories');
        setCategories(res.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    getData();
  }, []);

  const handleCategoryChange = (e:any) => {
    setSelectedCategory(e.target.value);
    props.onCategoryChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="subcategory">Select a subcategory:</label>
      <select id="subcategory" value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">-- Select a subcategory --</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryDropdown;
