
let city = "Pune";
let mainCity = city;
city = "Mumbai";
console.log(`value of city :${city}`);
console.log(`value of Main city :${mainCity}`);


 let n1 = 100;
 let n2 = n1; //deep clone
 n1 = 444;
 console.log(n1); //444
 console.log(n2); //100



 const user = {
    name: "Jenny",
    age : 32 
 }
 const developer = user; //shallow clone
 developer.name = "Bill";
 console.log(developer.name); //Bill
 console.log(user.name);  //Bill


 //Deep Clone
 //1. Spread Operator
 //2. object.assign method
 //3. JSON.parse(), JSON.stringfy()

 const person = {
    name: "Jenny",
    age : 32 
 }

 console.log(`-----------Deep Cloning using Spread Operator----------`);
 const boy = {...person};
 person.age = 44;
 console.log(boy.age);
 console.log(person.age);


 console.log(`---------Deep cloning using Object.assign() operator-----------`);
 const smartBoy = Object.assign({}, boy);
 smartBoy.name = "Stew Job";
 console.log( smartBoy.name); //Stew Job
 console.log(boy.name);  //Jenny

 console.log(`-----Deep cloning usin JSON-----------`);


 // const gentleWoman = {...gentleMan}; // Spread Operator 
const gentleWoman = JSON.parse(JSON.stringify(gentleMan));
gentleWoman.address.street = "Khawgalli";

console.log(gentleWoman.address.street); // 
console.log(gentleMan.address.street); //


