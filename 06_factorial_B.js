
function factorialofWordsCount(num){
if (num==0 || num==1) {
    return 1;
}
if (num<=0) {
    return`Invalid input: ${num}`
}
let result = 1
    for (let index = 1; index <=num ; index++) {
        result = result * index;  
    }
    if (num==undefined) {
       return undefined;
    }
    return result;
}

var givenString = "Rivision is the mother of Success";
var result = givenString.split(" ");
console.log(result);
console.log(`Total words in string is: ${result.length}`);
console.log(` Factorial of total words in string => ${factorialofWordsCount(result.length)}`);
console.log('----------------------------------------------------------------------------------------'); 


var givenString = "We never fail, we always learn, Mind it";
var result = givenString.split(" ");
console.log(result);
console.log(`Total words in string is: ${result.length}`);
console.log(` Factorial of total words in string => ${factorialofWordsCount(result.length)}`);
console.log('----------------------------------------------------------------------------------------'); 

console.log(` Factorial of null => ${factorialofWordsCount(null)}`);
console.log('----------------------------------------------------------------------------------------'); 
console.log(` Factorial of ("") => ${factorialofWordsCount(0)}`);
console.log('----------------------------------------------------------------------------------------'); 


var givenString = "Minakshi Anant Kadao";
var result = givenString.split(" ");
console.log(result);
console.log(`Total words in string is: ${result.length}`);
console.log(` Factorial of Full name => ${factorialofWordsCount(result.length)}`);
console.log('----------------------------------------------------------------------------------------'); 



