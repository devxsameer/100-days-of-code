// your JavaScript file
const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);
const redText = document.createElement("p");
redText.innerText = `Hey I\'m red!`;
redText.style.color = "red";
container.appendChild(redText);
const blueHeading = document.createElement("h3");
blueHeading.innerText = `I\'m a blue h3!`;
blueHeading.style.color = `blue`;
container.appendChild(blueHeading);
const borderedDiv = document.createElement("div");
borderedDiv.style.border = "2px solid black";
borderedDiv.style.backgroundColor = "pink";
const headingInDiv = document.createElement("h1");
headingInDiv.innerText = `I\'m in a div`;
const paraInDiv = document.createElement("p");
paraInDiv.innerText = `ME TOO!`;
borderedDiv.appendChild(headingInDiv);
borderedDiv.appendChild(paraInDiv);
container.appendChild(borderedDiv);

container.addEventListener("click", (e) => {
  e.target.style.backgroundColor = "blue";
});
