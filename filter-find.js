

// FILTER

const numbers = [6, 46, 34, 56, 3, 12, 98, 65, 52, 100, 123]
const bigNumbers = numbers.filter(num => num > 50 && num < 100)
console.log(bigNumbers);



const friends = ['Borendro shen', 'Dripto Goswami', 'fakhrul hasan asif', 'mozammel haq khan tushar', 'yousuf jamil tamjid']
const smallNames = friends.filter(frnd => frnd.length < 20)
console.log(smallNames);




const products = [
    { name: 'asus mouse', price: 350, colour: 'black' },
    { name: 'dell monitor', price: 5500, colour: 'gray' },
    { name: 'poco X2 phone', price: 19500, colour: 'Blue' },
    { name: 'flower vass', price: 950, colour: 'brownish' },
    { name: 'n570 Television', price: 30000, colour: 'black' }
]
const expensive = products.filter(pdt => pdt.price > 1000)
console.log(expensive);


// ==>
// [
//     { name: 'dell monitor', price: 5500, colour: 'gray' },
//     { name: 'poco X2 phone', price: 19500, colour: 'Blue' },
//     { name: 'n570 Television', price: 30000, colour: 'Black' }
//   ]


const calassyItems = products.filter(prdct => prdct.colour == 'black')
console.log(calassyItems);

//==>
// [
//     { name: 'asus mouse', price: 350, colour: 'black' },
//     { name: 'n570 Television', price: 30000, colour: 'black' }
//   ]





// FIND

// the prime difference between Filter & Find is...... Filter returns all the elements matching the conditions in an Array......... Where Find returns the first element AND THE  first emement only that matches the conditions

const blackFirst = products.find(product => product.colour == 'black')
console.log(blackFirst);

//==>
// { name: 'asus mouse', price: 350, colour: 'black' }