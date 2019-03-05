logger.init();

// function hello(name='world') {
//     return `Hello, ${name}!`
// }
// console.log(hello('Mustache'));


// function madlib(name, subject){
//     return `${name}'s favorite activity is ${subject}!`
// }

// console.log(madlib("cat","running from vacuums"))


function tipAmount(bill, service){
    let tipResult = 0
    if(service === 'good'){
            return (bill * .2);
    } else if (service === 'fair'){
        return (bill * .15);
    } else if (service === 'bad'){
        return (bill * .1);
    }
}
// console.log(tipAmount(100, 'good'))

function totalAmount(bill, service){
    switch(service){
        case 'good':
            return bill + (bill * .2);
        case 'fair':
            return bill + (bill * .15);
        case 'bad':
            return bill + (bill * .1);
    }
}

// console.log(totalAmount(100,'good'))

function splitAmount(bill, service, split){
    switch(service){
        case 'good':
            return (bill + (bill * .2)) / split;
        case 'fair':
            return (bill + (bill * .15)) / split;
        case 'bad':
            return (bill + (bill * .1)) / split;
    }
}
// console.log(splitAmount(100,'good',2))

function printNumbers(a, b){
    for (let i = a; i <= b; i++) {
        console.log(i);
    }
}
// printNumbers(1,10)

function printSquare(aNum){
    for (let i = 0; i < aNum; i++){
        let square = '*';
        console.log(square.repeat(aNum));
    }
}
// printSquare(10)

function printBox(w,h){
    const star = "*";
    const space = " ";
    for (let i = 1; i <= h; i++) {
        if (i === 1){
            console.log(star.repeat(w));
        } else if (i > 1 && i != h){
            console.log(star + space.repeat(w - 2) + star);
        } else{
            console.log(star.repeat(w));
        }
    }
}
// printBox(6,10)


function printBanner(text) {
    const star = "*";
    console.log(star.repeat(text.length + 4));
    console.log(`* ${text} *`);
    console.log(star.repeat(text.length + 4));
}
// printBanner("I AM THE ONE TRUE HEIR")

function factorFinder(aNum){
    let results = [];
    for (let i = 1; i <= aNum; i++){
        if (aNum % i === 0) {
            results.push(i);
        }
    }
    return results;
}

// console.log(factorFinder(100))

function caeserCipher(phrase, offset){
    phrase = phrase.toLowerCase()
    const cipher = "abcdefghijklmnopqrstuvwyxz ";
    let result = '';
    let index = 0;
    for (let i = 0; i < phrase.length; i++){
        index = cipher.indexOf(phrase[i]);
        index += offset;
        if (index > cipher.length){
            index += -cipher.length;
        }
        result += cipher[index];
    }
    return result;
}
console.log(caeserCipher("hellooo vacuum kiTTies", 2))


function caeserDecipher(phrase, offset){
    const cipher = "abcdefghijklmnopqrstuvwyxz ";
    let result = '';
    let index = 0;
    for (let i = 0; i < phrase.length; i++){
        index = cipher.indexOf(phrase[i]);
        index -= offset;
        if (index < 0){
            index += cipher.length;
        }
        result += cipher[index];
    }
    return result;
}

// console.log(caeserDecipher("jgnnqqqbycewwobmkvvkgu", 2))

function leetSpeak(phrase){
    const letter = ['A','E','G','I','O','S','T'];
    const leet = ['4','3','6','1','0','5','7'];
    let results = '';
    const upperPhrase = phrase.toUpperCase();
    for (let i = 0; i < upperPhrase.length; i++){
        myLetter = upperPhrase[i];
            if (letter.includes(myLetter)) {
                results += leet[letter.indexOf(myLetter)];
            } else{
                results += myLetter;
            }
    }
    return results;
}


// console.log(leetSpeak("THIS IS YOUR HEIR SPEAKING!"))

function longVowel(myString){
    const vowel = ['A','E','I','O','U','a','e','i','o','u'];
    let results = '';
    for (let i = 0; i < myString.length; i++) {
        myLetters = myString[i] + myString[i + 1];
        myLetter = myString[i];
        vowel.forEach(function (myVowel){
            if (myVowel.repeat(2) === myLetters){
                results += myLetter.repeat(4);
            }
        })
        if (myLetter !== myString[i - 1]) {
            results += myLetter;
        }
    }
    return results;
}
// console.log(longVowel("I loove cheese!"))

function sumNumbers(nums){
    results = 0;
    nums.forEach(function (myNumber){
        results += myNumber;
    })
    return results;
}
// console.log(sumNumbers([1,2,3,4,5,6,7]))


const addNumbers = (a,b) => a + b;
// console.log([1,2,4,4,5,6].reduce(addNumbers))


const isPositive = (num) => num > 0;
// console.log([1,2,3,-4,-5,23,-4].filter(isPositive));

function rockPaperScissors(player1,player2) {
    const choice1 = player1.toLowerCase();
    const choice2 = player2.toLowerCase();
    if (choice1 === 'rock'){
        switch(choice2){
            case 'rock':
            return 'draw';
            case 'paper':
            return 'player2';
            case 'scissors':
            return 'player1';
        } 
    } else if (choice1 === 'scissors'){
        switch(choice2){
            case 'rock':
            return 'player2';
            case 'paper':
            return 'player1';
            case 'scissors':
            return 'draw';
        }
    } else if (choice1 === 'paper'){
        switch(choice2){
            case 'rock':
            return 'player1';
            case 'paper':
            return 'draw';
            case 'scissors':
            return 'player2';
        }
    }
}

// console.log(rockPaperScissors('rock','paper'))

function ticTacToe(myList){
    for (let i = 0; i < myList.length; i++) {
        if (myList[i][0] === myList[i][1] && myList[i][1] === myList[i][2]){
            return myList[i][0]
        } else if (myList[0][i] === myList[1][i] && myList[1][i] === myList[2][i]){
            return myList[0][i]
        }}
    if (myList[0][0] === myList[1][1] && myList[1][1] === myList[2][2]){
        return myList[0][0]
    } else if (myList[0][2] === myList[1][1] && myList[1][1] === myList[2][0]){
        return myList[0][2]
    }
    return null
}

// console.log(ticTacToe([
//     ['X', 'O', 'O'],
//     ['O', 'X', 'X'],
//     [null, 'X', 'X']
// ]))

function matrixMultiply(a, b){
    let aNumRows = a.length, aNumCols = a[0].length, bNumRows = b.length, bNumCols = b[0].length;
    result = new Array(aNumRows)
        for (let row = 0; row < aNumRows; row++){
            result[row] = new Array(bNumCols);
            for (let col = 0; col < bNumCols; col++){
                result[row][col] = 0;
                for (let i = 0; i <aNumCols; i++){
                    result[row][col] += a[row][i] * b[i][col];
                }
            }
        }
    return result
}


console.log(matrixMultiply([[2, 4], [3, 4]], [[5, 2], [3, 1]]))