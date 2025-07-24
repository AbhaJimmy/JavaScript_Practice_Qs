// Write a LoadScript function using multiple callbacks and then using Promises as a solution to callback hell

//Using callbacks
const loadScript = (src, callback) => {
  let script = document.createElement("script");
  script.src = src;
  script.onload = () => callback(null, src);
  script.onerror = () => callback(new Error("[Error in src]"), src);
  document.body.append(script);
};
function hello1(error, src) {
  if (error) {
    console.log(`${error} occured while loading script with src ${src}`);
    return;
  }
  console.log("Hi!, bootstrap script loaded successfully");
}
function bye(error, src) {
  if (error) {
    console.log(`${error} occured while loading script with src ${src}`);
    return;
  }
  console.log("Bootstrap script loaded successfully, bye for now!");
}
loadScript("https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js", hello1);
loadScript("https://cdn.jsddelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js", bye);

//Callback hell
loadScript(
  "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js",
  function hello2(error, src) {
    if (error) {
      console.log(error);
      return;
    }
    loadScript(
      "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js",
      function hello2(error, src) {
        if (error) {
          console.log(error);
          return;
        }
        loadScript(
          "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js",
          function hello2(error, src) {
            if (error) {
              console.log(error);
              return;
            }
            loadScript(
              "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js",
              function hello2(error, src) {
                if (error) {
                  console.log(error);
                  return;
                }
                loadScript(
                  "https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js",
                  function hello2(error, src) {
                    if (error) {
                      console.log(error);
                      return;
                    }
                  }
                );
              }
            );
          }
        );
      }
    );
  }
);

//Using promises
const loadScript2 = (src) => {
    return new Promise((resolve,reject) => {
        let script2 = document.createElement('script')
        script2.src = src
        document.body.append(script2)
        script2.onload = () => {
            resolve("Script has been loaded successfully")
        }
        script2.onerror = () => {
            reject("Src contains some error")
        }
    })
}
    
//Chaining multiple handlers to avoid callback hell
let p1 = loadScript2("https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js")
p1.then((value)=>{
    console.log(value)
    return loadScript2("https://cdn.jsddelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js")
}).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log(`[${error}] error occurred while loading 2nd script`)
})