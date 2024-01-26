

const arrayRollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45]


console.log('1)------------------Reverse array-----------------');
arrayRollNumbers.reverse()
console.log(arrayRollNumbers);

console.log('2)------------------sort() array-----------------');

arrayRollNumbers.sort();
console.log(arrayRollNumbers);

console.log('3)------------------sort array in Ascending order array-----------------');

arrayRollNumbers.sort((a,b) =>{
return a>b ? -1 : 0;
})
console.log(arrayRollNumbers);


console.log('4)------------------Greatest number from array-----------------');

let greatestNumber = 0;
for (let index = 0; index < arrayRollNumbers.length; index++) {
    if (arrayRollNumbers[index] > greatestNumber) {
        greatestNumber = arrayRollNumbers[index];
    }
}
console.log("The greatest number is:", greatestNumber)

console.log('5)------------------Smallest number from array-----------------');

let smallestNumber = arrayRollNumbers[0];

for (let i = 1; i < arrayRollNumbers.length; i++) {
    if (arrayRollNumbers[i] < smallestNumber) {
        smallestNumber = arrayRollNumbers[i]; 
    }
}
console.log("The smallest number is:", smallestNumber);

console.log('6)------------------Remove Duplicates from array----------------');

const newArray = [...new Set(arrayRollNumbers )];
console.log(newArray);











