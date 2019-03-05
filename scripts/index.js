logger.init()

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
        console.log(i)
    }
}
// printNumbers(1,10)

function printSquare(aNum){
    for (let i = 0; i < aNum; i++){
        let square = '*'
        console.log(square.repeat(aNum))
    }
}
// printSquare(10)

function printBox(w,h){
    star = "*"
    space = " "
    for (let i = 1; i <= h; i++) {
        if (i === 1){
            console.log(star.repeat(w))
        } else if (i > 1 && i != h){
            console.log(star + space.repeat(w - 2) + star)
        } else{
            console.log(star.repeat(w))
        }
    }
}
// printBox(6,10)


function printBanner(text) {
    star = "*"
    console.log(star.repeat(text.length + 4))
    console.log(`* ${text} *`)
    console.log(star.repeat(text.length + 4))
}
// printBanner("I AM THE ONE TRUE HEIR")

function factorFinder(aNum){
    results = []
    for (let i = 1; i <= aNum; i++){
        if (aNum % i === 0) {
            results.push(i)
        }
    }
    return results
}

// console.log(factorFinder(100))

function caeserCipher(phrase, offset){
    const cipher = "abcdefghijklmnopqrstuvwyxz ";
    let result = '';
    let index = 0;
    for (let i = 0; i < phrase.length; i++){
        index = cipher.indexOf(phrase[i])
        index += offset
        if (index > cipher.length){
            index += -cipher.length
        }
        result += cipher[index]
    }
    return result
}
// console.log(caeserCipher("hellooo vacuum kitties", 2))

function caeserDecipher(phrase, offset){
    const cipher = "abcdefghijklmnopqrstuvwyxz ";
    let result = '';
    let index = 0;
    for (let i = 0; i < phrase.length; i++){
        index = cipher.indexOf(phrase[i])
        index -= offset
        if (index < 0){
            index += cipher.length
        }
        result += cipher[index]
    }
    return result
}

// console.log(caeserDecipher("jgnnqqqbycewwobmkvvkgu", 2))

function leetSpeak(phrase){
    letter = ['A','E','G','I','O','S','T'];
    leet = ['4','3','6','1','0','5','7'];
    results = '';
    const upperPhrase = phrase.toUpperCase();
    for (let i = 0; i < upperPhrase.length; i++){
        myLetter = upperPhrase[i]
            if (letter.includes(myLetter)) {
                results += leet[letter.indexOf(myLetter)]
            } else{
                results += myLetter
            }
    }
    return results
}


// console.log(leetSpeak("THIS IS YOUR HEIR SPEAKING!"))

