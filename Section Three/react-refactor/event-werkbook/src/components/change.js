import { useEffect } from "react";

const Change = () => {
  useEffect(() => {
    var input = document.getElementById("change-me");

    // Creates a listener event on input
    input.addEventListener("input", changeContent);

    // Changes the text content of element with id output
    function changeContent(event) {
      document.getElementById("output").textContent = event.target.value;
    }
  });

  return (
    <div>
      <h1>Some data binding</h1>
      <h3>
        Type something in the input box, and then press tab or click outside the
        input box
      </h3>
      <input id="change-me" />
      <div id="output"></div>
    </div>
  );
};

export default Change;
