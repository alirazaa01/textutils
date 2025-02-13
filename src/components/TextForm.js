import React, { useState } from "react";

export default function TextForm(props) {

    const handleSpeak = () => {
    let speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
    props.showAlert("You speaked", "success");    
    };


  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Convert to Uppercase' , 'success')
  };
  const handleLoClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convert to Lowercase", "success");

  };
  const handleClearClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
     props.showAlert("Cleard text", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    alert("Text copied to clipboard!");
     props.showAlert("Copy to Clipboard", "success");
  };

  const handleOnChange = (event) => {
    //    console.log("On Change");
    setText(event.target.value);
     props.showAlert("Change the text", "success");
  };

  const [text, setText] = useState("");
  // text = "NewText";   // wrong way to set the state
  // setText("NewText");   // correct way to set the state // if you change the text you can use setText
  return (
    <>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="myBox"
            rows="8"
          ></textarea>
          <button className="btn btn-primary my-3 mx-2" onClick={handleSpeak}>
            <i className="bi bi-volume-up">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-volume-up text-black"
                viewBox="0 0 16 16"
              >
                <path d="M11.536 14.01A8.47 8.47 0 0 0 14.026 8a8.47 8.47 0 0 0-2.49-6.01l-.708.707A7.48 7.48 0 0 1 13.025 8c0 2.071-.84 3.946-2.197 5.303z" />
                <path d="M10.121 12.596A6.48 6.48 0 0 0 12.025 8a6.48 6.48 0 0 0-1.904-4.596l-.707.707A5.48 5.48 0 0 1 11.025 8a5.48 5.48 0 0 1-1.61 3.89z" />
                <path d="M10.025 8a4.5 4.5 0 0 1-1.318 3.182L8 10.475A3.5 3.5 0 0 0 9.025 8c0-.966-.392-1.841-1.025-2.475l.707-.707A4.5 4.5 0 0 1 10.025 8M7 4a.5.5 0 0 0-.812-.39L3.825 5.5H1.5A.5.5 0 0 0 1 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 7 12zM4.312 6.39 6 5.04v5.92L4.312 9.61A.5.5 0 0 0 4 9.5H2v-3h2a.5.5 0 0 0 .312-.11" />
              </svg>
            </i>
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary my-2 mx-1" onClick={handleLoClick}>
            Convert to Lowercase
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={handleClearClick}
          >
            Clear
          </button>
          <button
            className="btn btn-primary my-2 mx-1"
            onClick={handleCopyText}
          >
            Copy
          </button>
        </div>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} In minutes</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something  in the textBox above to preview it here...."}
        </p>
      </div>
    </>
  );
}
