alert(" Привіт. Введи підряд два любих числа!");

let numOne = prompt("Введи первое число!", [0]);
let numTwo = prompt("Введи второе число!", [0]);

numOne = Number(numOne);
numTwo = Number(numTwo);
let sum = numOne + numTwo;
let difference = numOne - numTwo;
let multiply = numOne * numTwo;
let quotient = numOne / numTwo;
alert(`Сума: ${sum}` + `\nРізниця: ${difference}` + `\nДодаток: ${multiply}` + `\nДілення: ${quotient}`);
