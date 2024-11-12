import { useState } from "react";

// eslint-disable-next-line react/prop-types
const TaskForm = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: taskTitle,
      description: taskDescription,
      id: Date.now(),
    });
    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="form-group">
        <label htmlFor="name"> Title</label>
        <input
          type="text"
          id="name"
          placeholder="Enter Task Title"
          name="name"
          required="required"
          autoComplete="off"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          placeholder="Task Description"
          name="description"
          rows={5}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        ></textarea>
      </div>

      <button className="btn">Add</button>
    </form>
  );
};

export default TaskForm;
