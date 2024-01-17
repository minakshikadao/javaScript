

let array = [11, 22, 33, 44, 55, 66, 77]
console.log(`Traversing an array using for in loop...`);
let sum = 0
for (const index in array){
    console.log(array[index]);
    sum = sum + array[index];
}
console.log(`Sum of array element is : ${sum}`);


console.log(`even number array using for in loop...`);
for (const index in array){
   if (array[index]%2==0) {
    console.log(array[index]);
   }
}

let arrayNum = [4, 5, 6, 7, 3]
let add = 0;
console.log(` traversing an array using for of loop....`);
for (let element of arrayNum) {
  add = add +  element;
}
console.log(`Sum : ${add}`);




console.log(`==== WAP to count the vowels from the given string=======`);
const str = "Developer UI and Backend";
const vowels = "aeiou";
let count = 0;
for (const char of str) {
    console.log(char);
    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
}
console.log(`Vowels count is: ${count}`);




let arrayOfFriends = ["Jenny", "Elon","Bill"];
const result = arrayOfFriends.join("-");
console.log(result);


arrayOfFriends.reverse();
console.log(arrayOfFriends);


const word = "Developer UI and Backend";
const arrayOfWords = word.split(" ");
console.log(arrayOfWords.length);

// ( Long method for reverse)
//const words = word.split("");
//console.log(words);
//words.reverse();
//console.log(words);
//const resultString = words.join("");
///console.log(resultString);

//console.log("======Shrtcut method=====");

const reverseStr = word.split("").reverse().join("");
console.log(reverseStr);


console.log("======Concat() Method=======");
let arr1 = [1, 2, 3];
let arr2 = [ 4, 5];
let arr3 = arr1.concat(arr2);
console.log(arr3);








