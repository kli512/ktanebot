function cut(wire) {
    document.getElementById('returnP').innerHTML = 'cut ' + wire;
}

function nOfDuplicates(searchTerm, testingArray) {
    var c = 0,
        arrayIndex = testingArray.indexOf(searchTerm);
    while (arrayIndex !== -1) {
        c++;
        testingArray.splice(arrayIndex, 1);
        arrayIndex = testingArray.indexOf(searchTerm);
    }
    return c;
}

function sWires() {
    var i,
        serialNum = document.getElementById('serialBox').value,
        serialLast = parseInt(serialNum.substr(serialNum.length - 1), 10),
        parsedArray = [],
        lastWire,
        baseArray = [
            document.getElementById('wone').value,
            document.getElementById('wtwo').value,
            document.getElementById('wthree').value,
            document.getElementById('wfour').value,
            document.getElementById('wfive').value,
            document.getElementById('wsix').value
        ];
    
    for (i = 0; i < baseArray.length; i++) {
        if (baseArray[i] !== '') {
            parsedArray.push(baseArray[i]);
        }
    }
    
    lastWire = parsedArray[parsedArray.length - 1];
    
    if (parsedArray.length === 3) {
        if (parsedArray.indexOf('red') === -1) {
            cut('second wire');
        } else if (lastWire === 'white') {
            cut('last wire');
        } else if (nOfDuplicates('blue', parsedArray) > 1) {
            cut('last blue wire');
        } else {
            cut('last wire');
        }
    } else if (parsedArray.length === 4) {
        if (nOfDuplicates('red', parsedArray) > 1 && serialLast % 2 === 1) {
            cut('last red wire');
        } else if (lastWire === 'yellow' && parsedArray.indexOf('red') === -1) {
            cut('first wire');
        } else if (nOfDuplicates('blue', parsedArray) === 1) {
            cut('first wire');
        } else if (nOfDuplicates('yellow', parsedArray) > 1) {
            cut('last wire');
        } else {
            cut('second wire');
        }
    } else if (parsedArray.length === 5) {
        if (lastWire === 'black' && serialLast % 2 === 1) {
            cut('fourth wire');
        } else if (nOfDuplicates('red', parsedArray) === 1 && nOfDuplicates('yellow', parsedArray) > 1) {
            cut('first wire');
        } else if (parsedArray.indexOf('black') === -1) {
            cut('second wire');
        } else {
            cut('first wire');
        }
    } else {
        if (parsedArray.indexOf('yellow') === -1 && serialLast % 2 === 1) {
            cut('third wire');
        } else if (nOfDuplicates('yellow', parsedArray) === 1 && nOfDuplicates('white', parsedArray) > 1) {
            cut('fourth wire');
        } else if (parsedArray.indexOf('red') === -1) {
            cut('last wire');
        } else {
            cut('fourth wire');
        }
    }
}