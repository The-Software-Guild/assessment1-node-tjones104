// select our input by ID and assign it to the variable, "input"
// use the add event listener method to put an event on "input"
// select the div, and change the "textContent" property to the value of the events target (the input box)

var input = document.getElementById("change-me");

input.addEventListener('input', changeContent);

function changeContent(event) {
    document.getElementById('output').textContent = event.target.value;
  }

