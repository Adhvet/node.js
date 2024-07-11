//what are the methods available in global objects of node?
// PS C:\Users\adhve\Dev\node.js> node .\2-global-object.js
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     [Symbol(nodejs.util.promisify.custom)]: [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Getter/Setter],
//   btoa: [Getter/Setter],
//   performance: [Getter/Setter],
//   fetch: [Function: value],
//   crypto: [Getter]
// }

//example 1:
setTimeout(() => {
    console.log("hello");
}, 3000);  //after 3 seconds hello will be logged

//example 2:
const int = setInterval(() => {
    console.log('hello');  // after every 1 second it will print hello
}, 1000);

//example 3:
console.log(__dirname);  //gets the absolute path of the current folder
console.log(__filename);  //gets the absolute path of folder with the file name

