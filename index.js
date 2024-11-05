const titleElement = document.getElementById("page-title");
titleElement.style.color = "red";
console.log(titleElement);
// for getting elements based on Id

const famContacts = document.getElementsByClassName("family");
console.log(famContacts);
console.log(famContacts[0]);
// for getting elements based on className

const allContacts = document.getElementsByTagName("p");
console.log(allContacts);
// for getting elements based on TagName

const firstWorkContact = document.querySelector(".work");
console.log(firstWorkContact);

const thirdBtn = document.querySelector("div button:nth-child(3)");
console.log(thirdBtn);

const allBtns = document.querySelectorAll("button");
allBtns.forEach((btn) => (btn.style.backgroundColor = "red"));
allBtns.forEach((btn) => (btn.style.color = "black"));
console.log(allBtns);

allBtns.forEach((btn) => console.log(btn));

const topicElement = document.querySelector("#topic");

topicElement.innerHTML = " <p>This is a message i need<b> money💰 </b></p>";

const paragraph = document.querySelector("p");

console.log("innerText: ", paragraph.innerText);
console.log("textContent: ", paragraph.textContent);

const text_Content = document.getElementById("textContent");
const inner_text = document.getElementById("inner-text");
console.log(text_Content, inner_text);

let address = `
  ABC Street,
  Spintex Road,
  Accra,
  Ghana.
`;

text_Content.textContent = address;
inner_text.innerText = address;

console.log(text_Content, inner_text);

const imageElement = document.querySelector("img");
console.log(imageElement.getAttribute("alt"));

console.log("BEFORE:", imageElement.getAttribute("src"));
imageElement.setAttribute("src", "new-image.jpg");
console.log("AFTER:", imageElement.getAttribute("src"));

console.log("BEFORE:", imageElement.getAttribute("height"));
imageElement.removeAttribute("height", "200");
console.log("AFTER:", imageElement.getAttribute("height"));

const header = document.querySelector("h1");
header.style.fontSize = "2em";
header.style.textAlign = "center";
header.style.textTransform = "uppercase";
header.style.borderRadius = "5px";
console.log(header.style);

const jollofParagraph = document.querySelector("p");

console.log(jollofParagraph.className);

jollofParagraph.className = "favorite";

console.log(jollofParagraph.className);

console.log(header.className);
header.className = "title";

const jollofParagraph2 = document.getElementById("jollof");
jollofParagraph2.classList.add("food", "nigerian");
jollofParagraph2.classList.replace("nigerian", "canadian");
console.log(jollofParagraph2.classList);

const italicizedText = document.getElementById("italics");
console.log(italicizedText);
console.log(italicizedText.parentNode);
console.log(italicizedText.parentNode.parentNode);

const container = document.getElementById("container");

const containerChildNodes = container.childNodes;
const containerChildren = container.children;

console.log(containerChildNodes);
console.log(containerChildren);

const myButton = document.getElementById("myButton");
console.log(myButton);

myButton.addEventListener("click", () => {
  alert("Button clicked");
});
