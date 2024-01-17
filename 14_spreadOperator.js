


let array = ["Jenny", " Elon", "Bill", "Stew" ];
console.log(array);
console.log(...array);


console.log(`Rest Parameter`);
function show(n1, ...arg){ // Rest parameter
    console.log(n1);
    console.log(arg);
}
show(10, 20, 30, 40, 50);