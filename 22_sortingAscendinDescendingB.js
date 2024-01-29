
class Employee {
    constructor (emp_id, emp_name, emp_dept, emp_salary, emp_company){
    this.emp_id = emp_id;
    this.emp_name = emp_name;
    this.emp_dept = emp_dept;
    this.emp_salary = emp_salary;
    this.emp_company = emp_company;
    }
    getDetails(){
        console.log(`ID:${this.emp_id},    Name:${this.emp_name},     Department:${this.emp_dept},     Salary:${this.emp_salary},     Company:${this.emp_company}`);
    }
    }
    const emp_anil = new Employee(22, "Anil","IT",50000, "TCS");
    const emp_radha = new Employee(33, "Radha","HR",74000, "Wipro");
    const emp_rishi = new Employee(55, "Rishi","Finance",47000, "TCS");
    const emp_sonali = new Employee(66, "Sonali","Finance",45000, "Infy");
    const emp_monika = new Employee(77, "Monika","IT",40000, "Wipro");
    const emp_viny = new Employee(88, "Viny","IT",75000, "TCS");
    const emp_mahi = new Employee(99, "Mahesh","HR",85000, "Infy");
    const arrayEmployee = [emp_anil , emp_radha , emp_rishi ,  emp_sonali,emp_monika , emp_viny , emp_mahi]
    for (const element of arrayEmployee) {
        element.getDetails();
    }

    console.log(`1)----------------------Descending order of Employees-------------------------`);

    arrayEmployee.reverse();
    for (const element of arrayEmployee) {
        element.getDetails.emp_name;
        console.log(`ID: ${element.emp_id},   Name:${element.emp_name},     Department: ${element.emp_dept}`);
    }

    console.log(`2)----------------------Ascending order of Employee Department-------------------------`);

    arrayEmployee.sort((a, b) => {
        if (a.emp_dept < b.emp_dept) {
            return -1;
        }
        if (a.emp_dept > b.emp_dept) {
            return 1;
        }
        return 0;
    });
    
    for (const element of arrayEmployee) {
        element.getDetails.emp_id;
        console.log(`ID: ${element.emp_id},     Department: ${element.emp_dept},    Company:${element.emp_company}`);
    }

    
    console.log(`3)----------------------Descending order of Employee Salary-------------------------`);
    arrayEmployee.sort((b, c) => {
        if (b.emp_salary > c.emp_salary) {
            return -1;
        }
        if (b.emp_salary < c.emp_salary) {
            return 1;
        }
        return 0;
    });
    for (const element of arrayEmployee) {
        element.getDetails.emp_name;
        console.log(`Name: ${element.emp_name},    Salary: ${element.emp_salary},     Company:${element.emp_company}`);
    }

