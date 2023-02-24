import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

/**
 * @summary
 * The TodoList component renders a div with className "todo-app" that includes
 * 1) A heading "What's the Plan for Today?",
 * 2) A TodoForm component that allows the user to add a new todo,
 * 3) And a Todo component that renders the list of todos. The Todo component passes the todos, completeTodo,
 *    removeTodo, and updateTodo props.
 */

function TodoList() {
  const [todos, setTodos] = useState([]);

  /**
   * @description
   * The addTodo function is used to add a new todo to the list when the user submits
   * a new todo through the TodoForm component.
   * @Conditions
   * If the input value of the todo is empty or consists only of spaces, the function returns
   * and does not add the todo to the list.
   *
   * Otherwise, it adds the new todo to the beginning of the todos array using the spread operator (...todos).
   */
  const addTodo = (todo) => {
    if (todo.text.trim().length === 0) {
      return;
    }

    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  /**
   * @summary
   * The updateTodo function is used to update an existing todo.
   * @description
   * It takes in the id of the todo to be updated and the new value of the todo.
   * @Conditions
   *  Maps over the todos array and updates the todo with the matching id with the new value.
   */

  const updateTodo = (todoId, newValue) => {
    //Check if the value is empty or with full with empty spaces
    if (newValue.text.trim().length === 0) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  /**
   * @summary
   * The removeTodo function is used to remove a todo from the list.
   * @description
   * It takes in the id of the todo to be removed, and it creates a new array
   * removedArr that excludes the todo with the matching id.
   * It then updates the todos state accordingly.
   * */
  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  /**
   * @summary
   * The completeTodo function is used to mark a todo as complete.
   * @description
   * It takes in the id of the todo to be completed and it maps over the todos array.
   * It finds the todo with the matching id, toggles its "isComplete" property,
   * and returns the updated todo. It then updates the todos state accordingly.
   */
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <div className="todo-app">
        <h1>What's the Plan for Today?</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
        />
      </div>
    </>
  );
}

export default TodoList;
