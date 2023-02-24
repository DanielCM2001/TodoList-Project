import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

/***
 * @summary
 * This component renders a list of todo items and It takes in four props:
 * @description
 * 1) todos: an array of todo objects with id, text, and isComplete properties.
 * 2) completeTodo: a function that takes in a todo id and marks it as complete.
 * 3) removeTodo: a function that takes in a todo id and removes it from the list.
 * 4) updateTodo: a function that takes in a todo id and its new text value, and updates it in the list.
 */
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  /**
   * @summary
   * This state variable is used to keep track of which todo item is currently being edited.
   * @description
   * When a todo item is being edited, edit.id is set to the id of the todo item being edited,
   * and edit.value is set to its current text value
   */
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  /**
   * @summary
   * The submitUpdate function, takes in a value argument (the new text value of the todo item being edited)
   * @description
   * This function calls the updateTodo function with the id of the todo item being edited and the new value.
   * Then it resets the edit state to its initial value.
   */
  const submitUpdate = (value) => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  /**
   * @summary
   * The component conditionally renders either a TodoForm component or a list of todo items.
   * @condition
   * If edit.id is not null, meaning a todo item is being edited, it renders a TodoForm component
   * and passes it the edit state and submitUpdate function as props.
   * @else
   * Otherwise, it maps over the todos array and renders each todo item as a div element.
   */
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  /**
   * @Summary
   * Each todo item div has a className that is determined by its isComplete property
   * (either "todo-row complete" or "todo-row").
   * @description
   * It also has two child elements: a div element that displays the todo item's text
   * and can be clicked to mark the item as complete (by calling completeTodo with its id).
   *
   * And a div element with two icons that can be clicked to remove the item (by calling removeTodo with its id)
   * or edit it (by setting the edit state to { id: todo.id, value: todo.text })
   */
  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>

      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
};

export default Todo;
