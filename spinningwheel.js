
// Wheel function
function rotateFunction(){
    var min = 1034;
    var max = 9999;
    var deg = Math.floor(Math.random() * (max - min)) + min;
    document.getElementById('box').style.transform = "rotate(" + deg + "deg)";
    var element = document.getElementById('mainbox');
    element.classList.remove('animate');
    setTimeout(function(){
        element.classList.add('animate');
    }, 5000);
}

// Timer and textbox readOnly function
let interval = "null";
let i = 60;
const p = document.getElementById("textarea");

function onTimer() {
    document.getElementById("display").innerHTML = i;
    i--;

    if (i < 0) {
        p.readOnly = true;
        document.getElementById("startStop").innerHTML = "START";
        window.clearInterval(interval);
        i = 60;
    }
}

function start(){
    if (interval == "null") {
        document.getElementById("startStop").innerHTML = "PAUSE";
        interval = window.setInterval(onTimer, 1000);
    } else {
        document.getElementById("startStop").innerHTML = "START";
        window.clearInterval(interval);
        interval = "null";
    }
}

function reSet(){
    window.clearInterval(interval);
    i = 60;
    document.getElementById("display").innerHTML = "00";
    document.getElementById("startStop").innerHTML = "START";
    document.getElementById("textarea").value = "";
    p.readOnly = false;
}
