// Function 
// Syntax of function
// Function nameFunction(parameter1 : typeParameter1 , parameter2 : typeParameter2) : typeReturn{};

// Function with return
function add(a: number , b: number): number {
    return a + b;
};
add(10, 90);

// Function without return
function printHello(hello: string = 'Hello'): void {
    console.log(hello);
};
printHello();

// Rest parameter
function sum(...numbers: number[]): number {
    return numbers.reduce((a , b) => a + b , 0);
};
sum(20,20,20,20,20);

module.exports = {
    add,
    printHello,
    sum,
};    