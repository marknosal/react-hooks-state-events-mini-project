import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [displayedTasks, setDisplayedTasks] = useState(TASKS)

  const filteredTasks = displayedTasks.filter(task => selectedCategory === "All" || task.category === selectedCategory)

  function addTask(newTask) {
    setDisplayedTasks([...displayedTasks, newTask])
  }

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

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList filter={filteredTasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
