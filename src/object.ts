// => Object
// Syntax object const nameObject : {property1 : type , property2 : type} = {property1 = ...};

// In this object you must intilaize all property
const car : {type: string, model: string, year: number} = {
    type : 'Marcedes',
    model : 'CLA200',
    year : 2026,
};

// when would create object and dont would intialize all property you shoud aftre property '?'

const student: {name: string, age: number, id? : number} = {
    name : "Mohamed",
    age : 20,
};
student.id = 12345;

module.exports = {
    car,
    student,
};