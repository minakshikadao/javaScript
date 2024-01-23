

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
isPalindrome("MADAM");



console.log('--------------------------Anagram-----------------------');
// 'heart' and 'earth' are anagrams.
const str1 = 'heart'; // Sort in ascending order ==>  aehrt
const str2 = 'earth'; // Sort in ascending order ==> aehrt
const resultStr1 = str1.split("").sort().join("");
const resultStr2 = str2.split("").sort().join("");
console.log(resultStr1==resultStr2 ? true : false); 



