// Union types are used when a value can be more than a singel type 
// Syntax let unionName : string | number | boolean

// Simple union
let id : string | number;
id = 10;
id = 'momommomom1010101';

// Union with function
function printId(id : string | number){
    console.log(id);
};
printId(20);
printId('20');

// Union with array
const data : (string | number | boolean)[] = [1,'2',true];

module.exports = {
    id,
    printId,
    data,
};