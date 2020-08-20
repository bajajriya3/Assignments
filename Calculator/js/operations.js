var number = null;
var lastOperation;

function clearAll() {
    document.getElementById("result").value = "";
    number = null;
}

function add() {
    var n = parseInt(document.getElementById("result").value);

    if (number == null)
        number = n;
    else {
        performLastOperation(n);
    }

    document.getElementById("result").value = "";
    lastOperation = '+';
    console.log('result: ', number);
}

function subtract() {
    var n = parseInt(document.getElementById("result").value);

    if (number == null)
        number = n;
    else {
        performLastOperation(n);
    }

    document.getElementById("result").value = "";
    lastOperation = '-';
    console.log('result: ', number);
}

function multiply() {
    var n = parseInt(document.getElementById("result").value);

    if (number == null)
        number = n;
    else {
        performLastOperation(n);
    }

    document.getElementById("result").value = "";
    lastOperation = '*';
    console.log('result: ', number);
}

function divide() {
    var n = parseInt(document.getElementById("result").value);

    if (number == null)
        number = n;
    else {
        performLastOperation(n);
    }

    document.getElementById("result").value = "";
    lastOperation = '/';
    console.log('result: ', number);
}

function displayResult() {
    var n = parseInt(document.getElementById("result").value);
    performLastOperation(n);

    lastOperation = '=';
    document.getElementById("result").value = number.toString();
}

function performLastOperation(n) {
    switch (lastOperation) {
        case '+': number += n;
            break;
        case '-': number -= n;
            break;
        case '*': number *= n;
            break;
        case '/': number /= n;
            break;
    }
}