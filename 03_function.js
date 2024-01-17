
console.log ("===========STEP1=========") ;


function square (num){
    console.log( "Given Value is:" , num );
    var result = num * num
    console.log("result is :" , result);
}
square(9);
square(25)
square(15)
square(18)


console.log ("===========STEP2==============");

function multiply(n1, n2, n3) {
    console.log("Given numbers are: " , n1, n2, n3);
    var result = n1 * n2 * n3;
    return result;
}
var returnValue =multiply( 5,5,5);
console.log( " Multiplication is :" , returnValue);

var resultValue = multiply(34, 56, 89);
console.log("Multiplication is: ", resultValue);




console.log("===============STEP3===============");

function swap (n1 , n2) {
    console.log( "Before Swap=>" , "n1=>" ,n1 ," n2=>" ,n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log( "After swap =>" , " n1=>", n1, "n2=>", n2)
}

swap(100,200)










   