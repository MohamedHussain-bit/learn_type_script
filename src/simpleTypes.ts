// Simple types on typeScript

const name: string = "Mohamed Hussain";
const email: string = "medo@gmail.com";

// => Number
const num: number = 12345;
const age: number = 20;
const float: number = 5.5;

// => Boolean
const isActive: boolean = true;
const hasPermission: boolean = false;

// => BigInt
const bigNumber: bigint = 9612258441521455522n;
const largeNumber: bigint = BigInt(125233255544552);

// => Symbol
const uniqueValue: symbol = Symbol("hahahahahah");

module.exports = {
  name,
  email,
  num,
  age,
  float,
  isActive,
  hasPermission,
  bigNumber,
  largeNumber,
  uniqueValue
};