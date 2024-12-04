//todo ----------PROTOTYPES----------------

//^ Js objects have a special property called prototype
//^ Every js objects have internally linked  to another objects called prototype
//^ prototypes allow objects to inherit properties and methods from other objects.
//^ We can set prototypes using __proto__

//~Example 1 

// const employee = {
//     calcTax() {
//         console.log("Tax rate is 10%");
//     }
// }
// const poojaNG = {
//     salary : 100000
// }
// const preethi = {
//     salary : 10000,
//     calcTax() {
//         console.log("Tax rate is 20%");
        
//     }
// }
// poojaNG.__proto__ = employee
// preethi.__proto__ = employee

//~ Example 2

// function Animal(name){
//     this.name = name
// }

// Animal.prototype.speak = function() {
//     console.log(this.name + ' makes a noise');
// }

// let Dog = new Animal('dog')
// Dog.speak()

//~ Example 3

function Person(name){
    this.name = name
}
function Product(name){
    this.name = name
}
Person.prototype.greet = function() {
    console.log(`Hello ${this.name}`);
}
Product.prototype.price  = function() {
    console.log(`price of the product is ${this.name}`);
    
}
let human = new Person("Poo")
let human2 = new Person("Preethi")
human.greet()
human2.greet()
let chair = new Product(100)
chair.price()

//^ Prototypes in js allows objects and functions to share methods and properties efficiently.

