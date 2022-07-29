let slw_buttons = document.getElementsByTagName('button');

function ripple(e) {

    // Setup
    var rect = this.getBoundingClientRect();
    let posX = rect.left;
    let posY = rect.top;
    let buttonWidth = this.offsetWidth;
    let buttonHeight = rect.bottom - rect.top;

    if (buttonHeight > 100) {
        return;
    }

    // Add the element
    let ripple = document.createElement('span');

    this.appendChild(ripple);


    // Make it round!
    if(buttonWidth >= buttonHeight) {
        buttonHeight = buttonWidth;
    } else {
        buttonWidth = buttonHeight;
    }

    // Get the center of the element
    var x = e.clientX - posX - buttonWidth / 2;
    var y = -buttonHeight / 2.5;


    ripple.style.width = `${buttonWidth}px`;
    ripple.style.height = `${buttonHeight}px`;
    ripple.style.top = `${y}px`;
    ripple.style.left = `${x}px`;

    ripple.classList.add('rippleAnimation');

    setTimeout(() => {
        this.removeChild(ripple);
    }, 1500);

}

for (let button of slw_buttons) {
    button.addEventListener('mousedown', ripple);
}

let xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200) {
        document.getElementById("users_count").innerText = (Math.floor((xmlHttp.responseText) / 100) * 100) + " online players";
    }
}
xmlHttp.open("GET", "https://www.salwyrr.com/players_count", true);
xmlHttp.send(null);