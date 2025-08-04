// Promise API and its 6 static methods

let p1 = new Promise(resolve => {
    setTimeout(()=>{
        resolve(1)
    },10000)
})
let p2 = new Promise((resolve,reject) => {
    setTimeout(()=>{
        // resolve(2)
        reject(false)
    },2000)
})
let p3 = new Promise(resolve => {
    setTimeout(()=>{
        resolve(3)
    },3000)
})

// Promise.all(promises) - It takes an array of promises as an argument & waits for all to resolve & returns their value. If any  promise fails, it throws an error & all other results are ignored. Catch method can be used to catch the error and get the other results.
let promise_all = Promise.all([p1,p2,p3])
promise_all.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})

// Promise.allSettled(promises) - It waits for all promises to be fulfilled & returns an object with their statuses and values.
let promise_all_settled = Promise.allSettled([p1,p2,p3])
promise_all_settled.then((value)=>{
    console.log(value)
})

// Promise.race(promises) - It returns the promise which gets fulfilled first and its result/error becomes the output.
let promise_race = Promise.race([p1,p2,p3])
promise_race.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(error)
})

// Promise.any(promises) - It returns the promise which gets fulfilled first (not rejected). Its result becomes the output. Returns an Aggregate error if all the promises are rejected.
let promise_any = Promise.any([p1,p2,p3])
promise_any.then((value)=>{
    console.log(value)
})

// Promise.resolve(value) - Makes a resolved promise with the given value. If the value is a rejected promise, it resolves to a rejected promise.
let promise_resolve1 = Promise.resolve("4th promise")
let promise_resolve2 = Promise.resolve(p2)
console.log(promise_resolve1)
promise_resolve1.then((value)=>{
    console.log(value)
})
console.log(promise_resolve2)

// Promise.reject(error) - Makes a rejected promise with the given error.
let promise_reject1 = Promise.reject(p2)
console.log(promise_reject1)
promise_reject1.catch((error)=>{
    console.log(error)
})