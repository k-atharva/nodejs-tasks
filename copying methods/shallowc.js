var person = {name:"xyz",age:22};
var p1 = person;
p1.name ="Atharva"
console.log(person);


//assign() is used for cloning objects
var p2 = Object.assign({},person); 
console.log(p2);
p2.name = "abc";
console.log(p1,person,p2);
