// Keyof  extract the key types from object types

// Keyof with alias
type User = {
    name : string;
    age : number;
    email : string;
};

type UserTypes = keyof User;