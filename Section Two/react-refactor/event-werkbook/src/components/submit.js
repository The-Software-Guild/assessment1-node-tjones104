import { useEffect } from "react";

const Submit = () => {
  useEffect(() => {
    let input = document.createElement("INPUT");
    input.setAttribute("id", "gender");
    var form = document.getElementById("submit-me");
    form.insertBefore(input, form.childNodes[form.elements.length - 1]); //Inserts before the button

    // Get button, onclick do this
    document.getElementsByTagName("button")[0].onclick = function (event) {
      // Prevents page reload
      event.preventDefault();

      let isValid = true;

      // Getting form data and storing the value into an array
      let x = form.elements;
      let formArr = [];

      // x.length - 1 because the button counts as an element in the form
      for (let i = 0; i < x.length - 1; i++) {
        formArr.push(x[i].value);
      }

      // If any element of the array is an empty string dont post
      formArr.every((element) => {
        if (element === "") {
          isValid = false;
          return false;
        }
        return true;
      });

      if (isValid === true) {
        // Create new paragraph with id form-output
        let input = document.createElement("P");
        input.setAttribute("id", "form-output");
        form.appendChild(input);
        // Get how many p tags there are - 1 to start at 0 index
        let paraCount = document.getElementsByTagName("p").length - 1;
        document.getElementsByTagName("p")[paraCount].innerHTML = formArr;
      } else {
        // Alert for any empty field
        alert("Fields cannot be empty");
      }
    };
  });

  return (
    <div>
      <form id="submit-me">
        <input id="name" />
        <input id="age" />
        <button onSubmit>Click Me</button>
      </form>
    </div>
  );
};

export default Submit;
