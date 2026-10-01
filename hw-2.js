// ДЗ-2

// Часть 1

const user = {
  name: "Amina",
  age: "20",
  city: "Astana",
};

const product = {
  productName: "House",
  price: "5000000",
  isAvailable: "in stock",
};

const user2 = {
  name: "Amina",
  age: "20",
  city: "Astana",
};
console.log(user2.name);
console.log(user2.age);

user2.age = 21;
console.log(user2.age);

((user2.country = "Kazakhstan"),
  (user2.isStudent = "true"),
  console.log(user2));

const product2 = {
  name: "Phone",
  price: 300000,
  color: "black",
};
console.log(`${product2.name} стоит ${product2.price}`);

product2.price = 250000;

//product2.pop ( );
// не работает. ИИ пишет что свойство рор для массивов, а не для обьектов

delete product2.color;

console.log(product2);

// Часть 2

const student = {
  name: "Dana",
  score: 80,
};
if (student.score >= 60) {
  console.log("Зачет");
} else {
  console.log("Не зачет");
}

const user3 = {
  name: "Aruzhan",
  age: 17,
};
if (user3.age >= 18) {
  console.log("Доступ разрешен");
} else {
  console.log("Доступ запрещен");
}

const book = {
  title: "History",
  author: "Ivanov",
  pages: 120,
  year: 2020,
};
console.log(book.title);
console.log(book.author);
console.log(book.pages);

const car = {
  brand: "Toyota",
  year: 2020,
};
car.color = "white";
car.year = 2022;

console.log(car);

// Часть 3

const likeProducts = ["coffee", "milk", "water"];
const numbers = [10, 20, 30, 40];
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);

const colorss = ["red", "green", "blue"];
console.log(colors[1]);
// выведется green

const numbersS = [5, 10, 15];
console.log(numbersS.length);
// выведется 3

const animals = ["cat", "dog", "rabbit"];

animals[1] = "fox";
animals.push("horse");
console.log(animals);
animals.pop();
animals.unshift("lion");
console.log(animals);
animals.shift();
console.log(animals);

// Часть 4

const usersM = [
  {
    name: "Suleiman",
    age: 10,
  },
  {
    name: "Ali",
    age: 7,
  },
  {
    name: "Usman",
    age: 4,
  },
];

const usersS = [
  { name: "Amina", age: 20 },
  { name: "Dana", age: 25 },
];
console.log(usersS[0]);
console.log(usersS[1].age);

const productsS = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Tablet", price: 200000 },
];

console.log(productsS[1].price);
productsS[0].price = 250000;

console.log(productsS);

// Часть 5

const fruitsS = ["apple", "banana", "orange"];

fruitsS.forEach((fruit) => {
  console.log(fruit);
});

const numbersM = [1, 2, 3, 4, 5];

numbersM.forEach((number) => {
  console.log(number);
});

const names = ["Amina", "Dana", "Aruzhan"];

names.forEach((name) => {
  console.log(`Привет, ${name}`);
});

const numbersS2 = [2, 4, 6];

numbersS2.forEach((number) => {
  console.log(number * 2);
});

const colorsS = ["red", "green", "blue"];

colorsS.forEach((color, index) => {
  console.log(`${index} ${color}`);
});

const numbersW = [10, 20, 30];

numbersW.forEach((number, index) => {
  if (index < 2) {
    console.log(number);
  }
});

const productsW = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Tablet", price: 200000 },
];

productsW.forEach((product) => {
  console.log(product.name);
});

productsW.forEach((product) => {
  console.log(`${product.name} - ${product.price}`);
});

// Часть 6

const numbersX = [1, 5, 10, 15, 20];

numbersX.forEach((number) => {
  if (index > 10) {
    console.log(number);
  }
});

const ages = [15, 18, 20, 16, 30];

ages.forEach((age) => {
  if (age >= 18) {
    console.log("Совершеннолетний");
  } else {
    console.log("Несовершеннолетний");
  }
});

const productsZ = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Tablet", price: 15000 },
];

productsZ.forEach((product) => {
  if (product.price > 100000) {
    console.log(product);
  }
});

const cards = ["card1", "card2", "card3", "card4"];

cards.forEach((card, index) => {
  if (index === 0 || index === 1) {
    console.log("Первая группа");
  } else {
    console.log("Вторая группа");
  }
});

// Часть 7

function sayHello() {
  console.log(`Hello`);
}

sayHello();

function showName(name) {
  console.log(`${name}`);
}

showName("Albina");

function sum(a, b) {
  console.log(a + b);
}

sum(2, 5);

function multiply(a, b) {
  return a * b;
}

multiply(2, 5);

function checkAge(age) {
  if (age >= 18) {
    console.log("Можно войти");
  } else {
    console.log("Нельзя войти");
  }
}

checkAge(20);

function greet(name) {
  console.log(`Привет, ${name}`);
}

greet("Suleiman");
greet("Ali");
greet("Usman");

// Часть 8

const numbersA = [1, 2, 3];

function showNumber(number) {
  console.log(`Число: ${number}`);
}
numbersA.forEach(showNumber);

const namesA = ["Amina,", "Dana", "Aruzhan"];

function greet(namesA) {
  console.log(`Привет, ${namesA}`);
}
namesA.forEach(greet);

// numbersA.forEach(showNumber) - здесь ссылка на написанную ранее функцию
// numbersA.forEach(showNumber()) - здесь в этом моменте сразу вызываем функцию

// Часть 9

const title = document.getElementById("title");

const button = document.getElementById("button");

const firstText = document.querySelector(".text");

const firstCard = document.querySelector(".card");

const allCards = document.querySelectorAll(".card");

const allTexts = document.getElementByClassName("text");

const titleQ = document.querySelector("#title");

const buttonQ = document.querySelector("#button");

//  Часть 10

const mainTitle = document.getElementById("main-title");
const mainTitleQ = document.querySelector("#main-title");

// document.getElementById("title") - находит только по id
// document.querySelector("#title") - находит по id с помощью "#", а по классу с помощью "."

// document.querySelector(".card") - выведет первую карточку из пяти
// использовать document.querySelectorAll(".card")
// querySelector - выводит первый элемент, querySelectorAll - выводит все элементы
// document.getElementByClassName ("item") - вернет 3 элемента div с классом item

// Часть 11

const cardds = document.querySelectorAll(".cardd");

cardds.forEach((cardd) => {
  console.log(cardd);
});

const cards70 = document.querySelectorAll(".card");

card70.forEach((card) => {
  console.log(card.textContent);
});

const cards71 = document.querySelectorAll(".card");

card71.forEach((card) => {
  console.log(card.classList.add("active"));
});

const cards72 = document.querySelectorAll(".card");

card72.forEach((card, index) => {
  if (index === 0 || index === 1) {
    card.classList.add("first");
  } else {
    card.classList.add("second");
  }
});

const cards73 = document.querySelectorAll(".card");

card73.forEach((card, index) => {
  if (index <= 5) {
    card.classList.add("main.cards");
  } else {
    card.classList.add("other.cards");
  }
});

// Код-ревью

// 74

const userrr = {
  name: "Amina",
  age: 20,
};

// 75 выйдет undefind, т.к. нет такого элемента [3], последний элемент [2]

// 76 выйдет undefind, т.к. нет такого элемента city

// 77 console.log(number)

// 78 querySelectorAll - так как forEach должен перебирать элементы, а querySelector выдает только один элемент

// 79 использовать querySelectorAll

// 80 надо убрать #

// 81 надо поставить .card

// 82 добавляется class first первым трем элементам [0], [1], [2], а остальным добавляется class second

// 83
const productsQ = document.querySelectorAll(".product");

productsQ.forEach((product, index) => {
  console.log(product.textContent);
  if (index === 0 || index === 1) {
    product.classList.add("product-first");
  } else {
    product.classList.add("product-second");
  }
});
// достаем из html все элементы с классом product, перебираем и первым двум элементам добавляем class first, остальным class second

// 84
const productsX = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];

productsX.forEach((product, index) => {
  console.log(product.name, product.price);
  if (product.price > 100000) {
    console.log(`Дорогой товар`);
  } else {
    console.log(`Бюджетный товар`);
  }
});
