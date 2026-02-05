// Class
class Person {
    name : string;
    age : number;
    constructor(name : string , age : number){
        this.name = name;
        this.age = age;
    };
    greet(): void {
        console.log(`Hello my name is ${this.name}`);
    };
};

const p1 = new Person('Ahmed' , 25);
    p1.greet();

// Access modifiers
// Public keyWord  this is a default
class User {
    public name : string;
    constructor(name : string){
        this.name = name;
    };
};

const u1 = new User('Mohamed');

// Private keyWord
class Enginer {
    private name : string;
    constructor(name : string){
        this.name = name;
    };
};

// Protected
class Doctor {
    protected role : string;
    constructor(role : string){
        this.role = role;
    };
};

const d1 = new Doctor('Doctor');

// Short constructor
class Short {
    constructor(
        public name : string
    ){
        this.name = name;
    };
};

const sh = new Short('Short constructor');

// Inheritance
class Animal {
    move(): void {
        console.log('Moving.....');
    };
};

class Dog extends Animal {
    voise(): void {
        console.log('Woof.....');
    };
};

const an1 = new Animal();
    an1.move();

const dog1 = new Dog();
    dog1.move();
    dog1.voise();

module.exports = {
    p1,
    u1,
    d1,
    sh,
    an1,
    dog1,
};