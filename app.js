let x, operator, y, result;
let equation = '';

function add (x, y) {
    return x + y;
}

function subtract (x, y) {
    return x - y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    return x / y;
}

function updateDisplay() {
    document.getElementById("log").innerHTML = equation;
};

document.getElementById("1").addEventListener('click', function (event) {
    equation += "1";
    updateDisplay();
});

document.getElementById("2").addEventListener('click', function (event) {
    equation += "2";
    updateDisplay();
});

document.getElementById("3").addEventListener('click', function (event) {
    equation += "3";
    updateDisplay();
});

document.getElementById("4").addEventListener('click', function (event) {
    equation += "4";
    updateDisplay();
});

document.getElementById("5").addEventListener('click', function (event) {
    equation += "5";
    updateDisplay();
});

document.getElementById("6").addEventListener('click', function (event) {
    equation += "6";
    updateDisplay();
});

document.getElementById("7").addEventListener('click', function (event) {
    equation += "7";
    updateDisplay();
});

document.getElementById("8").addEventListener('click', function (event) {
    equation += "8";
    updateDisplay();
});

document.getElementById("9").addEventListener('click', function (event) {
    equation += "9";
    updateDisplay();
});

document.getElementById("0").addEventListener('click', function (event) {
    equation += "0";
    updateDisplay();
});

document.getElementById("+").addEventListener('click', function (event) {
    equation += " + ";
    updateDisplay();
});

document.getElementById("-").addEventListener('click', function (event) {
    equation += " - ";
    updateDisplay();
});

document.getElementById("*").addEventListener('click', function (event) {
    equation += " * ";
    updateDisplay();
});

document.getElementById("/").addEventListener('click', function (event) {
    equation += " / ";
    updateDisplay();
});

document.getElementById("=").addEventListener('click', function (event) {
    equation += " = ";
    evaluate();
    updateDisplay();
});

document.getElementById("clear").addEventListener('click', function (event) {
    equation = "";
    updateDisplay();
});

function evaluate() {
    let values = equation.split(' ');
    x = parseInt(values[0]);
    operator = values[1];
    y = parseInt(values[2]);

    switch (operator) {
        case '+':
            result = add(x, y);
            break;
        case "-":
            result = subtract(x, y);
            break;
        case "*":
            result = multiply(x, y);
            break;
        case "/":
            result = divide(x, y);
            break;
    }

    equation += result;
    return;
}
