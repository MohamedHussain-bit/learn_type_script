// => Special Types

// => any   accept any types 
let value : any ;
value = 'Medo';
value = 12345;
value = true;

// => unKnown   use when check type of value
const key : unknown = "Body";
if(typeof key === "string"){
    console.log(key);
};

// => null
const x : null = null;

// => undefined
const y : undefined = undefined;

module.exports = {
    value,
    key,
    x,
    y,
};