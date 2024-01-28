
console.log(`-------------------------step 1--------------------------`);
const arrayNums = [20, 3, 4, 56, 90, 400, 49]
const  arrayNums1 = arrayNums.push(55, 66);
console.log(arrayNums); // Shallow cloning
console.log(arrayNums1);

console.log(`-------------------------step 2----------------------------`);
console.log(arrayNums);
 arrayNums.splice(4, 0, 10, 25)
 const arrayNums2 = [...arrayNums] // Deep cloning
console.log(arrayNums2);

console.log(`-------------------------step 3----------------------------`);

arrayEven = [2, 30, 14, 8]
newArray = arrayNums.concat(arrayEven)
console.log(newArray);

console.log(`-------------------------step 4---------------------------`);
const employee_info = {
   emp_id: 27,
   emp_name: "John Doe",
   salary: {
    july_month: "40,0000INR",
    aug_month: "50,0000INR",
    jun_month: "65,0000INR",
   },
   address: {
    locality:{
        colony: "OM Vrindavan Society",
        street: "Kanch Pokli, 431202",
    },
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
   },
   mobiles: ["+91 8600 3456 88","1800- 4567 32", "+91- 9096 5678 77"]
}
console.log(employee_info);

console.log(`-------------------------step 5-A---------------------------`);
console.table(employee_info.address);
console.log(`-------------------------step 5-B---------------------------`);
console.log(employee_info.mobiles);

console.log(`-------------------------step 6-A---------------------------`);

const employee = JSON.parse(JSON.stringify(employee_info));
employee.salary.july_month = "80,000INR";
console.log(`Update july month Salary : ${employee.salary.july_month}` );
console.table(employee.salary);

console.log(`-------------------------step 6-B---------------------------`);


//const employee = JSON.parse(JSON.stringify(employee_info));
employee.address.country = "United Kingdom"
console.log(`Update country :${employee.address.country}`);
console.table(employee.address);

console.log(`-------------------------step 6-c---------------------------`);
console.table(employee_info);
console.table(employee);
