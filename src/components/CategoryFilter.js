import React from "react";

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {

  function handleClick(event) {
    setSelectedCategory(event.target.innerText)
  }
  

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category=> (
        <button key={category} className={category === selectedCategory ? 'selected' : null} onClick={handleClick}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;
