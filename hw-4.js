// ЧАСТЬ 1

function sayHello() {
  console.log("Hello");
}
sayHello();

function greet(name) {
  console.log(`Привет, ${name}`);
}
greet("Suleiman");
greet("Ali");
greet("Usman");

function sum(a, b) {
  return a + b;
}
const sumResult = sum(5, 10);

const multiply = (a, b) => {
  return a * b;
};
multiply(2, 5);
console.log(multiply(2, 5));

function formatPrice(price) {
  return `${price} ₸`;
}
console.log(formatPrice(300000));

function checkAge(age) {
  if (age >= 18) {
    return "Доступ разрешен";
  }
  return "Доступ запрещен";
}
console.log(checkAge(15));

function greet(name = "Гость") {
  return `Привет, ${name}`;
}
console.log(greet());
console.log(greet("Amina"));

// параметр обязательно указывается в функции, и далее параметр принимает аргумент или разные аргументы

// ЧАСТЬ 2

function showMessage() {
  console.log("Hello");
}

const showMessage = function () {
  console.log("Hello");
};

const showMessage = () => {
  console.log("Hello");
};

function double(number) {
  return number * 2;
}

const double = (number) => number * 2;

// сработает, выведет Hello

// ошибка

function sum(a, b) {
  return a + b;
}
const result = sum(a, b);

const sum = function (a, b) {
  return a + b;
};

const sum = (a, b) => a + b;

// ЧАСТЬ 3

function sum(a, b) {
  console.log(a + b); // 5 - просто в консоли, так как нет ретерн
}
const resultt = sum(2, 3);
console.log(result); // ошибка

function sum(a, b) {
  return a + b;
}
const resulttt = sum(2, 3);

// Inside
// Outside

// consol.log (user) должен быть внутри функции

function createUser() {
  const user = {
    name: "Amina",
    age: 20,
  };
  return user;
}
const userInfo = createUser();
console.log(userInfo);

// ЧАСТЬ 4

// forEach перебирает функцию шоунамбер, а пустые скобки - это результат функции

const numbers = [1, 2, 3];
function showNumber(number) {
  console.log(number);
}
numbers.forEach(showNumber);

const products = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];

function showProductName(product) {
  console.log(product.name);
}
products.forEach(showProductName);

function isExpensive(product) {
  return product.price > 100000;
}
const expensiveProducts = products.filter(isExpensive);
console.log(expensiveProducts);

// ЧАСТЬ 5

const prices = [1000, 2000, 5000];

const users = [
  { name: "Amina", age: 17 },
  { name: "Dana", age: 25 },
  { name: "Ali", age: 16 },
  { name: "Aruzhan", age: 20 },
];
const filteredUsers = users.filter((user) => {
  return user.age >= 18;
});
console.log(filteredUsers);

const productsS = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
];
const availableProducts = productsS.filter((product) => {
  return product.isAvailable === true;
});
const nameAvProd = availableProducts.map((product) => product.name);
console.log(nameAvProd);

const resultT = productsS.filter((product) => {
  return product.price > 100000;
});
console.log(resultT);

const numbersSs = [1, 2, 3];
const resultTt = numbersSs.map((number) => {
  return number * 2;
});
console.log(resultTt);

// map преобразует исходный массив, что-то делая с каждым из его элементов, и создает новый массив из полученных значений, с теж же количеством элементов как и в исходном. А filter тоже создает новый массив, но только из тех элементов, которые отфильтруются по какому-лтбо признаку

// ЧАСТЬ 6

const showButton = document.querySelector(".show-button");
showButton.addEventListener("click", () => {
  console.log("Кнопка нажата");
});

function showMessage() {
  console.log("Кнопка нажата");
}
showButton.addEventListener("click", showMessage);

// showButton.addEventListener ("click", showMessage) здесь передаем ссылку на ф-ию, которая выполнится при клике- правильный вариант

// showButton.addEventListener ("click", showMessage()) здесь ф-ия выполняется немедленно

const colorButton = document.querySelector(".color-button");
colorButton.addEventListener("click", function () {
  colorButton.classList.toggle("active");
});

const title = document.querySelector(".title");
title.addEventListener("mouseenter", () => {
  console.log(title.textContent);
});

const titlee = document.querySelector(".title");
titlee.addEventListener("mouseleave", () => {
  console.log("Курсор ушел");
});

const nameInput = document.querySelector(".name-input");
nameInput.addEventListener("input", () => {
  console.log(nameInput.value);
});

nameInput.addEventListener("input", function (event) {
  console.log(event.target.value);
});

// ЧАСТЬ 7

// event -это событие, которое происходит при клике, содержит в себе инфо о произошедшем

const showButtonn = document.querySelector(".show-button");
showButtonn.addEventListener("click", function (event) {
  console.log(event.target);
});

const google = document.querySelector(".google-link");
google.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Переход отменен");
});

const form = document.querySelector(".form");
const emailInput = document.querySelector(".email-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("Форма отправлена");
  console.log(emailInput.value);
});

// ЧАСТЬ 8

const showButtonN = document.querySelector(".show-button");
const nameInputT = document.querySelector(".name-input");
function showInputValue() {
  console.log(nameInputT.value);
}
showButtonN.addEventListener("click", showInputValue);

const showButtonNN = document.querySelector(".show-button");
const nameInputTT = document.querySelector(".name-input");
function showInputValuee() {
  return nameInputTT.value;
}
showButtonNN.addEventListener("click", () => {
  const resultShowButton = showInputValuee();
  console.log(resultShowButton);
});

function isInputEmpty(value) {
  return value === "";
}
showButtonNN.addEventListener("click", () => {
  const value = nameInputTT.value;
  if (isInputEmpty(value)) {
    console.log("Введите имя");
  } else {
    console.log(value);
  }
});

const showButton48 = document.querySelector(".show-button");
function toggleButton(button) {
  button.classList.toggle("active");
}
showButtonNN.addEventListener("click", () => {
  toggleButton(showButton);
});

const cards = querySelectorAll(".cardd");
cards.forEach((cardd) => {
  cardd.addEventListener("click", () => {
    cards.forEach(function (cc) {
      cc.classList.remove("selected");
    });
    cardd.classList.add("selected");
  });
});

const cardds = querySelectorAll(".cardd");
cardds.forEach((cardd) => {
  cardd.addEventListener("click", function (event) {
    event.target.classList.add("selected");
  });
});

// ЧАСТЬ 9

const products9 = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];

const availableProducts9 = products9.filter((product) => {
  return product.isAvailable;
});
const namesAvProducts9 = availableProducts9.map((product) => {
  return product.name;
});
namesAvProducts9.forEach((name) => {
  console.log(name);
});

function getAvailableProductNames(products9) {
  return products9
    .filter((product) => product.isAvailable)
    .map((product) => product.name);
}
console.log(getAvailableProductNames(products9));

function getExpensiveProducts(products9, minPrice) {
  return products9.filter((product) => product.price > minPrice);
}
console.log(getExpensiveProducts(products9));

const expensiveButton = document.querySelector("button-expensive");
expensiveButton.addEventListener("click", () => {
  const result = getExpensiveProducts(products9, 100000);
  console.log(result);
});

const priceInput = document.querySelector(".price-input");
const filterButton = document.querySelector(".button-filter");
filterButton.addEventListener("click", () => {
  if (inputValue === "") {
    console.log("Ошибка ввода");
    return;
  }
  const minPrice = number(priceInput.value);
  const result = getExpensiveProducts(products, minPrice);
  console.log(result);
});

// ЧАСТЬ 10

// 57 button.addEventListener ("click", showMessage)

// 58 добавить return в {}

// 59 filter вместо map

// 60 ошибка, const внутри ф-ии и вызывается тоже внутри

// 61 console.log нужно ввести в самой функции, а не вне

// 62
const numbers62 = [1, 2, 3];
const doubled = numbers62.map((number) => {
  return number * 2;
});

// ЧАСТЬ 11

const products11 = [
  { name: "Iphone", price: 100000, isAvailable: true },
  { name: "Macbook", price: 150000, isAvailable: false },
  { name: "Airpods", price: 5000, isAvailable: true },
  { name: "Apple watch", price: 20000, isAvailable: true },
  { name: "Powerbank", price: 7000, isAvailable: false },
];

const inputElement = document.getElementById("minPrice11");
const buttonElement = document.getElementById("showButton11");

function getFilteredProducts(products11, minPrice) {
  const filteredProd = products11.filter((product) => {
    return product.isAvailable && product.price > minPrice;
  });
  return filteredProd.map((product) => product.name);
}

function handleShowClick() {
  const inputValue = inputElement.value;
  if (inputValue.trim() === "") {
    console.log("Введите минимальную цену");
    return;
  }
  const minPrice11 = Number(inputValue);
  const prodNames = getFilteredProd(products11, minPrice11);
  console.log(prodNames);
}

buttonElement.addEventListener("click", handleShowClick);
