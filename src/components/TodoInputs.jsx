import { useState, useEffect, useRef } from "react";

const TodoInputs = ({ addTodo, edit, updateTodo }) => {
  const [input, setInput] = useState("");

  const inputRef = useRef(null);

  useEffect(() => {
    if (edit.id !== null) {
      setInput(edit.text);
    }
  }, [edit]);

  useEffect(() => {
    inputRef.current.focus();
  }, [edit]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleKey = (e) => {
    if (e.key === "ENTER") {
      handleSubmit(e);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;

    if (edit.id !== null) {
      updateTodo(edit.id, input);
    } else {
      const newTodo = { id: Math.floor(Math.random() * 1000), text: input };

      addTodo(newTodo);
    }

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Input Your Task Please"
        value={input}
        ref={inputRef}
        onChange={handleChange}
        onKeyDown={handleKey}
      />
      <button type="submit">
        {edit.id !== null ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoInputs;
