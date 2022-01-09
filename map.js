const numbers = [6, 4, 8, 9, 12];
// const output = [];

// function doubleOld(number) {
//     return number * 2;
// }


const doubleIt = x => x * 2;

// for (let i = 0; i < numbers.length; i++) {
//     const number = numbers[i];
//     // const result = doubleOld(number);
//     const result = doubleIt(number);
//     output.push(result);
// }

// console.log(output);




// Now number of tasks took place here are 3

// 1. thrown a loop to catch each element of numbers;
// 2. made an Arrow function to do the task;
// 3. pushed every result in loop to another array;





// Map does all of these three tasks

// 1. runs a loop through all the elements in array. Cathes them;
// 2. works on the provided function
// 3. pushes function end results to an Array;



// const output = numbers.map(doubleIt);
const output = numbers.map(x => x * 2)
console.log(output);



const squares = numbers.map(x => x * x)
console.log(squares);