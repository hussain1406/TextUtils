import React, { useState } from "react";
import "../css/main.css";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text converted to Uppercase Successfully!", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to Lowercase Successfully!", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const removeWhiteSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Whitespaces removed Successfully!", "success");
  };
  const clearText = () => {
    setText("");
    props.showAlert("Text Cleared!", "success");
  };
  let readingMinutes = Math.floor(0.006666667 * text.split(" ").length);
  let readingSec = Math.floor(0.4 * text.split(" ").length) % 60;

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "#e8e5e5" }}
      >
        <h2 style={{ color: props.mode === "light" ? "black" : "#e8e5e5" }}>
          {props.heading}
        </h2>
        <div
          className="mb-3"
          style={{ color: props.mode === "light" ? "black" : "#e8e5e5" }}
        >
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#737373",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button
          className={`btn btn${
            props.mode === "light" ? "-outline" : ""
          }-primary me-1`}
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>
        <button
          className={`btn btn${
            props.mode === "light" ? "-outline" : ""
          }-primary mx-1`}
          onClick={handleLowClick}
        >
          Convert to Lowercase
        </button>
        <button
          className={`btn btn${
            props.mode === "light" ? "-outline" : ""
          }-primary mx-1`}
          onClick={handleCopy}
        >
          Copy to Clipboard
        </button>
        <button
          className={`btn btn${
            props.mode === "light" ? "-outline" : ""
          }-danger mx-1`}
          onClick={removeWhiteSpaces}
        >
          Remove Whitespaces
        </button>
        <button
          className={`btn btn${
            props.mode === "light" ? "-outline" : ""
          }-danger mx-1`}
          onClick={clearText}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "#e8e5e5" }}
      >
        <h3 className="my-3">Your text summary:</h3>
        <div id="text-info">
          <div id="string-info">
            <div>
              Words: <strong>{text.split(/\s+/).length - 1}</strong>
            </div>
            <div>
              Characters: <strong>{text.length} </strong>
            </div>
          </div>
          <span>
            Reading Time:
            <strong>
              &nbsp;{readingMinutes} minutes and {readingSec} sec
            </strong>
          </span>
        </div>
        <h2>Preview: </h2>
        <p id="text-preview" style={{ color: "black" }}>
          {text}
        </p>
      </div>
    </>
  );
}
