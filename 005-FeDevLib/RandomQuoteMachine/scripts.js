const api_url = "https://quotes-api-self.vercel.app/quote";

const hexColorIndex = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];
let hexColorFinal = "#";
function randomHexColor(arr) {
  for (let index = 0; index < 6; index++) {
    const randomIndex = Math.floor(Math.random() * hexColorIndex.length);
    hexColorFinal += arr[randomIndex];
  }
  return hexColorFinal;
}

let dataStore;
$("#new-quote").click(function () {
  fetchData();
});
async function fetchData() {
  try {
    let response = await fetch(api_url);
    dataStore = await response.json(); // Store data in variable
    $("#text").text(dataStore.quote);
    $("#author").text(dataStore.author);
    let colorPallete = randomHexColor(hexColorIndex);
    $("body").css("background-color", colorPallete);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData();
