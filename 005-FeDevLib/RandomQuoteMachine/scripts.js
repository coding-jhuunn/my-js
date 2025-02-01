// const api_url = "https://quotes-api-self.vercel.app/quote";

// async function getapi(url) {
//   const response = await fetch(url);
//   var data = await response.json();
//   return data;
// }

// let value = getapi(api_url);

// console.log(value);
// "https://quotes-api-self.vercel.app/quote"
// api to be used
const settings = {
  async: true,
  crossDomain: true,
  url: "https://quotes-api-self.vercel.app/quote",
  method: "GET",
};

$.ajax(settings).done(function (response) {
  const data = JSON.parse(response);
  console.log(data);
});
