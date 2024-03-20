import React, { useState, useEffect } from 'react';

function CategoryList() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/api/categories'); // Replace with your endpoint
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
        // Handle errors appropriately (display message, etc.)
      }
    };

    fetchCategories();
  }, []); // Empty dependency array for initial fetch only

  return (
    <div className="category-list">
      <h2>All Categories</h2>
      {categories.length > 0 ? (
        <ul>
          {categories.map((category) => (
            <li key={category._id || category.id}> {category.name} </li>
          ))}
        </ul>
      ) : (
        <p>No categories found.</p>
      )}
    </div>
  );
}

export default CategoryList;
