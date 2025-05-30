// Q1. Create an array of numbers and take input from the user to add numbers to this array.
let arr = [10,20,30,40,50,45,29,64]
let val = Number.parseInt(prompt("Enter value: "))
arr.push(val)

// Q2. Keep adding numbers to an array in Q1 until the user adds 0.
let value
do {
    value = Number.parseInt(prompt("Enter value: "))
    arr.push(value)
} while(value != 0)

// Q3. Filter the numbers that are divisble by 10 from an array.
let newArr = arr.filter((element) => {
    return (element%10 == 0)
})
console.log(newArr)

// Q4. Create an array of squares of a given number
let squares = arr.map((element) => {
    return element*element
})
console.log(squares)

// Q5. Use reduce to calculate the factorial of a given number from an array of first n natural numbers. 
let n = 5
let naturalNums = [1,2,3,4,5]
let factorial = naturalNums.reduce((a,b) => {
    return a*b
})
console.log(factorial)