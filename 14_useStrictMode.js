


'use strict'; 
var age = 32;
console.log(age);

//undeclared variable is not allowed.
message = "Hello";  // throws an error

//Undeclared objects are not allowed.
person = { first_name : 'Minakshi , age: 25'}; // throws an error


//Deleting an object is not allowed.
let person = {first_name : 'Minakshi'};
delete person; //throwa an error

//Duplicating a parameter name is not allowed.
function hello(p1, p){ // throws an error
console.log('hello');
};
hello();
