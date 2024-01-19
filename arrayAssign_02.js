

/*let array = [11, 3, 4, 11, 4, 7, 3];
console.log(array);

const set = new Set(array); 
console.log(set);*/

const removeDupllicateElement = (array) => {
    var result = [];
    for (var i=0, l=array.length; i<l; i++)
        if (result.indexOf(array[i]) === -1 && array[i] !== '')
            result.push(array[i]);
    return result;
}

console.log(`-------Step 1------`);
console.log(removeDupllicateElement([11,3,4,11,4,7,3]))




console.log(`------Step 2------`);

function greeting(str) {
    let words = str.split(" ");
    for (let index = 0; index < words.length; index++) {

        let first = words[index][0];
        let last = words[index][words[index].length-1];
        first = first.toUpperCase();   
        last = last.toUpperCase();
        words[index] = first + words[index].slice(1, -1) + last;
    }
    return words.join(" ");
}

const string = "How are you mate"
console.log(`Before String Value is : ${string}`);
console.log(`After String Value is : ${greeting(string)}`);
