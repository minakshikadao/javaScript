

console.log("=================STEP1=================");
function addition(){

console.log( " Hello, I Am Minakshi");
}

addition() ;



console.log("=======================STEP2=======================");

function personalDetails( firstName, lastName, collegeDetails) {
    var result = { firstName : firstName ,
    lastName : lastName ,
    collegeDetails : collegeDetails 
    }
    return result ;
}

var result = personalDetails("minakshi","kadao","PRMITRAmravati") ;
console.log( " My Personal Details are: " , result);


console.log( "=====================STEP3==================");

function swapValue (n1 , n2) {
    console.log( "Before Swap=>" , n1 ,n2);
    var temp=n1;
    n1=n2;
    n2=temp;
    console.log( "After swap =>" ,  n1,  n2)
}

swapValue( "Virat" , "Anushka");
swapValue( 1000 , 2000);

console.log( "=====================STEP3==================");
function sum (n1,n2,n3){
console.log( "Values:" ,n1,n2,n3);
var result = n1+n2+n3;
return result;
}
var resultValue = sum(10.23,600,40);
console.log(" sum is:", resultValue);
var resultValue = sum ("Hello","GOOD","Morning");



