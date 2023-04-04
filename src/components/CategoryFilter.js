import React from "react";

function CategoryFilter({ categories, setSelectedCategory, selectedCategory }) {

  function handleClick(event) {
    setSelectedCategory(event.target.innerText)
  }
  const catButtons = categories.map(category=> (
    <button key={category} className={category === selectedCategory ? 'selected' : null} onClick={handleClick}>{category}</button>
  ))

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {catButtons}
    </div>
  );
}

export default CategoryFilter;
