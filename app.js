// following js code for random quote generator taken from US tv show The Office.
const newQuoteButton = document.querySelector("#js-new-quote");
newQuoteButton.addEventListener("click", getQuote);
const endpoint = "https://officeapi.dev/api/quotes/random";

function getQuote() {
    console.log("Quote button was clicked!");
}

async function getQuote() {
    // The `try` block executes the statements within it as usual.
    // If an exception is thrown, the statements defined in
    // the `catch` block will be executed.
    try {
        const response = await fetch(endpoint)
        // If the response is not 200 OK...
        if (!response.ok) {
            throw Error(response.statusText)
        }

        const json = await response.json();
        console.log(json);
    } catch (err) {
        console.log(err)
        alert('Failed to fetch new quote');
    }
}