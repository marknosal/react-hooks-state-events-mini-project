import React from "react";
import Task from "./Task";

function TaskList({ selectedCategory, displayedTasks, setDisplayedTasks }) {
  
  console.log(selectedCategory)
  function handleDelete(deletedTask) {
    // console.log(event)
    setDisplayedTasks(displayedTasks.filter((task) => {
      if (deletedTask === task.text) {
        return false
      } else {
        return true
      }
    }))
  }

  
  const filteredTasks = displayedTasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory)
  

  return (
    <div className="tasks">
        {filteredTasks.map((task) => <Task key={task.text} text={task.text} category={task.category} deleteTask={handleDelete} />)}
    </div>
  );
}

export default TaskList;
