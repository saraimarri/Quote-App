const quote = document.getElementById("quote");
const author = document.getElementById("author");
const quoteButton = document.getElementById("quote-button");

function getQuote() {
  fetch("https://dummy-apis.netlify.app/api/quote")
    .then((response) => response.json())
    .then((data) => {
      quote.textContent = data.quote;
      author.textContent = data.author;
    });
}

quoteButton.addEventListener("click", getQuote);

getQuote();