function howtopress() {
    var color = document.getElementById('colorBox').value,
        text = document.getElementById('textBox').value,
        batteries = document.getElementById('bBox').value,
        car = document.getElementById('carBox').checked,
        frk = document.getElementById('frkBox').checked,
        returnBox = document.getElementById('returnP'),
        holdText = '<strong>Hold the button</strong><br><br>White -> 1<br>Blue -> 4<br>Yellow -> 5<br> Anything else -> 1',
        tapText = '<strong>Tap the button</strong>';
        
    if (color === 'blue' && text === 'abort') {
        returnBox.innerHTML = holdText;
    } else if (batteries > 1 && text ==='detonate') {
        returnBox.innerHTML = tapText;
    } else if (color === 'white' && car) {
        returnBox.innerHTML = holdText;
    } else if (batteries > 2 && frk) {
        returnBox.innerHTML = tapText;
    } else if (color === 'yellow' ) {
        returnBox.innerHTML = holdText;
    } else if (color === 'red' && text === 'hold') {
        returnBox.innerHTML = tapText;
    } else {
        returnBox.innerHTML = holdText;
    }
}