import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <div className="filter-container">
      <div className="form-group filter">
        <label className="mr-2">Status Filter:</label>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="form-control filter-drop-down"
        >
          <option value="All">All</option>
          <option value="Completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
