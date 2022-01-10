// task 1

const myName = 'Abul Bashar';
let myAge = 24;



// task 2

const mySelf = { name: 'Bashar', age: 24, institution: 'none' }

// const dynamicString = `My name is ${myName}. I am ${myAge} years old.`
const dynamicString = `My name is ${mySelf.name}. I am ${mySelf.age} years old.`
// console.log(dynamicString);
//===> My name is Bashar. I am 24 years old.


//task 3.1

const devidedByFive = num => num / 5;
// console.log(devidedByFive(15));
//==> 3

// 3.2

const addPlusTwos = (num1, num2) => (num1 + 2) * (num2 + 2);
// console.log(addPlusTwos(4, 5))
//-==>42

// 3.3
const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(4, 5, 12));
//===> 240

// 3.4
const multiLineMultiplyAdd = (num1, num2) => {
    const first = num1 + 2;
    const second = num2 + 2;

    const result = first * second;
    return result;
}
// console.log(multiLineMultiplyAdd(4, 9));
//==> 66


// task 4
// read documentAtion about difference of function declaration and Arrow function

// task 4.5
// difference between var,let,const


// task5

const numbers = [8, 5, 12, 6, 17]
const output = numbers.map(num => num * 5);
// console.log(output);
//===>[ 40, 25, 60, 30, 85 ]


// task6

const numbers2 = [12, 19, 17, 65, 24, 14, 34, 37, 29]
const oddOutput = numbers2.filter(number => number % 2 == 1);
// console.log(oddOutput);
//-==>[ 19, 17, 65, 37, 29 ]


// task7

const products = [
    { name: 'asus mouse', price: 350, colour: 'black' },
    { name: 'dell monitor', price: 5500, colour: 'gray' },
    { name: 'poco X2 phone', price: 19500, colour: 'Blue' },
    { name: 'flower vass', price: 950, colour: 'brownish' },
    { name: 'n570 Television', price: 30000, colour: 'Black' },
    { name: 'philips blender', price: 5000, colour: 'white' }
]

const productValueFiveThousand = products.find(product => product.price == 5000);
// console.log(productValueFiveThousand);
//===> { name: 'philips blender', price: 5000, colour: 'white' }


// task 7.5

// Writting Summary about Filter, Map, Find........Done


// task 8
const randomProduct = { name: 'philips blender', price: 5000, colour: 'white' };
const { colour } = randomProduct;
// console.log(colour);
//===> white

// task 9
const evenNums = [2, 4, 8, 10, 12, 14, 16, 18]
const [, , three] = evenNums;
// console.log(three);
//===> 8


// task10
const addThreeNumbers = (num1, num2, num3 = 7) => num1 + num2 + num3;
// console.log(addThreeNumbers(2, 8));
//===> 17


// task11
const company = {
    name: 'GP',
    ceo: { name: 'David', age: 54, nationality: 'British' },
    web: {
        work: "web development",
        employee: 75,
        tech: {
            html: 5,
            css: 3,
            js: 'es6',
            frameworks: ['bootstrap', 'tailwind', 'reactJs', 'expressJs', 'MongoDB', 'nodeJs']
        },
    }
}