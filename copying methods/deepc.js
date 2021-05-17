var person = {name:"abc",age :22,city: {name:"aurangabad"}}

var p1 = person;
p1.name  ="atharva";
console.log(person,p1);

var p2 =Object.assign({},person);
console.log(p2.city.name);


p2.city.name ="pune";
console.log(p1.city.name)
console.log(p1,p2);


//convert object to JSON and again JSON to Object and copy it to new object.
var p3 = JSON.stringify(person);
console.log(p3);
p3 = JSON.parse(p3);
console.log(p3);
p3.city.name = "vice city"
console.log(p3,person)