//Q1 - What will the following print-
console.log("har\"".length)             //Output = 4

//Q2 - Explore the includes, startsWith & endsWith functions of a string
let sentence = "This is a string to implement functions"
let word = "glass" 

console.log(
    `The sentence ${sentence.includes(word) ? "includes" : "does not include"} the word "${word}"`
)

console.log(sentence.startsWith("Thi"))
console.log(sentence.startsWith("string"))
console.log(sentence.startsWith("This", 6))

console.log(sentence.endsWith("string"))
console.log(sentence.endsWith("functions"))
console.log(sentence.endsWith("string", 16))

//Q3 - Convert a given string to lowercase
console.log(sentence.toLowerCase())

//Q4 - Extract the amount out of this string - "Please give Rs.1000"
let str = "Please give Rs.1000"
let amount = Number.parseInt(str.slice("Please give Rs.".length))
console.log(amount)
console.log(typeof amount)

//Q5 - Try to change the 4th character of  a given string. Were you able to do it?
str[3] = `i`
console.log(str)                    //strings are immutable