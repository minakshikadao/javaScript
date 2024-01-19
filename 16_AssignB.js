
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

for (const element of arrayEmployee) {
    element.getDetails();
 }

   console.log('1)-------------Employee of TCS with name and company--------------');
   for (const element of arrayEmployee){
    if (element.emp_company=="TCS" ) {
        element.getDetails.emp_name;
        console.log(`Name:${element.emp_name} , Company Name:${element.emp_company}`);
    } 
   }

   console.log('2)-------------Employee of finance with name and department--------------');
for (const element of arrayEmployee){
    if (element.emp_dept=="Finance") {
        element.getDetails.emp_name;
        console.log(`Name:${element.emp_name}, Department of Employee:${element.emp_dept}`);
    }
}
console.log('3)-------------Employee Name starts with R--------------');
for (const element of arrayEmployee){
    if (element.emp_name.startsWith('R')) {
        element.getDetails();
    }
}

console.log('4)-------------Employee Salary > 75000--------------');
for (const element of arrayEmployee) {
    if (element.emp_salary>75000) {
        element.getDetails.emp_salary
        console.log(`Name:${element.emp_name}, Company:${element.emp_company}, Salary:${element.emp_salary}`);
    }
}

console.log('5)-------------Employee salary >= 50000 and from IT Depat.--------------');
for (const element of arrayEmployee){
    if (element.emp_salary>=50000 && element.emp_dept=="IT") {
        element.getDetails()
    }
}

console.log('5)-------------Employee from Infy company--------------');
for (const element of arrayEmployee){
    if (element.emp_company=="Infy") {
        element.getDetails()
    }
}