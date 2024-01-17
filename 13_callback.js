

function jenny(callback){ // arg = 100
    console.log(`After session.. Jenny started homework`);
    console.log(`Jenny completed all steps`);
    console.log(`Then she is ready to call back Bill `);
    callback();
 }
 
 let bill = function(){
     console.log(`I am Bill and I am going to play Cricket `);
     console.log(`I know Jenny likes me, Hence once She completes her homework`);
     console.log(`She will definitely call me back..`);
     console.log(`Then I will copy all the assignments as it is..`);
 }
 jenny(bill)

let greet = function(){
    console.log(`Hey...Good morning..`);
}
setTimeout(greet, 5000);


setTimeout ( function(){
    for (let index = 0; index < 5; index++) {
       console.log(index);
    }
} , 3000)


/*setInterval( function(){
    console.log(`Hello...`);
} ,2000);
clearInterval(result);*/ 












