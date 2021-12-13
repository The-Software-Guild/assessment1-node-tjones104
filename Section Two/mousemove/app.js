// When mousing over red box show coordinates
document.getElementsByClassName("red-box")[0].onmousemove = function(event)
{
    var x = event.clientX;
    var y = event.clientY;
    var coords = "Coordinates: X: " + x + ", Y: " + y;
    document.getElementsByClassName("red-box")[0].textContent = coords;
}