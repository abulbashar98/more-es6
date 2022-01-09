//Map string array

const friends = ['Borendro shen', 'Dripto Goswami', 'fakhrul hasan asif', 'mozammel haq khan tushar', 'yousuf jamil tamjid']


const nameLengths = friends.map(friend => friend.length)
console.log(nameLengths);



// array of objects map

const products = [
    { name: 'asus mouse', price: 350, colour: 'black' },
    { name: 'dell monitor', price: 5500, colour: 'gray' },
    { name: 'poco X2 phone', price: 19500, colour: 'Blue' },
    { name: 'flower vass', price: 950, colour: 'brownish' },
    { name: 'n570 Television', price: 30000, colour: 'Black' }
]

// const productNames = products.map(product => product.name)
// const productColour = products.map(product => product.colour)
// console.log(productColour);


// When we doesn't need to Get the return values of map in an Array We can use for each... Just to do the job.


// products.map(product => console.log(product))


// for each is a sligh different
products.forEach(pd => console.log(pd))