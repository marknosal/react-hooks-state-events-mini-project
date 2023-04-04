import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [displayedTasks, setDisplayedTasks] = useState(TASKS)

  function addTask(newTask) {
    setDisplayedTasks([...displayedTasks, newTask,])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={CATEGORIES} addTask={addTask} />
      <TaskList tasks={TASKS} selectedCategory={selectedCategory} displayedTasks={displayedTasks} setDisplayedTasks={setDisplayedTasks} />
    </div>
  );
}

export default App;
