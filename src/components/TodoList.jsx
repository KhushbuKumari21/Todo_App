import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, onDelete, onToggle, onEdit }) => {
  return (
    <section className="todo-section">
      {todos.length === 0 ? (
        <p className="no-task">No tasks yet start adding one above !</p>
      ) : (
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default TodoList;
