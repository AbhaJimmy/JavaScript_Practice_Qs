// Q1 - Print the following after a 2 second delay.
        // Hello
        // World
const p = (text) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve(text)
        },2000)
    })
}
(
    async () => {
        let text = await p("Hello") 
        console.log(text)
        text = await p("World") 
        console.log(text)
    }
)();

// Q2 - Find average of numbers in an array using spread syntax.
const arr = [1,2,3,4,5]
function calcAvg([...nums]) {
    let sum = nums.reduce((first,second)=>first+second,0)
    let avg = sum / nums.length
    return avg
}
let result = calcAvg(arr)
console.log(result)

// Q3 - Write a function which resolves a Promise after 'n' seconds. The function takes 'n' as the parameter. 
// Use an IIFE to execute the functions with different values of 'n'.
const p2 = (text,n) => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=> {
            resolve(text)
        },1000*n)
    })
}
(
    async () => {
        let text = await p2("I'm resolving after 2 seconds",2)
        console.log(text)
        text = await p2("I'm resolving after 5 seconds",5)
        console.log(text)
    }
)();

// Q4 - Write a simple interest calculator.
const simpleInterest = (principle,rate,time) => {
    return (principle*rate*time)/100;
}
console.log(simpleInterest(300000,4.5,5))