const student = { name: 'Rafid Hossain', school: 'wils little', id: 124515, address: 'Jatrabari Dhaka 1204', height: 5.9, weight: 85, }

// console.log(student.address);



// const address = student.address;
// const weight = student.weight;
// const school = student.school;

// console.log(address, weight, school);




// Destructuring

const { address, weight, school } = student;
// console.log(address, weight, school);





// Complex Cases
const company = {
    name: 'GP',
    ceo: {
        name: 'David',
        age: 54,
        nationality: 'British'
    },
    web: {
        work: "web development",
        employee: 75,
        tech: {
            html: 5,
            css: 3,
            js: 'es6',
            frameworks: 'React-tailwind-nodeJs'
        },
    }
}


const { work, employee, tech } = company.web;
const { js, frameworks } = company.web.tech;
console.log(work, employee, tech);
//===>
// web development 75 { html: 5, css: 3, js: 'es6', frameworks: 'React-tailwind-nodeJs' }

console.log(js, frameworks);
//===>
// es6 React-tailwind-nodeJs