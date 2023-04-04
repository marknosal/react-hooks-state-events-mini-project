import React from "react";
import Task from "./Task";

function TaskList({ filter, displayedTasks, setDisplayedTasks }) {
  
  console.log(displayedTasks)
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

  
  // const filteredTasks = displayedTasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory)
  

  return (
    <div className="tasks">
        {filter.map((task) => <Task key={task.text} text={task.text} category={task.category} deleteTask={handleDelete} />)}
    </div>
  );
}

export default TaskList;
