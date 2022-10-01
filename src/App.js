// import "./App.css";

// import React, { useState } from "react";

import About from "./About";
import Main from "./Main";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";


function App() {

  return (
    <>
    <Router>
      <Routes>
           <Route path="/" element={<Main />}/>
           <Route path="/about" element={<About />}/>
           

          
  </Routes>
  </Router>
    </>
  );
}
export default App;
