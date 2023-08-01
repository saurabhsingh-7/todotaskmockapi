import React, { useState } from "react";

const TodoForm = ({ handleData }) => {
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("incomplete");

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.random(),
      title: input,
      status: status === "complete",
    };
    handleData(obj);
    setInput("");
    setStatus("incomplete");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Something Here"
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="incomplete">Incomplete</option>
          <option value="complete">Complete</option>
        </select>
        <button>Add</button>
      </form>
    </div>
  );
};

export default TodoForm;

