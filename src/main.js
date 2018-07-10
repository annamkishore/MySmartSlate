
let drawConfig = new DrawingConfig();
window.onload = () => {
    drawConfig.initCanvas();
    
    drawConfig.setBgColor(bgColorButton.value = "#666666");
    drawConfig.setFgColor(fgColorButton.value = "#ffffff");
}

window.onresize = () => {
    drawConfig.canvas.width = drawConfig.width = screen.width;
    drawConfig.canvas.height = drawConfig.height = screen.height;
    drawConfig.setBgColor(bgColorButton.value);
}
