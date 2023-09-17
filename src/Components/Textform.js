import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearClick = () => {
    let newText = '';
    setText(newText);
  };

  const handleCopy = () => {
    let Text = document.getElementById("myBox");
    Text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces=()=>{
    let Text=text.split(/[ ]+/);
    setText(Text.join(" "))
  }

   
  const [text, setText] = useState("");
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8 "
          ></textarea>
        </div>
        <button className="btn btn-danger mx-2" onClick={handleUpClick}>
          Convert To Uppercase 
        </button>
        
        <button className="btn btn-warning mx-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>

        <button className="btn btn-info mx-2" onClick={handleClearClick}>
          Clear test
        </button>

        <button className="btn btn-primary mx-2" onClick={handleCopy}>
        Copy text
        </button>

        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>
        Remove Extra space
        </button>

      </div>
      <div className="container my-3 ">
        <h1>Your txt summary</h1>
        <p>{text.split(" ").length } words and {text.length} characters and {0.08 * text.split(" ").length} Minutes to read the text</p>
        {/* to count words and length of the words   */}
        {/* <p></p> */}
        {/* <h2>Preview</h2>  */}
        {/* <p>{text}</p>   */}
      </div>
    </>
  );
}
