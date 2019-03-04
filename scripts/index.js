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
console.log(tipAmount(100, 'good'))

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

console.log(totalAmount(100,'good'))

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
console.log(splitAmount(100,'good',3))