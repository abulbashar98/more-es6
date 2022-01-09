class Friend {
    name;
    address = 'dholaipar';
    age = 24;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    startMeet() {
        console.log(this.name + ' shobai k ashte bol')
    }
}



const nabil = new Friend("nabil", 24, 'Khondokar road')
const tushar = new Friend('tushar', 23, 'shonir akhra')
const tamjid = new Friend('tamjid', 23, 'diptir golli')
const sifat = new Friend('sifat', 23, 'noakhali potti')
console.log(nabil);
console.log(tushar);
console.log(tamjid);
console.log(sifat);

nabil.startMeet()
sifat.startMeet()


//===>
// Friend { name: 'nabil', address: 'Khondokar road', age: 24 }
// Friend { name: 'tushar', address: 'shonir akhra', age: 23 }
// Friend { name: 'tamjid', address: 'diptir golli', age: 23 }
// Friend { name: 'sifat', address: 'noakhali potti', age: 23 }
// nabil shobai k ashte bol
// sifat shobai k ashte bol