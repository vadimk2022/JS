alert(" Привіт. Введи підряд два любих числа!");

let numOne = prompt("Введи первое число!");
let numTwo = prompt("Введи второе число!");

if (numOne !== `` && numTwo !== `` && numOne !== ` ` && numTwo !== ` `) {
  numOne = Number(numOne);
  numTwo = Number(numTwo);
  let sum = numOne + numTwo;
  let difference = numOne - numTwo;
  let multiply = numOne * numTwo;
  let quotient = numOne / numTwo;

  if (numTwo == 0) {
    quotient = `Ділення на нуль!`;
  }
  if (numOne < numTwo) {
    let rezus;
    rezus = confirm(`Ви впевненні що хочете продовжити операцію`);
    if (rezus == true) {
      alert(`Різниця: ${difference}`);
    }
  }
  alert(`Сума: ${sum}` + `\nРізниця: ${difference}` + `\nДодаток: ${multiply}` + `\nДілення: ${quotient}`);
} else {
  alert("Помилка");
}
