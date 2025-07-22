const demoContainer = document.querySelector(".demo");
function player(name, level) {
  this.name = name;
  this.level = level;
}
player1 = new player("Haya", "Ace");
player.prototype.greet = function () {
  return `hello, ${this.name}`;
};

console.log(player1);
console.log(player1.__proto__);
console.log(Object.getPrototypeOf(player1));
console.log(Object.getPrototypeOf(player1) == player.prototype);
console.log(player1.greet());
