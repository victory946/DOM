const colorPickerInput = document.getElementById("color-picker-input");
const body = document.querySelector("body");

let color;

colorPickerInput.addEventListener("input", (e) => {
  console.log(e.target.value);
  color = e.target.value;
});

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    body.style.backgroundColor = color;
  }
});

const wordCountTextArea = document.getElementById("word-counter-textarea");
const wordCount = document.getElementById("word-count");
const startCountBtn = document.getElementById("start-count-btn");
console.log(wordCountTextArea, wordCount, startCountBtn);

let wordCountValue = 0;
let wordCountTextAreaValue = "";

wordCountTextArea.addEventListener("input", (e) => {
  console.log(e.target.value);
  wordCountTextAreaValue = e.target.value;
});

startCountBtn.addEventListener("click", () => {
  wordCountValue = wordCountTextAreaValue.split(" ").length;
  wordCount.textContent = `word Count: ${wordCountValue}`;
  console.log(wordCountValue);
});
 









                                                                                                                                                                                                                                