import React, { useState, useEffect } from "react";

const Item = ({ todo, updateTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(todo.name);
  const [editDescription, setEditDescription] = useState(todo.description);
  const [statusColor, setStatusColor] = useState("");

  useEffect(() => {
    setStatusColor(todo.status === "Completed" ? "#10AF89" : "#FB8181");
  }, [todo.status]);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    updateTodo({
      ...todo,
      status: newStatus,
    });
    setStatusColor(newStatus === "Completed" ? "#10AF89" : "#FB8181");
  };

  const handleEdit = (e) => {
    e.preventDefault();
    updateTodo({
      ...todo,
      name: editName,
      description: editDescription,
    });
    setIsEditing(false);
  };

  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <div className="card-body">
          {isEditing ? (
            <form onSubmit={handleEdit}>
              <div className="form-group">
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="form-control mb-2"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="form-control mb-2"
                />
              </div>
              <button type="submit" className="btn btn-success mr-2">
                Save
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </form>
          ) : (
            <>
              <h5 className="card-title">Name: {todo.name}</h5>
              <p className="card-text">Description: {todo.description}</p>
              <p>
                Status:
                <select
                  value={todo.status}
                  onChange={handleStatusChange}
                  className="form-control item-status mb-2"
                  style={{ backgroundColor: statusColor }}
                >
                  <option className="not-completed" value="Not Completed">
                    Not Completed
                  </option>
                  <option className="completed" value="Completed">
                    Completed
                  </option>
                </select>
              </p>
              <div className="container edit-delete">
                <button
                  className="btn edit-btn btn-primary mr-2"
                  onClick={() => setIsEditing(true)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
