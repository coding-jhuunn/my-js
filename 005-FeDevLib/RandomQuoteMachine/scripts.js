const api_url = "https://quotes-api-self.vercel.app/quote";

// function loadData() {
//   let result = {};

//   fetchData(api_url, result);
//   $("text").text(result.quote);
//   $("author").text(result.author);
//   console.log(result);
//   console.log(result.quote);
// }
// $(function () {
//   loadData();
// });
$(document).ready(function () {});

let dataStore;

async function fetchData() {
  try {
    let response = await fetch(api_url);
    dataStore = await response.json(); // Store data in variable
    $("#text").text(dataStore.quote);
    $("#author").text(dataStore.author);
  } catch (error) {
    console.error("Error:", error);
  }
}
$("#new-quote").click(function () {
  fetchData();
});

$(document).ready(function () {
  fetchData();
});
