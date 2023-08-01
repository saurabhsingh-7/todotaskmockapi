

import React, { useState } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";

const Todo = () => {
  const [data, setData] = useState([]);

  const handleData = (input) => {
    setData((prev) => {
      return [...prev, input];
    });
  };

  const deleteTodo = (id) => {
    const newTodo = data.filter((todo) => todo.id !== id);
    setData(newTodo);
  };

  const updateStatus = (id, status) => {
    const updatedTodoList = data.map((todo) => {
      return todo.id === id ? { ...todo, status: status === "complete" } : todo;
    });
    setData(updatedTodoList);
  };

  return (
    <div>
      <TodoForm handleData={handleData} />
      <TodoList data={data} deleteTodo={deleteTodo} updateStatus={updateStatus} />
    </div>
  );
};

export default Todo;

