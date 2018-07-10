
let drawConfig = new DrawingConfig();
window.onload = () => {
    drawConfig.initCanvas();
    
    drawConfig.setBgColor(bgColorButton.value = "#666666");
    drawConfig.setFgColor(fgColorButton.value = "#ffffff");
}

window.onresize = () => {
    drawConfig.canvas.width = drawConfig.width = window.innerWidth;
    drawConfig.canvas.height = drawConfig.height = window.innerHeight;
    drawConfig.setBgColor(bgColorButton.value);
}
