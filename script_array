const arr = [22, -4, -32, 31, 57, -96, 33, -20, 71, 80];
let sum = 0;
let numMin = arr[0];
let numMax = arr[0];
let i;
let hesh = ``;

for (i = 0; i < arr.length; i++) {
  if (isNaN(arr[i])) {
    alert(`Елемент масиву не є числом: >>> ${arr[i]}`);
  } else {
    sum += arr[i];
    if (arr[i] < numMin) {
      numMin = arr[i];
    }
    if (arr[i] > numMax) {
      numMax = arr[i];
    }
  }
}
alert(`Cума: ${sum};\nДовжина масиву: ${arr.length};\nМінімальне значення масиву: ${numMin};\nМаксимальне значення масиву: ${numMax};`);

for (i = 1; i <= 5; i++) {
  hesh += `#`.repeat(i) + `\n`;
}
alert(hesh);
