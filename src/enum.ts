// => Enums 
// Syntax for enums
// enum nameEnum {
//   value0,
//   value1,
//   value2,
//   value3,
//   value4,
//   value5,
// };

// Numeric enums
enum Diraction {
    Up,
    Down,
    Lift,
    Right,
};

let move : Diraction = Diraction.Up;
if(move === Diraction.Up){
    console.log('Moving up');
};

// String enums
enum Rules {
    Admin = "ADMIN",
    User = "User",
    Guest = "GUEST",
};

let role : Rules = Rules.Admin;
if(role === Rules.Admin){
    console.log('Welcom Admin');
};

// Heterogeneous enums (Unpopuler) number and string
enum Mixed {
    Yes = 1,
    No = "NO",
};

// Function with enums
enum PaymentMethod {
    Cach,
    Card,
    Paypal,
};

function pay(method : PaymentMethod){
    if(method === PaymentMethod.Cach){
        console.log('Paying cach');
    };
};

module.exports = {
    Diraction,
    move,
    Rules,
    role,
    Mixed,
    PaymentMethod,
    pay,
};