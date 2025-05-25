//Q1 - Create a variable of type string and try to add a number to it
let str = "you're a string"
let num = 5
console.log(str + num)

//Q2 - Use typeof operator to find datatype of string in Q1
console.log(typeof(str))
console.log(typeof(str+num))

//Q3 - Create a const object. Can you change it to hold a number later?
const obj = {
    "animal": "zebra",
    "bird": "pigeon",
    age: 15
}
obj = 12                  //TypeError: Assignment to constant variable.

//Q4 - Try to add a new key to the const object in Q3. Is it possible?
obj['isStudent'] = true    //possible
obj['age'] = 20            //possible
console.log(obj)
//"obj" is a reference to an object. It cannot hold a string/number, i.e., its datatype cannot be changed, but new keys can be added.

//Q5 - Create a word-meaning dictionary of 5 words
const spanishWords = {
    'hola': "hello",
    'madre': "mother",
    'padre': "father",
    'hermano': "brother",
    'hermana': "sister",
    'abuelo': "grandfather",
    'abuela': "grandmother"
}
console.log(spanishWords.hola)
//OR
console.log(spanishWords['hermano'])