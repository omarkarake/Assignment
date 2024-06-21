const url = "https://api.adviceslip.com/advice";

const getJson = async function (url, errorMessage = "Something Went Wrong") {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`${errorMessage} (${response.status})`);
  return await response.json();
};

let advice;

const quote = document.getElementById("quote");
const quoteId = document.getElementById("quote-id");
const nextQuote = document.getElementById("outer-select");

const getJsonAdviceData = function (
  url,
  errorMessage = "Something Went Wrong"
) {
  getJson(url).then((data) => {
    quoteId.innerText = data.slip["id"];
    advice = data.slip["advice"];
    quote.innerText = advice;
  });
};

getJson(url).then((data) => {
  quoteId.innerText = data.slip["id"];
  advice = data.slip["advice"];
  quote.innerText = advice;
});

nextQuote.addEventListener("click", (e) => {
  e.preventDefault();
  getJsonAdviceData(url);
});
