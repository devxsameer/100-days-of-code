// const myObj = new Object();
// // console.dir(myObj);
// // console.dir(Object.getPrototypeOf(myObj));
// console.log(myObj.toString());
// let y = new Array();
// // console.dir(Object.getPrototypeOf(y) == Array.prototype); //true
// // console.dir(Object.prototype.isPrototypeOf(y)); //true
// // Initialize a constructor function for a new Hero
// function Hero(name, level) {
//   this.name = name;
//   this.level = level;
// }
// // let hero1 = new Hero("Sameer", 1);
// // let hero2 = new Hero("Haya", 1);
// // ...
// // Initialize Warrior constructor
// function Warrior(name, level, weapon) {
//   // Chain constructor with call
//   Hero.call(this, name, level);

//   // Add a new property
//   this.weapon = weapon;
// }

// // Initialize Healer constructor
// function Healer(name, level, spell) {
//   Hero.call(this, name, level);

//   this.spell = spell;
// }
// Object.setPrototypeOf(Warrior.prototype, Hero.prototype);
// Object.setPrototypeOf(Healer.prototype, Hero.prototype);
// Warrior.prototype.attack = function () {
//   return `${this.name} attacks with the ${this.weapon}.`;
// };

// Healer.prototype.heal = function () {
//   return `${this.name} casts ${this.spell}.`;
// };
// // Add greet method to the Hero prototype
// Hero.prototype.greet = function () {
//   return `${this.name} says hello.`;
// };
// const hero1 = new Warrior("Sameer", 1, "axe");
// const hero2 = new Healer("Haya", 1, "cure");
// console.dir(hero1);
// console.dir(hero2);
// console.dir(hero1.attack());
// console.log(hero2.greet());
console.log(this);
