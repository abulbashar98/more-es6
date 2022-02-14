// destucturing Object with association to Property 

// const myObject = { p: 54, q: 77, r: 89, s: 32, t: 13, u: 99, v: 35 };
// const { q, r, t } = myObject;
// console.log(r, t)



// destructuring Arrray with association to Position

const [best, worst] = ['iPhone13', 'oppo reno 6', 'samsung s9', 'samsung z-flip'];

console.log(best, worst)
//=====>iPhone13 oppo reno 6


// chaining
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
            frameworks: 'React-tailwind-nodeJs'
        },
    }
}


const { js, frameworks } = company.web.tech;
// console.log(js, frameworks);



// const myObject = { p: 54, q: 77, r: 89, s: 32, t: 13, u: 99, v: 35 };
// optional chaining (x?. y?. z?.)
// Note: Here, console.log(x) is undefined... bcoz it doesn't exist in object... But x.y or y.z is an Error.... With optional chaining we can prevent that error....Optional chaining progresses only if the property exists in Array....



// console.log(company?.backend?.tech.js)  //Cannot read property 'tech' of undefined-- ERRoR
// console.log(company.web.tech.js)

const myObject = { p: 54, q: 77, r: 89, s: 32, t: 13, u: 99, v: 35 };
// console.log(myObject?.x?.values)       //  (.)  Cannot read property 'values' of undefined--- ERROR

