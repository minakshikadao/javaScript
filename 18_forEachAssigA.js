

const arrayNumbers = [1,-7,40,502,-77,91,0,108, 89,-601];

 console.log('----------------------Step1---------------------');
 arrayNumbers.forEach((currentValue, index) => {
console.log(`Element: ${currentValue} , Index:${index}`);
 })

 console.log('---------------------Step2----------------------');
 console.log('positive number for given array:');
 arrayNumbers.forEach((element) => {
   if (element > 0) {
    console.log(element);
   }
     });

     console.log('---------------------Step3----------------------');    
     console.log('Negative number for given array:');
     arrayNumbers.forEach((element) => {
        if (element < 0) {
         console.log(element);
        }
          });

          console.log('---------------------Step4---------------------');  
           let num = ``;
          arrayNumbers.forEach((element) => {
            if (element % 2 == 0) {
             num = num + " " + element;
            }
              });
              console.log(`Even number for given array: ${num}`); 
          
     console.log('---------------------Step5---------------------');      
    
     sum = 0;
     arrayNumbers.forEach((element) =>{
          sum += element;
     })
     console.log(`Total sum: ${sum}`);


     console.log('---------------------Step6---------------------');    
     arrayNumbers.forEach((currentValue, index) => {
        if (currentValue % 2 === 0) {
          console.log(`Even Value: ${currentValue} , Index: ${index}`);
        } 
    });


     