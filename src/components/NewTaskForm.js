import React, { useState } from "react";

const NewTaskForm = ({ categories, onTaskFormSubmit }) => {
  const [newTask, setNewTask] = useState({ text: "", category: categories[0] });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onTaskFormSubmit(newTask);
    setNewTask({ text: "", category: categories[0] });
  };

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details:
        <input type="text" name="text" value={newTask.text} onChange={handleChange} />
      </label>
      <label>
        Category:
        <select name="category" value={newTask.category} onChange={handleChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
};

export default NewTaskForm;
