function cutgorithm(str) {
    var redBool = document.getElementById('redColor' + str).checked ? 2 : 1,
        blueBool = document.getElementById('blueColor' + str).checked ? 3 : 1,
        starBool = document.getElementById('starred' + str).checked ? 7 : 1,
        ledBool = document.getElementById('led' + str).checked ? 11 : 1,
        returnBox = document.getElementById('returnP' + str),
        counter;
        
    counter = redBool * blueBool * starBool * ledBool;
    
    /*
    if (redBool) {
        counter *= 2;
    }
    if (blueBool) {
        counter *= 3;
    }
    if (starBool) {
        counter *= 7;
    }
    if (ledBool) {
        counter *= 11;
    }
    */
    
    var cArray = [1, 7, 14],
        dArray = [11, 21, 462],
        sArray = [2, 3, 6, 66],
        pArray = [231, 33, 42],
        bArray = [77, 22, 154];
    
    if(cArray.indexOf(counter) !== -1) {
        returnBox.innerHTML = 'Cut';
    } else if(dArray.indexOf(counter) !== -1) {
        returnBox.innerHTML = 'Do not cut';
    } else if(sArray.indexOf(counter) !== -1) {
        returnBox.innerHTML = 'Cut if serial even';
    } else if(pArray.indexOf(counter) !== -1) {
        returnBox.innerHTML = 'Cut if parallel port';
    } else if(bArray.indexOf(counter) !== -1) {
        returnBox.innerHTML = 'Cut if 2+ batteries';
    }
}