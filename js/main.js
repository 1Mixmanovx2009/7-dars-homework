// ------------------1-rasim--------------


// --------------------1-misol---------------

// let person = {
//     name: "Abdulloh",
//     age: 19,
//     interest: "game",
//     hobby: "sleep",
//     number: "+998944683325",
//     username: "AU"
// };

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log(`${key} - ${person[key]}`);
//     }
// }


// ----------------------2-misol------------------

// const person1 = {
//     name: "Abdulloh",
//     age: 19
// };

// const person2 = {
//     hobby: "Volleybol",
//     interest: "Sleep"
// };

// const combinedPerson = Object.assign({}, person1, person2);

// console.log(combinedPerson);


// --------------------3-masala------------------

// const numbers = [1, 2, 3, 4, 5];

// const lastValue = numbers[numbers.length - 1];

// const newValue = lastValue + 1;

// numbers.push(newValue);

// console.log(numbers); 


// --------------------4-misol------------------------

// function processArray(arr) {
//     if (arr.length === 0) {
//         return arr;
//     }

//     const sum = arr.reduce((acc, value) => acc + value, 0);

//     const firstValue = arr[0];

//     if (firstValue % 2 === 0) {
//         arr.unshift(sum);
//     } 
//     else {
//         arr.push(sum);
//     }

//     return arr;
// }
// // Arrayning boshidagi son toq bolsa
// const numbers = [3, 4, 5, 6];
// const processedNumbers = processArray(numbers);

// console.log(processedNumbers); 

// // Arrayning boshidagi son juft bolsa
// const numbers2 = [4, 5, 6, 7]; 
// const processedNumbers2 = processArray(numbers2);

// console.log(processedNumbers2);


// -------------------5-misol-----------------

// function swapFirstAndLast(arr) {
//     if (arr.length < 2) {
//         console.log('Massivda kamida ikkita element bo\'lishi kerak.');
//         return arr;
//     }

//     const firstElement = arr[0];
//     const lastElement = arr[arr.length - 1];

//     arr[0] = lastElement;
//     arr[arr.length - 1] = firstElement;

//     return arr;
// }

// const numbers = [1, 2, 3, 4, 5];
// const swappedNumbers = swapFirstAndLast(numbers);

// console.log(swappedNumbers); 


// -----------------------6-misol-----------------

// function getWordsFromUser(wordsArray = [], count = 6) {
//     if (wordsArray.length === count) {
//         return wordsArray;
//     }

//     const word = prompt(`Yozing ${wordsArray.length + 1}-chi so'z:`);

//     wordsArray.push(word);

//     return getWordsFromUser(wordsArray, count);
// }

// const wordsArray = getWordsFromUser();

// console.log(wordsArray); 


// ------------------7-misol--------------

// function askForValues(arr = [], maxValues = 3) {
//     if (arr.length >= maxValues) {
//         return arr;
//     }

//     const userInput = prompt(`Massivga ${maxValues - arr.length} ta qiymat qo'shing:`);

//     arr.push(userInput);

//     return askForValues(arr, maxValues);
// }

// const valuesArray = askForValues();

// console.log('Kiritilgan qiymatlar:');
// valuesArray.forEach((value, index) => {
//     console.log(`Qiymat ${index + 1}: ${value}`);
// });



// ---------------------2-rasim-------------------


// ---------------1-misol---------------

// function addToArray() {
//     const newArray = [];

//     const userInput = prompt("Iltimos, string kiriting:");

//     newArray.push(userInput);

//     return newArray;
// }

// const resultArray = addToArray();

// console.log(resultArray);


// ------------------2-misol---------------

// function addCommonValuesToFront(array1, array2) {
//     const commonValues = array1.filter(value => array2.includes(value));

//     if (commonValues.length > 0) {
//         array1.unshift(...commonValues);
//         array2.unshift(...commonValues);
//     }

//     return { array1, array2 };
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [4, 5, 6, 7, 8];

// const result = addCommonValuesToFront(array1, array2);

// console.log('Array 1:', result.array1);
// console.log('Array 2:', result.array2);


// --------------------3-misol-----------------

// let obj = {
//     name: "John",
//     age: "30",
//     jop: "Mehanic",
//     study: "none",
//     travel: "US"
// };

// const keysArray = Object.keys(obj);

// const length = keysArray.length;

// console.log('Kalitlar massiv:', keysArray); 
// console.log('Kalitlar soni:', length); 


// ----------------4-misol-------------

// function getNumbersAndSum(numbers = [], count = 4) {
//     if (numbers.length === count) {
//         const sum = numbers.reduce((acc, num) => acc + num, 0);
//         console.log('Raqamlar:', numbers);
//         console.log('Yig\'indi:', sum);
//         return;
//     }

//     const input = prompt(`Iltimos, ${count - numbers.length} ta raqam kiriting:`);

//     const number = parseFloat(input);

//     numbers.push(number);

//     getNumbersAndSum(numbers, count);
// }

// getNumbersAndSum();


// -------------------5-misol---------------

// let obj1 = {
//     name: "Abdulloh"
// };

// let obj2 = {
//     age: 19
// };

// let combinedObj = { ...obj1, ...obj2 };

// for (let key in combinedObj) {
//     if (combinedObj.hasOwnProperty(key)) {
//         console.log(`${key}: ${combinedObj[key]}`);
//     }
// }
