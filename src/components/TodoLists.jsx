import React from "react";
import TodoInputs from "./TodoInputs";
import { useState } from "react";

const TodoLists = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodos = [task, ...todos];

    setTodos(newTodos);
    console.log("Todo:", todos);
  };

  return (
    <div>
      Things To Do!
      <TodoInputs addTodo={addTodo} />
      {todos.map((todo, index) => (
        <h4 key={index}>{todo}</h4>
      ))}
    </div>
  );
};

export default TodoLists;
