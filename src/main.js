
let drawConfig = new DrawingConfig();
window.onload = () => {
    drawConfig.initCanvas();
    
    drawConfig.setBgColor(bgColorButton.value = "#666666");
    drawConfig.setFgColor(fgColorButton.value = "#ffffff");
}
