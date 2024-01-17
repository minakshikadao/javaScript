

let person = {
    firstName : "Minakshi" ,
    age : 28,
    isMarried: true,
    city : "Pune",
    country : "Bharat"
}
/*let firstName = person.firstName;
let age = person.age;
let city = person.city;
let country = person.country;*/
//let{ firstName, age, country, city} - object destructuring

let{ firstName, age, country, city, pin=12345} = person   // object destructuring with default value
console.log(firstName, age, city, country);



console.log(`================Array Destructuring============`);
let array = ["Jenny", "Elon", "Bill"];
//const element0 = array[0];
//const element1 = array[1];
//const element2 = array[2];
let [actress, teslaOwner, microsoftOwner, appleOwner="Tim Cook"] = array;
console.log(actress,teslaOwner, microsoftOwner, appleOwner);



