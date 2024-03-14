import React, { useState } from "react";
import ToDoListItem from "./todoListItem";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleAddTodo = () => {
    if (taskName.trim() !== "" && endDate !== "" && endTime !== "") {
      const newTodo = {
        name: taskName,
        endDate: endDate,
        endTime: endTime,
      };
      setTodos([...todos, newTodo]);
      setTaskName("");
      setEndDate("");
      setEndTime("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div>
      <h1 className="toDoName">To-Do List</h1>
      <div className="input-container">
        <button className="addList" onClick={handleAddTodo}>
          Add Task
        </button>

        <input
          className="inputTextList"
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          className="inputDate"
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <input
          className="inputDate"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <ul>
        {todos.map((todo, index) => (
          <ToDoListItem
            key={index}
            index={index}
            todo={todo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
