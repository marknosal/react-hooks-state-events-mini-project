import React from "react";
import Task from "./Task";

function TaskList({ filter, onDelete }) {
  
  // console.log(displayedTasks)
  

  
  // const filteredTasks = displayedTasks.filter(task => selectedCategory === 'All' || task.category === selectedCategory)
  

  return (
    <div className="tasks">
        {filter.map((task) => <Task key={task.text} text={task.text} category={task.category} onDelete={onDelete} />)}
    </div>
  );
}

export default TaskList;
