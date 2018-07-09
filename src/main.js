// uncomment below line for development
// require("file-loader?name=slate.html!./slate.html");

// ---Globals------------

class DrawingData {
    constructor() {
        this.canvas = null;
        this.ctx = null;

        this.prevX = 0;
        this.prevY = 0;
        this.currX = 0;
        this.currY = 0;

        this.width = 0;
        this.height = 0;

        this.strokeStyle = "green";
        this.lineWidth = 3;
    }

    initCanvas() {
        this.canvas = document.getElementById('canvasArea');
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = this.width = document.body.clientWidth;
        this.canvas.height = this.height = document.body.clientHeight;
    
        this.canvas.addEventListener("mousemove", e => this.findxy('move', e), false);
        this.canvas.addEventListener("mousedown", e => this.findxy('down', e), false);
        this.canvas.addEventListener("mouseup", e => this.findxy('up', e), false);
        this.canvas.addEventListener("mouseout", e => this.findxy('out', e), false);
    
        this.canvas.ontouchstart = e => this.ontouchstartEvent(e);
        this.canvas.ontouchmove = e => this.ontouchmoveEvent(e);
    }

    // mobile events - start
    ontouchstartEvent(event) {
        event.preventDefault();                 
        
        this.prevX = event.touches[0].clientX;
        this.prevY = event.touches[0].clientY;

        // console.log(`start ${prevX} ${prevY}`);
        this.dot(this.prevX, this.prevY);
    }

    ontouchmoveEvent(event) {
        event.preventDefault();                 

        this.currX = event.touches[0].clientX;
        this.currY = event.touches[0].clientY

        // console.log(`start ${currX} ${currY}`);
        this.draw();

        this.prevX = this.currX;
        this.prevY = this.currY;
    }

    dot() {
        this.ctx.beginPath();
        this.ctx.fillStyle = "#000000";
        this.ctx.arc(this.prevX, this.prevY, 1, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.closePath();
    }
    // mobile events - end

    draw() {
        this.ctx.beginPath();
        this.ctx.moveTo(this.prevX, this.prevY);
        this.ctx.lineTo(this.currX, this.currY);
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.lineWidth = this.lineWidth;
        this.ctx.stroke();
        this.ctx.closePath();
    }
    
    erase() {
        this.ctx.clearRect(0, 0, width, height);
        // document.getElementById("canvasimg").style.display = "none";
    }
    
    findxy(res, e) {
        if (res == 'down') {
            this.prevX = this.currX;
            this.prevY = this.currY;
            this.currX = e.clientX - this.canvas.offsetLeft;
            this.currY = e.clientY - this.canvas.offsetTop;
    
            flag = true;
            dot_flag = true;
            if (dot_flag) {
                this.ctx.beginPath();
                this.ctx.fillStyle = this.strokeStyle;
                this.ctx.fillRect(this.currX, this.currY, 2, 2);
                this.ctx.closePath();
                dot_flag = false;
            }
        }
        if (res == 'up' || res == "out") {
            flag = false;
        }
        if (res == 'move') {
            if (flag) {
                this.prevX = this.currX;
                this.prevY = this.currY;
                this.currX = e.clientX - this.canvas.offsetLeft;
                this.currY = e.clientY - this.canvas.offsetTop;
                this.draw();
            }
        }
    }
}

let drawConfig = new DrawingData();
let flag = false,
    dot_flag = false;

window.onload = drawConfig.initCanvas.bind(drawConfig);

window.onresize = () => {
    // canvas.width = window.innerWidth;
    // canvas.height = window.innerHeight;
}

function save() {
    document.getElementById("canvasimg").style.border = "2px solid";
    let dataURL = canvas.toDataURL();
    document.getElementById("canvasimg").src = dataURL;
    document.getElementById("canvasimg").style.display = "inline";
}
