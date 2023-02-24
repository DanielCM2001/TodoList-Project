import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import DarkMode from "./DarkMode";

/**
 * @summary
 * This component renders a navigation bar for the top of the page with a title that takes
 * the user back to the home page and a custom component for switching between light and dark themes.
 */

function NavBar() {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Navbar.Brand href="/" className="NavTitle">
            Todo List
          </Navbar.Brand>
          <DarkMode />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
