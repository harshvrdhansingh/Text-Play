import React from 'react'
import TextForm from "./TextForm.js";
import Navbar from "./Navbar.js";
import Alert from "./Alert";
// import About from './About.js';
import { useState } from 'react';

const Main = () => {
    const [mode, setMode] = useState("light");
  const [alert, setalert] = useState("null");

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1800);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#212529";
      showAlert("Dark mode has been enable", "success");
      // document.title = "TextPlay-  Dark Mode";
      // setInterval(() => {
      //   document.title = "TextMony is amazing";
      //   },  2000);
      //   setInterval(() => {
      //     document.title = " Installed TextMony Now";
      //     },  1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enable", "success");
      // document.title = "TextPlay - Light Mode";
    }
  };


  return (
    <div>
       <Navbar
            title="TEXT-PLAY"
            aboutText="ABOUT"
            mode={mode}
            toggleMode={toggleMode}
          />
          <Alert alert={alert} />

          <div className="container my-3">
             <TextForm showAlert={showAlert} heading="TextPlay word counter and character counter, remove extra spaces" mode ={mode} />
            
          </div>


    </div>
  ) 
}

export default Main