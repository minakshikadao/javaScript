

function isPrime(num){
for (let index = 2; index < num; index++){
  if (num % index==0) {
    return false;
  }
   
}
return true;
}
console.log(`7 is Prime number => ${isPrime(7)}`);
console.log(`6 is Prime number => ${isPrime(6)}`);
console.log(`8 is Prime number => ${isPrime(8)}`);
console.log(`5 is Prime number => ${isPrime(5)}`);
console.log(`3 is Prime number => ${isPrime(3 )}`);