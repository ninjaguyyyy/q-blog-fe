import React, { useState, useEffect } from 'react';

const SubcategoryDropdown = (props: any) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    // simulate an API call to get subcategories based on the selected category
    const getSubcategories = async () => {
      const subcategories = await fetch(`/api/subcategories?category=${props.category}`)
      .then((response) => response.json());
      setSubcategories(subcategories);
    };
    getSubcategories();
  }, [props.category]);

  const handleSubcategoryChange = (event: any) => {
    setSelectedSubcategory(event.target.value);
    props.onSubcategoryChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="subcategory">Select a subcategory:</label>
      <select id="subcategory" value={selectedSubcategory} onChange={handleSubcategoryChange}>
        <option value="">-- Select a subcategory --</option>
        {subcategories.map((subcategory: any) => (
          <option key={subcategory.id} value={subcategory.id}>
            {subcategory.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SubcategoryDropdown;
