function cutgorithm() {
    var redWireOcc = 0, 
        bluWireOcc = 0,
        blaWireOcc = 0, 
        wires = ['One', 'Two', 'Three'];
        
    for(var i = 0; i < 3; i++) {
        var [a, b, c, color, returnBox] = pullVals(wires[i]), 
            cut = false;
        if(!a && !b && !c) continue;
        if(color === 'red')
            switch(redWireOcc) {
                case 0:
                    if(c)
                        cut = true;
                    break;
                case 1:
                    if(b)
                        cut = true;
                    break;
                case 2:
                    if(a)
                        cut = true;
                    break;
                case 3:
                    if(a || c)
                        cut = true;
                    break;
                case 4:
                    if(b)
                        cut = true;
                    break;
                case 5:
                    if(a || c)
                        cut = true;
                    break;
                case 6:
                    if(a || b || c)
                        cut = true;
                    break;
                case 7:
                    if(a || b)
                        cut = true;
                    break;
                case 8:
                    if(b)
                        cut = true;
            }
    }
}

function pullVals(str) {
    var a = document.getElementById('a' + str).checked,
        b = document.getElementById('b' + str).checked,
        c = document.getElementById('c' + str).checked,
        color = document.getElementById('color' + str).value.replace(/[^A-Za-z0-9]/g, '').toLowerCase(),
        returnBox = document.getElementById('returnP' + str);
        
    return [a, b, c, color, returnBox];
}