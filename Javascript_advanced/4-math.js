#!/usr/bin/node

function divideBy(firstNumber) {
    function divider(secondNumber) {
        return secondNumber / firstNumber;
    }
    return divider;
}

function addBy(firstNumber){
    function b(secondNumber) {
        return firstNumber + secondNumber;
    }
    return  b;
}

const addBy100 = addBy(100);
const addBy1000 = addBy(1000);
const divideBy10 = divideBy(10);
const divideBy100 = divideBy(100);

console.log(addBy100(20));
console.log(divideBy10(20));
console.log(divideBy100(200));
console.log(addBy1000(20));