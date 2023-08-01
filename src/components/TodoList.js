import React from "react";
const TodoList = ({ data, deleteTodo, updateStatus }) => {
  return (
    <div>
      {data.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <h1>{`${todo.title}`}</h1>
            {todo.status ? "Completed" : "Not Completed"}
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <select
              value={todo.status ? "complete" : "incomplete"}
              onChange={(e) => updateStatus(todo.id, e.target.value)}
            >
              <option value="incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
            <button onClick={() => updateStatus(todo.id, todo.status ? "incomplete" : "complete")}>Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;

