import React, { useEffect } from "react";
import TodoInputs from "./TodoInputs";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";

const TodoLists = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [edit, setEdit] = useState({ id: null, text: "" });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (task) => {
    setTodos((prevTodo) => [...prevTodo, task]);
    console.log("Todo:", todos);
  };

  const editTodo = (todo) => {
    setEdit({ id: todo.id, text: todo.text });
  };

  const updateTodo = (todoId, newtext) => {
    setTodos(
      todos.map((todo) =>
        todo.id === todoId ? { ...todo, text: newtext } : todo
      )
    );
    setEdit({ id: null, text: "" });
  };

  const removeTodo = (taskToRemove) => {
    setTodos(todos.filter((todo) => todo.id !== taskToRemove));
  };

  return (
    <div>
      Things To Do!
      <TodoInputs addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
      <ul>
        {todos.map((todo) => (
          <div key={todo.id}>
            <h4>{todo.text}</h4>
            <FiEdit onClick={() => editTodo(todo)} />
            <MdDeleteForever onClick={() => removeTodo(todo.id)} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TodoLists;
