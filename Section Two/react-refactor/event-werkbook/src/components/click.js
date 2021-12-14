import { useEffect } from "react";

const Click = () => {
  useEffect(() => {
    document.getElementsByClassName("red-box")[0].onclick = function () {
      document.getElementsByClassName("red-box")[0].style.display = "none";
    };
  });

  return (
    <div>
      <h1>Disapearing Box</h1>
      <h3>Click the Box, I dare you</h3>
      <div class="red-box" id="red"></div>
    </div>
  );
};

export default Click;
