
class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
    getDetails(){
        console.log(`ID:${this.emp_id}, Name:${this.emp_name}, Department:${this.emp_dept}, Salary:${this.emp_salary}, Company:${this.emp_company}`);
    }
    }
    const emp_anil = new Employee(22, "Anil","IT",50000, "TCS");
    const emp_radha = new Employee(33, "Radha","HR",74000, "Wipro");
    const emp_rishi = new Employee(55, "Rishi","Finance",47000, "TCS");
    const emp_sonali = new Employee(66, "Sonali","Finance",45000, "Infy");
    const emp_monika = new Employee(77, "Monika","IT",40000, "Wipro");
    const emp_viny = new Employee(88, "Viny","IT",75000, "TCS");
    const emp_mahi = new Employee(99, "Mahesh","HR",85000, "Infy");
    const arrayEmployee = [emp_anil , emp_radha ,emp_rishi , emp_sonali,emp_monika ,emp_viny , emp_mahi]

console.log('---------------------step1--------------------');
console.log('Employee from wipro company:');
const arrayEmployeeFromWipro = arrayEmployee.filter((element) => {
    if (element.emp_company =="Wipro") {
        element.getDetails.emp_name;
    console.log(`Name:${element.emp_name}`);
    }
 } );

 console.log('---------------------step2--------------------');
 console.log('Employee from IT and HR Department:');
 const arrayEmploy = arrayEmployee.filter((emp) => {
if (emp.emp_dept == "IT" || emp.emp_dept == "HR") {
    emp.getDetails.emp_name;
    console.log(`Department: ${emp.emp_dept}   Name : ${emp.emp_name} `);
}
 })

 console.log('---------------------step3--------------------');
 console.log('Employee whoes ID > 50:');
const arrayEmp = arrayEmployee.filter((empl) => {
if (empl.emp_id>50) {
    empl.getDetails.emp_name;
    console.log(`ID: ${empl.emp_id}    Name : ${empl.emp_name}`);
}
})

console.log('---------------------step4--------------------');
 console.log('Employee name start from A or V or M :');
 for (const element of arrayEmployee) {
    if (element.emp_name.startsWith('A') || element.emp_name.startsWith('V') || element.emp_name.startsWith('M') ) { 
        console.log(`Name:${element.emp_name}`);
    } 
 }
 console.log('---------------------------step5--------------------------');
 
 const totalSalary = arrayEmployee.reduce( (runningTotal, element) => {
    return runningTotal + element.emp_salary;
}, 0);
console.log(`Average salary from all Department is: ${totalSalary/arrayEmployee .length}`);

console.log('--------------------------step6---------------------------');


const arrayEmployeeFromIT = arrayEmployee.filter((element)=>{
return element.emp_dept == "IT";
elem.getDetails.emp_salary
});

const sumOfSalary = arrayEmployeeFromIT.reduce((rt,element)=>{
    return rt + element.emp_salary;
},0)
console.log(`Average Salary from IT Department : ${sumOfSalary / arrayEmployeeFromIT.length }`);







