var car1 = {
    name: "Q2",
    Year: 2021,
    engine:"turbocharged 2.0",
    updateYear: function(){
        return ++car1.Year; 
    }
}

var car2 = {
    name: "Brio",
    Year: 2014,
    engine:"iv-tech 1.2",
    updateYear: function(){
        return ++car2.Year; 
    }
}

var car3 = {
    name: "I10",
    Year: 2011,
    engine:"Asta 1.2 Kappa2",
    updateYear: function(){
        return ++car3.Year; 
    }
}
console.log(car1.Year)
console.log(car2.Year)
console.log(car3.Year)
car1.updateYear();
car2.updateYear();
car3.updateYear();