import React, { useEffect } from "react";
import TodoInputs from "./TodoInputs";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import ICON from "../images/icon.png";
import "./todo.css";

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
    <section className="todo-body">
      <div className="todo-card">
        <div className="header">
          <h1>Things To Do!</h1>
          <img src={ICON} alt="icon image" />
        </div>
        <TodoInputs addTodo={addTodo} edit={edit} updateTodo={updateTodo} />
        <ul className="lists">
          {todos.map((todo) => (
            <li key={todo.id} className="todo-item">
              <h4 className="todo-text">{todo.text}</h4>
              <div className="action-buttons">
                <FiEdit onClick={() => editTodo(todo)} className="editBtn" />
                <MdDeleteForever
                  onClick={() => removeTodo(todo.id)}
                  className="deleteBtn"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TodoLists;
