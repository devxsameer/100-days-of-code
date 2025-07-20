// DOM Manipulation
const demoContainer = document.querySelector(".demo");
demoContainer.innerHTML = `<h1></h1>`;
demoContainer.childNodes[0].style.color = "red";

// Object Literal
myObj = {
  name: "sameer",
  age: 17,
  "likes movies": true,
};
// Iterating the Object
for (let key in myObj) {
  // Showing Object in Browser
  demoContainer.childNodes[0].innerHTML += `${key.toUpperCase()}:${
    myObj[key]
  }<br>`;
}
// Object Constructor
function Player(name, marker) {
  // For Raising Error if called without new keyword
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.name = name;
  this.marker = marker;
  this.sayName = function () {
    console.log(this.name);
  };
}
// Creating Objects from Object Constructor
const player1 = new Player("sameer", "X");
const player2 = new Player("haya", "O");
player2.sayName();

// Book Object Constructor
function Book(title, author, pages, read) {
  // For Raising Error if called without new keyword
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  //   Main properties
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => {
    return `${title} by ${author}, ${pages} pages, ${
      read ? "read it" : "not read yet"
    }`;
  };
}
const myBook1 = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(myBook1.info());
console.log(myBook1);
// Prototype
console.log(Object.getPrototypeOf(myBook1));
console.log(Object.getPrototypeOf(myBook1) == Book.prototype);
console.log(Object.prototype);
