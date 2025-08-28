// Q1 - Create a class to create a complex number. Create a constructor to set the real and the imaginary part.
// Q2 - Write a method to add 2 complex numbers in the above class.
// Q3 - Use getters and setters to get and set the real and the imaginary parts of a complex number.
class ComplexNums {
    constructor(real,imaginary) {
        this.real = real
        this.imaginary = imaginary
    }
    sum(b) {
        let real = this.real + b.real
        let imaginary = this.imaginary + b.imaginary
        return new ComplexNums(real,imaginary)
    }
    get real() {
        return this._real
    }
    get imaginary() {
        return this._imaginary
    }
    set real(_real) {
        this._real = _real 
    }
    set imaginary(_imaginary) {
        this._imaginary = _imaginary
    }
}
let num1 = new ComplexNums(4,10);
let num2 = new ComplexNums(5,2);       
let num3 = new ComplexNums();     
num3.real = 15
num3.imaginary = 7  
let sum = num1.sum(num2);
console.log(`Num3: ${num3.real} + ${num3.imaginary}i`)
console.log(`Sum: ${sum.real} + ${sum.imaginary}i`)

// Q4 - Create a class student from a class human. Override a method and see changes.
class Human { 
    constructor(name, age) {
        this.name = name[0].toUpperCase() + name.substring(1,name.length)
        this.age = age
    }
    isEmployed(job) {
        this.isEmployed = job
        console.log(`${this.name} is working in ${job}`)
    }

}
class Student extends Human {
    setBranch(branch) {
        this.branch = branch
    }
    setRno(rno) {
        this.rno = rno
    }
    isEmployed() {
        console.log(`${this.name} is a student and can work only after age 18`)
    }
}
let ram = new Human("ram",23)
let shyam = new Student("shyam",16)
ram.isEmployed("Govt. Job")
shyam.isEmployed()

// Q5 - See if Student class is an instance of Human class.
console.log(ram instanceof Human)       //true
console.log(shyam instanceof Human)     //true
console.log(ram instanceof Student)     //false
console.log(shyam instanceof Student)   //true
console.log(Student instanceof Human)   //false