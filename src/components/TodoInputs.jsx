import { useState } from "react";

const TodoInputs = ({ addTodo }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input Your Task Please"
        value={input}
        onChange={handleChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoInputs;
