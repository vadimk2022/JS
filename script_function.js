let a;
let b;
let s;
let d;
let m;
let q;

a = prompt("Введіть перше число:");
b = prompt("Введіть друге число:");

a = Number(a);
b = Number(b);

function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Аргумент не є числом !";
  }
  return a + b;
}
s = sum(a, b);

function difference(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Аргумент не є числом !";
  }
  return a - b;
}
d = difference(a, b);

function multiply(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Аргумент не є числом !";
  }
  return a * b;
}
m = multiply(a, b);

function quotient(a, b) {
  if (isNaN(a) || isNaN(b)) {
    return "Аргумент не є числом !";
  }
  return a / b;
}
q = quotient(a, b);

alert(`Сума: ${s}` + `\nРізниця: ${d}` + `\nДодаток: ${m}` + `\nДілення: ${q}`);

const arr = [22, -4, -32, 31, 57, -96, 33, -20, 71, 80];
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
let [min, max] = minMax(arr);
alert(`Min: ${min}, Max: ${max}`);
