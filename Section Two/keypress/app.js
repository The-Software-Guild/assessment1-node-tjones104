/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

/* event.which and event.keyCode are both deprecated in favor of event.key 
it seems for situations where you want the key pressed and not for situations 
where you want the key code. For our task, we want the key code so event.which and event.keyCode work perfectly */

// On key press down, change text content to key pressed and key code
document.onkeydown = function(event) {
    let pressedKey = event.key;
    document.getElementById('output').textContent ='Key Pressed: ' + pressedKey + ' ----- Key Code: ' + event.which;
};