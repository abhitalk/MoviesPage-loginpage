import React, { useState, useEffect } from 'react'
import './index.css';
import {ImSwitch} from 'react-icons/im';

function ToggleTheme() {
    const [toggleTheme, setToggleTheme] = useState(
        () => JSON.parse(localStorage.getItem("toggleTheme")) || "light"
      );
      useEffect(() => {
        localStorage.setItem("toggleTheme", JSON.stringify(toggleTheme));
        document.body.classList.add(toggleTheme); //* componentDidMount
        return () => {
          document.body.classList.remove(toggleTheme); //* componentWillUnmount
          // document.body.classList.add(toggleTheme); //* componentWillUnmount
          //? it used as cleanup,  (like removing event listeners, cancel the timer etc) and here we are removing the class the we added
    
          //? after removing the class its going to check if there's a light class if so it add the dark theme
          console.log("unmount");
        };
      }, [toggleTheme]); //* will run every time the toggleThem change (update)
      const classes = `${toggleTheme} App`;
      return (
        <button
          className={classes}
          onClick={() => {
            return toggleTheme === "light"
              ? setToggleTheme("dark")
              : setToggleTheme("light");
          }}
        >
         <ImSwitch/>
        </button>
      );
    }

export default ToggleTheme