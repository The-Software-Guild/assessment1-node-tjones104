import { useEffect } from "react";

const Mousemove = () => {
  useEffect(() => {
    // When mousing over red box show coordinates
    document.getElementsByClassName("red-box")[0].onmousemove = function (
      event
    ) {
      var x = event.clientX;
      var y = event.clientY;
      var coords = "Coordinates: X: " + x + ", Y: " + y;
      document.getElementsByClassName("red-box")[0].textContent = coords;
    };
  });
  return (
    <div>
      <h1>x and y</h1>
      <h3>move your mouse in the box to see the coordinates of your mouse</h3>
      <div class="red-box"></div>
    </div>
  );
};

export default Mousemove;
