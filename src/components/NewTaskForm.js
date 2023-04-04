import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [newTaskText, setNewTaskText] = useState('')
  const [newTaskCat, setNewTaskCat] = useState('Code')



  function handleSubmit(event) {
    event.preventDefault()
    onTaskFormSubmit({text: newTaskText, category: newTaskCat,})
    setNewTaskCat('Code')
    setNewTaskText('')
  }

  

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTaskText} onChange={e => setNewTaskText(e.target.value)}/>
      </label>
      <label>
        Category
        <select name="category" value={newTaskCat} onChange={e => setNewTaskCat(e.target.value)}>
          {categories.map(category => (
            category !== 'All' ? <option key={category}>{category}</option> : null
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
