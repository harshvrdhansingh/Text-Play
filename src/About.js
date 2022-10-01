import React ,{useState} from "react";
import Navbar from "./Navbar";

export default function About(props) {
  const [mode, setMode] = useState("light");
    
     const [myStyle, setMyStyle] = useState({
        color: 'white',
        backgroundColor: 'black'
});

 const [btn, setBtn] = useState("Enable Dark mode")
   
const toggleStyle = () =>{
    if(myStyle.color === 'white'){
        setMyStyle({
            color: 'white',
            backgroundColor:'white'
        })
        setBtn("Enabe Dark mode")
    }
    else{
        setMyStyle({
            color: 'white',
            backgroundColor:'white ',
            // border: ' solid white'
    })
    setBtn("Enabe  light mode")
}
}

const toggleMode = () => {
  if (mode === "light") {
    setMode("dark");
    document.body.style.backgroundColor = "white";
    // showAlert("Dark mode has been enable", "success");
    document.title = "TextPlay -  Dark Mode";
//     // setInterval(() => {
//     //   document.title = "TextPlay is amazing";
//     //   },  2000);
//     //   setInterval(() => {
//     //     document.title = " Installed TextPlay Now";
//     //     },  1500);
  } else {
    setMode("light");
    document.body.style.backgroundColor = "white";
    // showAlert("Light mode has been enable", "success");
    document.title = "TextPlay - Light Mode";
  }
};

  return (
     <>
     <div>
     <Navbar
            title="TEXT-PLAY"
            aboutText="ABOUT"
            mode={mode}
            toggleMode={toggleMode}
          />
    
    <div className="container"   >
   
      <h2 className="my-3"  > </h2>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"  
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              <strong> ANALYZE YOUR TEXT  </strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  >
               TextPlay gives you a way to analyze your text quickly and efficiently. Be it wordcount, character count or preview. 
            </div>
          </div>
        </div>
        <div className="accordion-item" >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"  
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong> FREE TO USE </strong> 
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"  >
            Browser is a free character counter tool that provides instant charactercount and word count statistics for a given text. Textplay reports the number of words and characters. Thus it is suitable for writing text with words/ character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item"  >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed" 
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong> BROWSER COMPATIBLE </strong> 
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body"   >
             This words counter software works in any web Browser such as chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, document, pdf document, essays, etc. 
              
            </div>
          </div>
        </div>
      </div>
      {/* <div className="container my-3">
      <button  onClick={ toggleStyle} type="button"  className="btn btn-dark">
         {btn}
      </button> */}
      {/* </div> */}
    </div>
    </div>
</>
  );

}