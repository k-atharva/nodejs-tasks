var device = {model:"Apple",year:2020};
var d1 = device;
d1.model ="iphone 12"
console.log(device);


//assign() is used for cloning objects
var d2 = Object.assign({},device); 
console.log(d2);
d2.model = "iphone SE";
console.log(d1,device,d2);