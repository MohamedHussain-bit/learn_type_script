// Casting is aprocces to overriding a type
// Famuse keyWord   as

// Casting with as
const value : unknown = 'Hello typeScript';
const stringLength = (value as string).length;

// Casting with <>
const hello : unknown = 'Hello';
const helloLength = (<string> hello).length;

module.exports = {
    stringLength,
    helloLength,
};