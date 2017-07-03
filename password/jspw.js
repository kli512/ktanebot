var words = [['about','every','large','plant','spell','these','where'
            ,'after','first','learn','point','still','thing','which'
            ,'again','found','never','right','study','think','world'
            ,'below','great','other','small','their','three','would'
            ,'could','house','place','sound','there','water','write'],[],[],[],[],[]],
    returnBox = document.getElementById('returnP'),
    parsedWords = [[[]],[],[],[],[],[]],
    returnVal;
    
for(var i = 0; i < words[0].length; i++) {
    parsedWords[0].push(words[0][i].split(''));
}
parsedWords[0].splice(0,1);

function checkColumn(val, col, array) {
    var possibilities = [],
        possibilitiesParsed = [];
    for (var i = 0; i < array.length; i++) {
        //document.getElementById('test').innerHTML = array[i][col] + " and " + val;
        if (val === array[i][col]) {
            (words[col + 1]).push(words[col][i]);
            (parsedWords[col + 1]).push(parsedWords[col][i]);
            //possibilities.push(words[col][i]);
            //possibilitiesParsed.push(parsedWords[col][i]);
        }
    }
    
    /*
    for (var c = 0; c < possibilities.length; c++) {
        words[col + 1].push(possibilities[c]);
    }
    
    for (c = 0; c <possibilitiesParsed.length; c++) {
        parsedWords[col + 1].push(possibilitiesParsed[c]);
    }
    */
    
    /*
    document.getElementById('test').innerHTML = words.length + " and " + words[words.length-1];
    words.push(possibilities);
    returnBox.innerHTML = words.length + " and " + words[words.length-1];
    parsedWords.push(possibilitiesParsed);
    */
}

function aletteratatime(letterIndex) {
    words[letterIndex + 1] = [];
    var letters = document.getElementById('l' + letterIndex.toString()).value.split(',');

    //document.getElementById('test').innerHTML = letters;
    //return;

    for (var i = 0; i < letters.length; i++) {
        checkColumn(letters[i], letterIndex, parsedWords[letterIndex]);
    }
    
    returnBox.innerHTML = words[letterIndex + 1];
    
    /*for (var c = 6; c >0; c--) {
        if (words[c] !== undefined && words[c].length !== 0) {
            returnBox.innerHTML = words[c];
            return;
        }
    }*/
}

function button() {
    words = [['about','every','large','plant','spell','these','where'
            ,'after','first','learn','point','still','thing','which'
            ,'again','found','never','right','study','think','world'
            ,'below','great','other','small','their','three','would'
            ,'could','house','place','sound','there','water','write'],[],[],[],[],[]],
    returnBox = document.getElementById('returnP'),
    parsedWords = [[[]],[],[],[],[],[]],
    returnVal;
    
    for(var i = 0; i < words[0].length; i++) {
        parsedWords[0].push(words[0][i].split(''));
    }
    parsedWords[0].splice(0,1);
    /*for (var i = 0; i < 5; i++) {
        document.getElementById('test') = document.getElementById('l' + i.toString());
    }*/
    
    for (var i = 0; document.getElementById('l' + i.toString()).value !== ''; i++) {
        aletteratatime(i);
    }
}