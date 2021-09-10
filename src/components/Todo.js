import { useState } from "react";
import "./index.css";
import List from "./List/index";

export default function Todo() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      todo: "Learn JavaScript",
      isDone: false,
    },
    {
      id: "2",
      todo: "Hava a Life",
      isDone: false,
    },
    {
      id: "3",
      todo: "Learn AI",
      isDone: true,
    },
  ]);

  const filteredDone = todos.filter((todo) => todo.isDone === true);

  const filteredNotDone = todos.filter((todo) => todo.isDone === false);

  const deleteTodo = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  const clearCompleted = () => {
    const removeCompleted = todos.filter((todo) => {
      return todo.isDone === false;
    });
    setTodos(removeCompleted);
  };

  const todosDone = (id) => {
    const doneTodo = todos.find((todo) => todo.id === id);
    setTodos([...todos, doneTodo.isDone=true])
  };

  return (
    <div>
      <section className="todoapp">
        <List todos={todos} setTodos={setTodos} />
        <section className="main">         
          
          <ul className="todo-list">
            {filteredNotDone.map((todo) => {
              return (
                <li key={todo.id}>
                  <div className="view">
                    <label>
                      {todo.todo}{" "}
                      <button
                        onClick={() => todosDone(todo.id)}
                        className="btn btn-success"
                      >
                        Done!
                      </button>
                    </label>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="destroy"
                    ></button>
                  </div>
                </li>
              );
            })}

            {filteredDone.map((todo) => {
              return (
                <li key={todo.id} className="completed">
                  <div className="view">
                    <label>{todo.todo}</label>
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="destroy"
                    ></button>
                  </div>
                </li>
              );
            })}

          </ul>
          <span className="todo-count">
            <strong>{filteredNotDone.length}</strong> items left
          </span>
          <button onClick={clearCompleted} className="clear-completed">
            Clear Completed
          </button>
        </section>
        <footer className="footer">

        </footer>
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <strong>Batuhan Avcı</strong>
        </p>
      </footer>
    </div>
  );
}
