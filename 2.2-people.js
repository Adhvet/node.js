const people = ['yash', 'ryu', 'riya', 'prakash']; //imported in 2.2-modules
console.log(people);

const ages = [20,30,40,50];

//to export a single variable
module.exports = people;

//to export multiple variables we make an object, and each key of the object is mapped to the variable exported
module.exports = {
    people: people,      //the variable people is mapped to the key people
    ages: ages,          //the variable ages is mapped to the ages people
};                       //the entire object containg people and ages is exported 