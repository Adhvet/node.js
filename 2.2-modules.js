//to import shit
const anyName = require('./2.2-people'); //we imported 2.1 in this file, also now anyName is equal to the object exported in 2.2-people
const {people} = require('./2.2-people'); //this is called destructuring and is used to import only one thing from the exported object, here only people is imported
const os = require('os');  //os is a core node module and can be imported from anyfile, there are many such core objects that can be imported


console.log(anyName);
console.log(anyName.people, anyName.ages);
//on running 2.2-modules.js node will import the 2.2-people file and run it, so all the print statements in 2.2 will get printed on running 2.2
//even after inporting we cant access the variables in this file unlike flutter
//to acces vairables we need to export it from 2.2-people


