// Interface segregation principle

// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
//
//     walk() {
//         console.log(`${this.name} can walk`)
//     }
//
//     swim() {
//         console.log(`${this.name} can swim`)
//     }
//
//     fly() {
//         console.log(`${this.name} can fly`)
//     }
// }
//
// class Dog extends Animal{
//   fly() {
//       return null
//   }
// }
//
// class Eagle extends Animal{
//   swim() {
//       return null
//   }
// }
//
// class Whale extends Animal{
//     fly() {
//         return null
//     }
//     walk() {
//         return null
//     }
// }
//
// const dog = new Dog('Rex');
//
// dog.walk()
// dog.fly()  // this is not true
//
//
// const eagle = new Eagle('Orel');
//
// eagle.fly();
// eagle.swim(); // this. is not true
// eagle.walk()
//
// const whale = new Whale('Big blue friend');
//
// whale.fly() //this. is not true
// whale.walk() // this. is not true
// whale.swim()

class Animal {
    constructor(name) {
        this.name = name;
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim`)
    }
}

const flyer = {
    fly() {
        console.log(`${this.name} can fly`)
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk`)
    }
}

class Dog extends Animal {};
class Eagle extends Animal {};
class Whale extends Animal {};

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flyer, walker);
Object.assign(Whale.prototype, swimmer);

console.log(new Dog('rex').walk())
