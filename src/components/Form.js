import React, { useState } from "react";

const Form = ({ addTodo }) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskName.trim() && taskDescription.trim()) {
      addTodo({
        id: Date.now(),
        name: taskName,
        description: taskDescription,
        status: "Not Completed",
      });
      setTaskName("");
      setTaskDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2 d-flex">
      <div className="form-group name-input mr-4">
        <input
          type="text"
          placeholder="Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group desc-input mr-4">
        <input
          type="text"
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn add-btn btn-success">
        Add Todo
      </button>
    </form>
  );
};

export default Form;
