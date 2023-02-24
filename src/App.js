import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import TodoList from "./components/TodoList";
import { Routes, Route } from "react-router-dom";

/**
 * @summary
 * This is a functional component named App that renders the main layout of the application.
 * It uses React Router to define two routes and conditionally render their
 * respective components based on the current URL path.
 */
function App() {
  return (
    <section className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Todo" element={<TodoList />} />
      </Routes>
    </section>
  );
}

export default App;
