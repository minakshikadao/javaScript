

class Student{
    // Data member or properties
    // Constructor
    constructor(id,name, city, marks ){
        this.id = id;
        this.name = name;
        this.city = city;
        this.marks = marks;
    }

    // Member Functions or methods
    getDetails(){

       console.log(`ID: ${this.id}, Name: ${this.name}, City: ${this.city}, Marks: ${this.marks}`);

    }
}

const jenny = new Student(11, "Jenny", "Pune", 70);
console.log(jenny.name);
jenny.getDetails();


const bill = new Student(22, "Bill", "LA", 60);
//console.table(bill);
bill.getDetails();