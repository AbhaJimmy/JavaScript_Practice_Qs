//Q1 - Print the marks of students in an object using for loop
const studentMarks = {
    'aman': 67,
    'tanvi': 78,
    'naman': 88,
    'suman': 75
}
const len = Object.keys(studentMarks).length
console.log("Name \t Marks")
for (let i=0; i<len; i++) {
    console.log(Object.keys(studentMarks)[i] + "\t " + studentMarks[Object.keys(studentMarks)[i]])
}

//Q2 - Write the above code using for-in loop
for (let key in studentMarks) {
    console.log(key + "\t " + studentMarks[key])
}

//Q3 - Print "try again" until the user enters the correct number
let num = 2
while (num != 2) {
    console.log("Try again") 
    //num = prompt("Enter number: ")
}
console.log("You have entered the correct number")

//Q4 - Write a function to find mean of 5 numbers
const meanOfFive = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}
console.log(meanOfFive(10,20,30,40,50))