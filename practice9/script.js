// Q1 - Load a JS file in browser using Promises. Alert the user when the load is complete.
const loadScript = async (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve(`Script with src ${src} loaded successfully`);
    };
    script.onerror = () => {
      reject(new Error("Script src has some issue"));
    };
  });
};
let p = loadScript(
  "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js"
);
p.then(alert).catch(alert);

// Q2 - Write the above question using async/await syntax.
const main2 = async () => {
  console.log(new Date().getMilliseconds());
  let p1 = await loadScript(
    "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js"
  );
  console.log(new Date().getMilliseconds());
  alert(p1);
};
main2();

// Q3 - Create a promise which rejects after 3 seconds. Use async/await to get its value & try and catch to handle any errors.
const rejectPromise = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inside setTimeout");
      reject(new Error("False"));
    }, 3000);
  });
};
const main3 = async () => {
  try {
    let result = await rejectPromise();
    console.log(result);
  } catch (err) {
    console.log(`The error [${err}] has been handled`);
  }
};
main3();

// Q4 - Await 3 promises using Promises.all(). Compare the results with the case where we await the promises one by one.
let p1 = async () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I'm promise-1");
      resolve(true);
    }, 1000);
  });
};
let p2 = async () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I'm promise-2");
      resolve(true);
    }, 2000);
  });
};
let p3 = async () => {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I'm promise-3");
      resolve(true);
    }, 3000);
  });
};
const awaitPromises1 = async () => {
  console.time("run");
  let r1 = await p1();
  let r2 = await p2();
  let r3 = await p3();
  console.timeEnd("run");
  console.log(r1, r2, r3);
};
awaitPromises1(); 

const awaitPromises2 = async () => {
  console.time("run");
  let r1 = p1()
  let r2 = p2()
  let r3 = p3()
  let r = await Promise.all([r1, r2, r3]);
  console.timeEnd("run");
  console.log(r);
};
awaitPromises2()
