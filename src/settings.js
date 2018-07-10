
// accessing main.js variables here
clearButton.onclick = () => {
    drawConfig.setBgColor(bgColorButton.value);
}

bgColorButton.onchange = () => {
    drawConfig.setBgColor(bgColorButton.value);
}

fgColorButton.onchange = () => {
    drawConfig.setFgColor(fgColorButton.value);
}
