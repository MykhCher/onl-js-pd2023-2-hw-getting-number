'use strict';

function reverseString(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}

function showOperations(number) {
    let order = '';
    let operationsCount = 0;
    function showOperationsOrder(number){
        if (number % 3 == 0 && number !== 6) { 
            // шістку слід розглядати як (1+5), але так як шість ділиться на три 
            // без залишку, то програма перш за все виконує 6/3, що призводить до небажаного результату.
            order += ')3*';
            operationsCount += 1;
            return showOperationsOrder(number / 3);
        } else if (number < 5 && number !== 1) {
            return null;
        } else if (number === 1) {
            let brackets = '';
            for (let i = operationsCount; i > 0; i--) {
                brackets += '('
            }
            order += ('1' + brackets);
            return order;
        } else {
            order += ')5+';
            operationsCount += 1;
            return showOperationsOrder(number-5);
        }
    }
    let result = showOperationsOrder(number)
    if (result === null) {
        return null;
    } else {
        let newOrder = reverseString(result);
        return `${number} = ${newOrder}`;
    }
}

console.log(showOperations(18))
console.log(showOperations(13))
console.log(showOperations(33))
console.log(showOperations(102))