const changeBtn = document.getElementById("changeBtn");
let pendingColor = document.getElementById("pendingColor");
const hexIndex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
console.log(changeBtn);

changeBtn.addEventListener("click", function () {
  generateFunction();
});
function generateFunction() {
  let generateColor = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexIndex.length);
    generateColor += hexIndex[random];
  }
  pendingColor.innerText = generateColor;
  document.body.style.background = generateColor;
  console.log(generateColor);
}

generateFunction();
