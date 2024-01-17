


var display = function (){

}

var num = 10;

var maleMarriageEligibility = function(gender,age,boyname){
var result = gender=="Male" && age>=21 ? `Hey ${boyname} you are eligible for Marriage` : " Unfortunately - You are not eligible, Please try next time." ;
console.log(result);
}
maleMarriageEligibility("Male", 25, "Billgates");
maleMarriageEligibility("Male", 20, "Elon");