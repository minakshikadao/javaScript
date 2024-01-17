const fruits_seasonal = [ "Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);

console.log(`===== Adding an element at the beginning  =====`);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`===== Remove an element Mango =====`);
fruits_seasonal.splice(4, 1)
console.log(fruits_seasonal);

console.log(`===== Adding an element at the last position  =====`);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`===== Insert an element =====`);
 const fruitsSeason = ['Papaya', 'Banana', 'Orange', 'Apple', 'Watermelon', 'Pineapple']
 fruitsSeason .splice(4 , 0, "Dragon fruit");
console.log(fruitsSeason);

console.log(`===== Replacing an element  =====`);
 fruitsSeason .splice(2, 1, "Kiwi");
console.log(fruitsSeason);











