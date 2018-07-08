// uncomment below line for development
// require("file-loader?name=slate.html!./slate.html");

// ---Globals------------

let canvas, ctx, flag = false,
    prevX = 0,
    currX = 0,
    prevY = 0,
    currY = 0,
    dot_flag = false;

let x = "green",
    y = 3;

function init() {
    canvas = document.getElementById('canvasArea');
    ctx = canvas.getContext("2d");
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight;

    canvas.addEventListener("mousemove", e => findxy('move', e), false);
    canvas.addEventListener("mousedown", e => findxy('down', e), false);
    canvas.addEventListener("mouseup", e => findxy('up', e), false);
    canvas.addEventListener("mouseout", e => findxy('out', e), false);

    canvas.ontouchstart = ontouchstartEvent;
    canvas.ontouchmove = ontouchmoveEvent;
}

// mobile events - start
function ontouchstartEvent(event) {                   
    event.preventDefault();                 
    
    prevX = event.touches[0].clientX;
    prevY = event.touches[0].clientY;

    console.log(`start ${prevX} ${prevY}`);
    dot(prevX, prevY);
}

function ontouchmoveEvent(event) {
    event.preventDefault();                 

    currX = event.touches[0].clientX;
    currY = event.touches[0].clientY

    console.log(`start ${currX} ${currY}`);
    draw();

    prevX = currX;
    prevY = currY;
}

function dot() {
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.arc(prevX, prevY, 1, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();
}
// mobile events - end

function draw() {
    ctx.beginPath();
    ctx.moveTo(prevX, prevY);
    ctx.lineTo(currX, currY);
    ctx.strokeStyle = x;
    ctx.lineWidth = y;
    ctx.stroke();
    ctx.closePath();
}

function erase() {
    let m = confirm("Want to clear");
    if (m) {
        ctx.clearRect(0, 0, w, h);
        document.getElementById("canvasimg").style.display = "none";
    }
}

function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    let dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}

function findxy(res, e) {
    if (res == 'down') {
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;

        flag = true;
        dot_flag = true;
        if (dot_flag) {
            ctx.beginPath();
            ctx.fillStyle = x;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            dot_flag = false;
        }
    }
    if (res == 'up' || res == "out") {
        flag = false;
    }
    if (res == 'move') {
        if (flag) {
            prevX = currX;
            prevY = currY;
            currX = e.clientX - canvas.offsetLeft;
            currY = e.clientY - canvas.offsetTop;
            draw();
        }
    }
}

window.onload = init;

window.onresize = () => {
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
}

