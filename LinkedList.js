//LOS EJEMPLOS SON TOMADOS DE CHATGPT y MDN web docs

// Metodo concat ""

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Salida: [1, 2, 3, 4, 5, 6]

//Metodo copyWithin

const array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3, 5);
console.log(array); // Salida: [4, 5, 3, 4, 5]

//Metodo entries()

const array3 = ['a', 'b', 'c'];
const iterator = array3.entries();
for (const [index, value] of iterator) {
  console.log(index, value);
}
// Salida:
// 0 a
// 1 b
// 2 c

// Metodo every()

const array4 = [1, 2, 3, 4, 5];
const allEven = array4.every(num => num % 2 === 0);
console.log(allEven); // Salida: false

// Metodo full()

const array5 = [1, 2, 3, 4, 5];
array5.fill(0);
console.log(array5); // Salida: [0, 0, 0, 0, 0]


// Meotodo filter()

const array6 = [1, 2, 3, 4, 5];
const filteredArray = array6.filter(num => num % 2 === 0);
console.log(filteredArray); // Salida: [2, 4]

// Metodo  find()

const array7 = [1, 2, 3, 4, 5];
const found = array7.find(num => num > 3);
console.log(found); // Salida: 4

//Metodo findIndex()

const array8 = [1, 2, 3, 4, 5];
const foundIndex = array8.findIndex(num => num > 3);
console.log(foundIndex); // Salida: 3

//Metodo Flat()

const array9 = [1, 2, [3, 4], [5, [6]]];
const flatArray = array9.flat(2);
console.log(flatArray); // Salida: [1, 2, 3, 4, 5, 6]

//Metodo flatMap()

const array10 = [1, 2, 3];
const flatmapArray = array10.flatMap(num => [num * 2]);
console.log(flatmapArray); // Salida: [2, 4, 6]

//Metodo Foreach(El mas god)

const array12 = [1, 2, 3];
array12.forEach(num => console.log(num * 2));
// Salida:
// 2
// 4
// 6

//Metodo includes()

const array13 = [1, 2, 3, 4, 5];
const hasThree = array13.includes(3);
console.log(hasThree); // Salida: true

//Metodo indexof()

const array14 = [1, 2, 3, 4, 5];
const index = array14.indexOf(3);
console.log(index); // Salida: 2

// Metodo join()

const array15= ['Hello', 'world', '!'];
const joinedString = array15.join(' ');
console.log(joinedString); // Salida: Hello world !

//MEtodo key()

const array16 = ['a', 'b', 'c'];
const iterator3 = array16.keys();
for (const key of iterator3) {
  console.log(key);
}
// Salida:
// 0
// 1
// 2


//Metodo lastIndexOf()

const array17 = [1, 2, 3, 4, 5, 2];
const lastIndex = array17.lastIndexOf(2);
console.log(lastIndex); // Salida: 5

//Metodo Map

const array18= [1, 2, 3];
const mappedArray = array18.map(num => num * 2);
console.log(mappedArray); // Salida: [2, 4, 6]

//Metodo pop

const array19 = [1, 2, 3];
const pop = array19.pop();
console.log(pop); // Salida: 3
console.log(array19); // Salida: [1, 2]

//Metodo push()
const array20 = [1, 2, 3];
const newLength = array20.push(4, 5);
console.log(newLength); // Salida: 5
console.log(array20); // Salida: [1, 2, 3, 4, 5]

//Meotdo reduce
const array21 = [1, 2, 3, 4, 5];
const sum = array21.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Salida: 15