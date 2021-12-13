// select our input by ID and assign it to the variable, "input"
// use the add event listener method to put an event on "input"
// select the div, and change the "textContent" property to the value of the events target (the input box)

// Selects input id change-me and stores it to variable input
var input = document.getElementById("change-me");

// Creates a listener event on input
input.addEventListener('input', changeContent);

// Changes the text content of element with id output
function changeContent(event) {
    document.getElementById('output').textContent = event.target.value;
}

