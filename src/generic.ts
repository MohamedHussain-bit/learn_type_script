// Generices
// Syntaxe generics  <T>

// Generics with function
function identity<T>(value : T): T {
    return value;
};

const idint1 = identity<string>('Hello');
const idint2 = identity<number>(30);

// Generics with many types
function pair<T , U>(a : T , b : U): [T , U]{
    return [a , b];
};

const key = pair<string , number>('Hello world' , 50);

// Generics with type alias
type Box<T> = {
    value : T;
};

const stringBox : Box<string> = {value: 'Ohhhhh my god'};
const numberBox : Box<number> = {value: 1000000};
const arrayStingBox : Box<string[]> = {value: ['a' , 'b']};

// Generics with interface
interface ApiResponce<T> {
    data : T;
    status : number;
};

const res : ApiResponce<string[]> = {
    data : ['a' , 'b'],
    status : 100
};

module.exports = {
    idint1,
    idint2,
    key,
    stringBox,
    numberBox,
    arrayStingBox,
    res,
};