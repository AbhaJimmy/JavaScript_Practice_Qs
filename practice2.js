//Q1 - Use logical operators to find whether age of a person lies between 10 & 20
// const age = prompt("Enter your age: ") works in replt/browser
const age = 18
if (age >= 10 && age <= 20) console.log("Your age lies between 10 & 20")
else console.log("Your age doesn't lie between 10 & 20")

//Q2 - Demonstrate the use of switch case statements
const foodItem = "mango"
switch(foodItem) {
    case 'mango':
        console.log("Mangoes are sweet")
        break
    case 'orange':
        console.log("Oranges are sour")
        break
    case 'chilli':
        console.log("Chillies are spicy")
        break
    default:
        console.log("The food item is not sweet, sour or spicy")
}

//Q3 - Find whether a number is divisble by 2 & 3
const num1 = 18
if ((num1%2==0) && (num1%3==0))
    console.log("Number is divisible by both 2 & 3")
else
    console.log("Number is not divisible by 2 & 3")

//Q4 - Find whether a number is divisble by either 2 or 3
const num2 = 17
if ((num2%2==0) || (num2%3==0))
    console.log("Number is divisible by either 2 or 3")
else
    console.log("Number is neither divisible by 2 nor 3")

//Q5 - Demonstrate the use of ternary operator 
let str = (age>=18) ? "You can drive" : "You cannot drive"
console.log(str)