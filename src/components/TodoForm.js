import React, { useState, useEffect, useRef } from "react";

/**
 * @summary
 * This is a React component that renders a form for adding or updating a todo item.
 * It receives props from its parent component, TodoList, that determine its behavior.
 */

function TodoForm(props) {
  /**
   * @description
   * The component has a state hook that initializes the input value:
   * 1) With an empty string, if the edit prop is not passed
   * 2) Or, with the current value of the edited todo, if the edit prop is present.
   */
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  /*
   * Ref hook that references the input element and focuses it when the component is
   * mounted using an useEffect hook.
   */
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  /**
   *  @summary
   *  There are two functions, handleChange and handleSubmit,
   *  that handle the input changes and form submission, respectively.
   *  @description
   *  When the form is submitted, the onSubmit prop function is called with an object
   *  that includes an id and a text property.
   */

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /* The id is generated using Math.floor(Math.random() * 10000) to create a unique ID for each todo item. */
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });

    setInput("");
  };

  /**
   * @summary
   * The component renders two different versions of the input field and button based on
   * whether the edit prop is present.
   * @condition
   * If it is present, the component renders an input field and button with "Update" text,
   * @else
   * Otherwise, it renders a field and button with "Add todo" text.
   */

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Add todo
          </button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
