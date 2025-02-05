const api_url = "https://quotes-api-self.vercel.app/quote";
const colorPallete = [
  "#5d275d",
  "#b13e53",
  "#ef7d57",
  "#ffcd75",
  "#257179",
  "#29366f",
  "#333c57",
  "#3b5dc9",
];
$(document).ready(function () {});

let dataStore;

async function fetchData() {
  try {
    let response = await fetch(api_url);
    dataStore = await response.json(); // Store data in variable
    $("#text").text(dataStore.quote);
    $("#author").text(dataStore.author);
    const randomIndex = Math.floor(Math.random() * colorPallete.length);
    $("body").css("background-color", colorPallete[randomIndex]);
  } catch (error) {
    console.error("Error:", error);
  }
}
console.log(colorPallete[2]);
fetchData();
