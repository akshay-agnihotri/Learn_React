import { useState, useRef } from "react";

export default function Player() {
  const [inputFieldValue, setInputFieldValue] = useState("");
  const inputField = useRef();

  function handleButtonClicked() {
    setInputFieldValue(inputField.current.value);
    inputField.current.value='';
  }

  return (
    <section id="player">
      <h2>
        Welcome {inputFieldValue === "" ? "unknown entity" : inputFieldValue}
      </h2>
      <p>
        <input type="text" ref={inputField}  />
        <button onClick={handleButtonClicked}>Set Name</button>
      </p>
    </section>
  );
}
