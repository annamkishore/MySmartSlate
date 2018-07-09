
// accessing main.js variables here
clearButton.onclick = () => {
    drawConfig.erase();
}

bgColor.onchange = () => {
    drawConfig.setBgColor(bgColor.value);
}

fgColor.onchange = () => {
    drawConfig.setFgColor(fgColor.value);
}
