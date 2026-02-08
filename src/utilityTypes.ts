// Utility types

// Partial<Type>  Changes all properties to optional
type User = {
    name : string;
    age : number;
    email : string;
};

let userOptional : Partial<User> = {
    name : 'Ali'
};
    userOptional.age = 50;

// Required<Type>  change all properties to required
let userRequired : Required<User> = {
    name : 'Karem',
    age : 30,
    email : 'karem@gmail.com',
};

// Readonly  make all properties to readonly meaning that cannot be modified
let readUser : Readonly<User>;

// Pick  remove all and return specific properties
let userName : Pick<User , "name"> = {
    name : 'Karam',
};

// Omit  return all and remove specific properties
let ageAndEmailUser : Omit<User , 'name'> = {
    age : 50,
    email : 'email@gmail.com',
};

// Record  careate object with specific key
let car : Record<string , number> = {
    price : 3000000,
    model : 2026,
};

module.exports = {
    userOptional,
    userRequired,
    userName,
    ageAndEmailUser,
    car,
};