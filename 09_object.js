
//add in object
let person = {
firstName: "Minakshi",
age: 28,
isMarried: true,
}
console.log(person);


//prperty access/prperty read

console.log(`dot notation`);
console.log(person.firstName); 

console.log(`square bracket notation `);
console.log(person["firstName"]);  

//add prperty
person.designation= "UI Developer"
console.log(person);


//update property
person.age = 33
console.log(person);
 
//tabular format
person.isMarried = false
console.table(person);

//delete prperty
delete person.designation;
console.log(person);


//empty object
console.log("===Empty Object");
let address ={

}

address.city = "Pune";
console.log(address);


//function inside object or Nested object
let user = {
    userName: "Jenny",
      country: "USA",
      address:{
     city:"Pune",
     street: "Narhe",
     pin: 445002,
     getAddress: function(){ //this reference variable
        console.log(`Complete address: ${this.flatNo}, ${this.street}, ${this.city}, ${this.pin}`);
     } 
      },
      show: function(){
       console.log(`Inside show function`);
      }
}
console.log(user);
let country = user.country;
console.log(country);
user.show();
console.log(user.address.pin);
user.address.flatNo = 306;
console.log(user.address);
user.address.getAddress()



console.log(`====== Traversing an object ========`);
let developer = {
    firstName: "Gajanan",
    age: 32,
    isMarried: true,
    skills: ["C", "CPP", "Core Java", "JavaScript", "Microservices" ]
}
for (const key in developer) {
    if (Object.hasOwnProperty.call(developer, key)) {
        const element = developer[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }

}


console.log(developer.skills);
 developer.skills.push= ("HTML");
 console.log(developer.skills)


 developer.skills.shift("C");
 console.log(developer.skills);


 //object.keys and object.values

 const keys = Object.keys(developer);
console.log(keys);


const values = Object.values(developer);
console.log(values);
console.log(`Is 'values' array ==>  ${Array.isArray(values)}`);
for (const element of values) {
    console.log(element);  
}

 
///object entries
console.log(`Object entries....`);
const entries= Object.entries(developer);
for (const element of entries) {
    console.log(element);
}

console.log(`Accessing nested array element using double [] [] brackets`);
console.log(entries[0][0]);
console.log(entries[0][1]);


console.log(`======in operator`);
const isAgeAvailable = "age" in developer;
console.log(`Is age Available: ${isAgeAvailable}`);
const isCityAvailable = "city" in developer;
console.log(`Is city Available: ${isCityAvailable}`);























