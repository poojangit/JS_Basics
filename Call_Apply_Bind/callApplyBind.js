//todo ----------CAll, APPLY, BIND---------------------

//^ these methods in javascript allow us to explicitly set the value of 'this' when invoking a function

//& Call()
//! by using call we can borrow functions from other methods
let nameFunc = {
    firstName: "Pooja",
    lastName: "NG",
    // printFullName : function() {
    //     console.log(`${this.firstName} ${this.lastName}`);   
    // }
}
let printFullName = function (hometown, state) {
    console.log(`${this.firstName} ${this.lastName} ${hometown} ${state}`);
}
// nameFunc.printFullName()
printFullName.call(nameFunc, "Udupi", "Karnataka")

let name2 = {
    firstName: "Preethi",
    lastName: "Zinta"
}
// nameFunc.printFullName.call(name2)
printFullName.call(nameFunc, "Udupi", "Karnataka")

//& apply()

printFullName.apply(name2, ["Udupi", "Karnataka"])

//& bind()

let printMyName = printFullName.bind(name2,"Udupi", "Karnataka")
console.log(printMyName);
printMyName()

//~ Example 2

const person = {
    fullName : function(city, country){
        console.log(`${this.firstName} ${this.lastName} from ${city}, ${country}`);
    }
}
const person1 = {firstName: "Pooja", lastName: "NG"}
person.fullName.call(person1, "Bengaluru", "India")

person.fullName.apply(person1, ["Bengaluru", "India"])

const printName = person.fullName.bind(person1)
printName("Pune", "India")

