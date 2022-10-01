import React, { useState } from "react";
// import Footer from "./Footer";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
    document.title = "TextPlay - UpperCase Mode";
  
  };
  const handleLcClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
    document.title = "TextPlay - LowerCase  Mode";

  };
  const handleCewClick = () => {
    console.log("Cew was clicked" + text);
    const newtext =  text.toLowerCase();
    return newtext.charAt(0).toUpperCase()+ newtext.slice(1);
    // setText(newText);
    // props.showAlert("Converted to Capitalize", "Success");
    // document.title = "TextPlay -    Mode";
    

  };

  const handleclearClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = " ";
    setText(newText);
    props.showAlert("Text are Clear", "success");
    document.title = "TextPlay -  Clear Mode";
  };

  const handlecopyClick = () => {
    console.log("I am copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text are Copied", "success");
    document.title = "TextPlay -  Copy Mode";
    

  };

  const handleremoveextraspacesClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces were Removed", "success");
    document.title = "TextPlay -  Remove extra space Mode";


  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
    
  }

  const [text, setText] = useState("enter text here");
  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>{props.heading}</h2>
        <h3>{props.aboutText}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{ backgroundColour: props.mode === 'dark' ? 'white' : 'black', color: props.mode === 'dark ' ? 'white' : 'black' }}
            id="mybox"
            rows="9"
          ></textarea>
        </div>
        {/* <button className="btn btn.primary" onClick ={handleUpClick}> Convert To Uppercase </button> */}
        <button
          type="button"
          className="btn btn-outline-success mx-1 my-1"
          onClick={handleUpClick}
        >
          CONVERT TO UPPERCASE
        </button>
        <button
          type="button"
          className="btn btn-outline-info mx-1 my-1"
          onClick={handleLcClick}
        >
          convert to Lowercase
        </button>

        <button
          type="button"
          className="btn btn-outline-warning mx-1 my-1"
          onClick={handleCewClick}
        >
          Capitalize Each Word
        </button>

        <button
          type="button"
          className="btn btn-outline-secondary mx-1 my-1"
          onClick={handlecopyClick}
        >
          Copy Text
        </button>

        <button
          type="button"
          className="btn btn-outline-danger mx-1 my-1"
          onClick={handleremoveextraspacesClick}
        >
          Remove extra space
        </button>

        <button
          type="button"
          className="btn btn-outline-info mx-1 my-1"
          onClick={handleclearClick}
        >
          Clear Text
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3>Text Summary</h3>
        <p>
          {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes To Read </p>
        <h3> Preview </h3>
        <p> {text.length>0?text:"Nothing to Preview"}</p>
      </div>
    </>
  );
}
