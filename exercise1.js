/*
    Compare the input taken from a user & a randomly generated number.
    Let the user know whether their guess was correct, greater or lower
    than the random number. 
*/
let num, count=0, randomNum = Math.floor((Math.random() * 100) + 1)
do {
    num = Number.parseInt(prompt("Enter a number[0-100]: "))
    if (num < randomNum) console.log(`${num} is smaller than the random number`)
    else console.log(`${num} is greater than the random number`)
    count++
} while (num != randomNum)
console.log(`That's correct! The number is ${num}`)
console.log(`You scored ${100-count} points`)
