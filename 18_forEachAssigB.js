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
    arrayEmployee.forEach( (element) => {
        if (element.emp_company =="TCS") {
            element.getDetails.emp_name;
        console.log(`Name:${element.emp_name} , Company Name:${element.emp_company}`);
        }
    } );
    

    console.log('2)-------------Employee salary >= 50000 --------------');
    arrayEmployee.forEach( (element) => {
    if (element.emp_salary>=50000) {
        element.getDetails()
    }
    })
    console.log('3)-------------- Sum of all Employee salary-------------');
    let totalSalary = 0;
    arrayEmployee.forEach((employee) => {
        totalSalary += employee.emp_salary;
    });
    console.log(`Total Salary: ${totalSalary}`);

    console.log('4)-------------- employee average salary-------------');

    let totalSalar = 0;
    arrayEmployee.forEach((employee) => {
        totalSalar += employee.emp_salary;      
    });
    console.log(`Total Salary: ${totalSalar}`);
const averageSalary = totalSalar / 7;
console.log(`Average salary is: ${averageSalary}`);


console.log('5)--------------IT or HR dept employee whose salary>75000-------------');
arrayEmployee.forEach( (element) => {
    if ( element.emp_salary >= 75000 && (element.emp_dept=="IT" || element.emp_dept=="HR") ) {
        element.getDetails()
    }
    })




   

    