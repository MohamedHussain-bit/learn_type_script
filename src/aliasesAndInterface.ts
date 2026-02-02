// Aliases allow defining the custom name
// Syntax alias
// type nameAlias = typeAlias;

type ID = number;
const userId : ID = 10;

// Alias with object
type User = {
    name : string;
    age : number;
    isActive : boolean;
};
const user1 : User = {
    name : 'Medo',
    age : 25,
    isActive : true,
};

// Alias with Array
type Number = number[];
const scores : Number = [10,20,30,40,50];

// Interface
// Syntax interface
// interface nameInterface {
    // property1 : typeOfProperty1
    // property2 : typeOfProperty2
// };
interface Name {
    name : string;
    age : number;
    isActive : boolean;
};

const student : Name = {
    name : 'Ali',
    age : 20,
    isActive : true,
};

// Interface with extends
interface Enginer {
    name : string;
};

interface Doctor extends Enginer {
    age : number;
};

const enginer1 : Enginer = {
    name : 'Mohamed'
};

const doctor1 : Doctor = {
    name : 'Ahmed',
    age : 20,
};

module.exports = {
    userId,
    user1,
    scores,
    student,
    enginer1,
    doctor1,
};