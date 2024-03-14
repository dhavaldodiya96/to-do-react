import React from "react";

const ToDoListItem = ({ index, todo, onDelete }) => {
  const { name, endDate, endTime } = todo;
  console.log(endDate, "ffff");

  return (
    <div className="toDoListItem">
      <li className="inputTaskData">
        <div className="inputNmae">{name}</div>
        <div className="inputAddDate">End Date: {endDate}</div>
        <div className="inputAddEndTime">End Time: {endTime}</div>
        <button className="inputListRemove" onClick={() => onDelete(index)}>
          Remove
        </button>
      </li>
    </div>
  );
};

export default ToDoListItem;
