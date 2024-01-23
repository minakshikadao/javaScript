

console.log('-------------------Palindrome---------------');
const isPalindrome = function(word){
    const arrayValues = word.split('');
    const reverseArrayValues= arrayValues.reverse();
    const reverseString = reverseArrayValues.join('');
  if (word == reverseString) {
    console.log(`${word} : is a palindrome.`);
  } else {
    console.log(`${word} : is not a palindrome.`);
  }
}
isPalindrome("MADAM")
isPalindrome ("DAD")
isPalindrome("HELLO")


console.log('-------------------Anagram---------------');

const str1 = 'silent';
const str2 = 'listen';
const resultStr1 =  str1.split("").sort().join("");
const resultStr2 =  str2.split("").sort().join("");
console.log(`Silent, listen is Anagram :`, resultStr1==resultStr2 ? true : false); 

const str3 = 'hello';
const str4 = 'word';
const resultStr3 =  str3.split("").sort().join("");
const resultStr4 =  str4.split("").sort().join("");
console.log(`hello, word is Anagram :`, resultStr3==resultStr4 ? true : false); 

const str5 = 'such';
const str6 = 'much';
const resultStr5 =  str5.split("").sort().join("");
const resultStr6 =  str6.split("").sort().join("");
console.log(`such, much is Anagram :`, resultStr5==resultStr6 ? true : false); 