let sum = 0;
for (let index = 1; index < 11; index++) {
    sum = sum + index;    
}
console.log(`Sum of Numbers from 1 to 10 is : ${sum}`);

//WAP to find the multiplication from 1 to 5
let multiply = 1
for (let index = 1; index <=5; index++) {
multiply = multiply * index   
}
console.log(`Multiplication of number from 1 to 5 is : ${multiply}`);

//Reverse words
let str = "Developer"; 
for (let index = 0; index < str.length; index++) {
console.log(str.charAt(index));
    
}

let word = "Developer";
let result = "";
for (let index = word.length-1; index >=0; index--) {
     result = result + word.charAt(index); 
 //result = result.concat(word.charAt(index));

}
console.log(`Reverse string is: ${result}`);

