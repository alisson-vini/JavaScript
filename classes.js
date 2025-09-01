// class creation (look like Python)

class Person { // class creation
    constructor(name, age){
        this.name = name; // property
        this.age = age; // property
    }

    introdution(){ // method
        console.log(`Hellow, my name is ${this.name}, I am ${this.age} years old end I'm learning JS`)
    }
}

// inheritance
// when we construct a class using inheritance its inherits the property and method of the constructor class

class Student extends Person{
    constructor(name, age, course){
        super(name, age); // call the parent constructor
        this.course = course;
    }
}

student = new Student("Alisson", 19, "Computer Science")
console.log(`Hello, my name is ${student.name}, I'm ${student.age} and I study ${student.course}`)