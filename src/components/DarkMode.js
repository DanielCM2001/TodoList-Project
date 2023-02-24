import React from "react";
import { ReactComponent as Sun } from "../assets/img/Sun.svg";
import { ReactComponent as Moon } from "../assets/img/Moon.svg";

/**
 * @summary
 * This component provides a simple way for users to switch between light and dark themes for a web page,
 * and stores their preference in local storage so that it persists between visits.
 */
const DarkMode = () => {
  /**
   * @function
   * The first two functions, setDarkMode and setLightMode, are responsible for setting the
   * theme of the web page to either dark or light, respectively.
   * @description
   * They do this by adding an HTML attribute called "data-theme" to the <html> tag and
   *  setting it to either "dark" or "light", as well as storing the selected theme in local storage.
   */

  const setDarkMode = () => {
    /*Adding attribute to HTML Tag*/
    document.querySelector("html").setAttribute("data-theme", "dark");
    /*set selected theme in local storage*/
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("html").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  /* Variable selectedTheme, retrieves the selected theme from local storage. */
  const selectedTheme = localStorage.getItem("selectedTheme");

  if (selectedTheme === "dark") {
    setDarkMode();
  }

  /* The toggleTheme fuction, is called when the user toggles the theme switch.   */
  const toggleTheme = (e) => {
    /*It checks whether the switch is checked (indicating that the user wants the dark theme) 
    and calls either setDarkMode or setLightMode accordingly.  */
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  /**
   * @description
   * The component returns a <div> element that contains a checkbox input and a label.
   * The checkbox input allows the user to toggle the theme, and the label contains icons for a sun and a moon
   * (representing light and dark themes, respectively).
   */
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={
          toggleTheme
        } /*Event listener that calls the toggleTheme function */
        defaultChecked={selectedTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <Sun />
        <Moon />
      </label>
    </div>
  );
};

export default DarkMode;
