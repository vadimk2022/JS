const person = {
  name: `Vadim`,
  age: 28,
  city: `Kiev`,
  street: `Shevchenko`,
};

function getObjectProperties(obj) {
  for (let key in obj) {
    return true;
  }
  return false;
}

if (getObjectProperties(person) === false) {
  console.log(`У об'єкті відсутні властивості.`);
} else {
  console.log(`Об'єкт має властивості.`);
}

const calc = {
    numOne: 0,
    numTwo: 0,
    ask: function() {
      this.numOne = Number(prompt("Введіть перше число:"));
      this.numTwo = Number(prompt("Введіть друге число:"));
    },
  
    sum: function() {
      return this.numOne + this.numTwo;
    },
  
    mul: function() {
      return this.numOne * this.numTwo;
    },
  };
  
  calc.ask();
  const sum = calc.sum();
  const mul = calc.mul();
  
  alert("Сума чисел: " + sum + ". Добуток чисел: " + mul + "."); 