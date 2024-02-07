//LOS EJEMPLOS SON TOMADOS DE CHATGPT y MDN web docs

// Metodo concat ""

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const newArray = array1.concat(array2);
console.log(newArray); // Output: [1, 2, 3, 4, 5, 6]

//Metodo copyWithin

const array = [1, 2, 3, 4, 5];
array.copyWithin(0, 3, 5);
console.log(array); // Output: [4, 5, 3, 4, 5]

//

const array3 = ['a', 'b', 'c'];
const iterator = array3.entries();
for (const [index, value] of iterator) {
  console.log(index, value);
}
// Output:
// 0 a
// 1 b
// 2 c


