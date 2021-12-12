/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

document.onkeydown = function(event) {
    let pressedKey = event.key || '';
    document.getElementById('output').textContent ='Key Pressed: ' + pressedKey + ' ----- Key Code: ' + event.which || '';
};