// ЧАСТЬ 1

const fruitsC = ["apple", "banana", "orange"];
fruitsC.forEach((fruit) => {
  console.log(fruit);
});

const numbersC = [2, 4, 6, 8];
numbersC.forEach((number) => {
  console.log(number * 2);
});

const namesC = ["Amina", "Dana", "Aruzhan"];
namesC.forEach((name) => {
  console.log(`Привет, ${name}`);
});

const colorsC = ["red", "green", "blue"];
colorsC.forEach((color, index) => {
  console.log(index, color);
});

const numbers1 = [10, 20, 30, 40, 50];
numbers1.forEach((number, index) => {
  if (index < 3) {
    console.log(number);
  }
});

const agesC = [15, 18, 20, 16, 30];
agesC.forEach((age) => {
  if (age < 18) {
    console.log("Несовершеннолетний");
  } else {
    console.log("Cовершеннолетний");
  }
});

const productsC = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];
productsC.forEach((product) => {
  console.log(`${product.name} - ${product.price}`);
});

const products1 = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];
products1.forEach((product) => {
  if (product.price > 100000) {
    console.log(product);
  }
});

// ЧАСТЬ 2

for (let i = 0; i <= 4; i++) {
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}

for (let i = 0; i <= 10; i += 2) {
  console.log(i);
}

for (let i = 5; i >= 1; i--) {
  console.log(i);
}

const fruits1 = ["apple", "banana", "orange"];
for (let i = 0; i < fruits1.length; i++) {
  console.log(fruits1);
}

const colors1 = ["red", "green", "blue"];
for (let i = 0; i < colors1.length; i++) {
  console.log(`${i} - ${colors1[i]}`);
}

const numbersAc = [10, 20, 30, 40];
let total = 0;
for (let i = 0; i < numbersAc.length; i++) {
  total += numbersAc[i];
}
console.log(total);

const numbersZ = [3, 15, 7, 20, 25, 2];
let count = 0;
for (let i = 0; i < numbersZ.length; i++) {
  if (numbersZ[i] > 10) {
    count++;
  }
}
console.log(count);

const productsA = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];
for (let i = 0; i < productsA.length; i++) {
  if (productsA[i].isAvailable === true) {
    console.log(productsA[i].name);
  }
}

const cardsC = document.querySelectorAll(".card");
for (let i = 0; i < cardsC.length; i++) {
  cardsC[i].classList.add("active");
  console.log(cardsC);
}

// ЧАСТЬ 3

// forEach - это самый простой способ
// for - здесь можно перебрать через один, контролируя индекс
// for - так же нужно взаимодейсьвовать с индексом
// forEach - простой способ перебрать и добавить к каждому элементу
// for - можно использовать break для досрочного прекращения работы

const numbersZz = [1, 2, 3];
for (let i = 0; i < numbersZz.length; i++) {
  console.log(numbersZz[i]);
}

const fruitsZz = ["apple", "banana", "orange"];
fruitsZz.forEach((fruit) => {
  console.log(fruit);
});

// ЧАСТЬ 4

let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}
// 0,1,2

let ii = 1;
while (ii < 6) {
  console.log(ii);
  ii++;
}

let iii = 5;
while (iii > 0) {
  console.log(iii);
  iii--;
}

let countZ = 0;
while (countZ < 5) {
  console.log(countZ);
  countZ++;
}

// ЧАСТЬ 5

// выйдет ошибка, т.к. const name внутри if
// все правильно
// 10
// 20
// 0,1,2; ошибка
// когда создаем переменную внутри блока -она работает только внутри этого блока, а когда в блоке мы изменяем внешнюю переменную-это будет работать
// Inside; Outside

// ЧАСТЬ 6

const numbersXx = [1, 2, 3, 4];
const numbersXx2 = numbersXx.map((number) => number * 2);
console.log(numbersXx2);

const users = [
  { name: "Amina", age: 20 },
  { name: "Dana", age: 25 },
  { name: "Aruzhan", age: 19 },
];
const namesS = users.map((user) => user.name);
console.log(namesS);

const productsD = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
];
const productsDd = productsD.map(
  (product) => `${product.name} - ${product.price}`,
);
console.log(productsDd);

const numbersV = [5, 10, 15];
const numbersVv = numbersV.map((number) => number + 10);
console.log(numbersVv);

const numbersSs = [1, 2, 3];
const result = numbersSs.map((number) => number * 2);
console.log(result);

// ЧАСТЬ 7

const numbersB = [5, 10, 15, 20, 3];
const filteredNumbersB = numbersB.filter((number) => {
  return number > 10;
});
console.log(filteredNumbersB);

const usersB = [
  { name: "Amina", age: 17 },
  { name: "Dana", age: 25 },
  { name: "Ali", age: 16 },
  { name: "Aruzhan", age: 20 },
];

const adultUsers = usersB.filter((user) => {
  return user.age >= 18;
});
console.log(adultUsers);

const productsB = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];

const availableProducts = productsB.filter((product) => {
  return product.isAvailable === true;
});
console.log(availableProducts);

const productsN = [
  { name: "Phone", price: 300000 },
  { name: "Laptop", price: 500000 },
  { name: "Mouse", price: 15000 },
];

// с map легче всего перебрать массив и сделать с каждым элементом что-то, сразу создавая новый массив, а фильтр перебирает и оставляет отфильтрованное по каким-то параметрам

// ЧАСТЬ 8

const numbersN = [5, 10, 15, 20, 25];
const numbersN10 = numbersN.filter((number) => {
  return number > 10;
});
const numbersNn = numbersN10.map((number) => number * 2);
console.log(numbersNn);

const productsM = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
  { name: "Mouse", isAvailable: true },
];
const productsMm = productsM.filter((product) => {
  return product.isAvailable === true;
});
const productsMmm = productsMm.map((product) => product.name);
console.log(productsMmm);

const usersM = [
  { name: "Amina", age: 17 },
  { name: "Dana", age: 25 },
  { name: "Ali", age: 16 },
  { name: "Aruzhan", age: 20 },
];
const adultUsersM = usersM.filter((user) => {
  return user.age >= 18;
});
const adultUsersMName = adultUsersM.map((user) => user.name);
console.log(adultUsersMName);

// ЧАСТЬ 9

const numbersQ = [1, 2, 3];
numbers.forEach((number) => {
  console.log(number);
});

const numbersQq = [1, 2, 3];
const resultQ = numbers.map((number) => {
  return number * 2;
});

// ошибка, так как const должен быть выше, не в { }

// i < numbers.length

// бесконечный цикл, нужно добавить счетчик i++

const productsQ = [
  { name: "Phone", isAvailable: true },
  { name: "Laptop", isAvailable: false },
];
const resultQq = productsQ.filter((product) => {
  return product.isAvailable === true;
});

// ЧАСТЬ 10

const productsW = [
  { name: "Phone", price: 300000, isAvailable: true },
  { name: "Laptop", price: 500000, isAvailable: false },
  { name: "Mouse", price: 15000, isAvailable: true },
  { name: "Tablet", price: 200000, isAvailable: true },
];

productsW.forEach((product) => {
  console.log(product.name);
});

for (let i = 0; i < productsW.length; i++) {
  console.log(`${productsW[i].name}, ${i}`);
}

const productsWw = productsW.filter((product) => {
  return product.isAvailable === true;
});
console.log(productsWw);

const productsWww = productsW.filter((product) => {
  return product.price > 100000;
});
console.log(productsWww);

const productsWwwW = productsW.map((product) => product.name);
console.log(productsWwwW);

const availableProd = productsW.filter(
  (product) => product.isAvailable === true,
);
const availableProdNames = availableProd.map((product) => {
  return product.name;
});
console.log(availableProdName);
