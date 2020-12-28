// following js code for random quote generator taken from US tv show The Office.
const twitterButton = document.querySelector('#js-tweet');
const spinner = document.querySelector('#js-spinner');
const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://officeapi.dev/api/quotes/random';

async function getQuote() {
    spinner.classList.remove('hidden');
    newQuoteButton.disabled = true;

    try {
        const response = await fetch(endpoint)
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json();
        displayQuote(json.message);
        setTweetButton(json.message);
    } catch {
        alert('Failed to fetch new quote');
    } finally {
        newQuoteButton.disabled = false;
        spinner.classList.add('hidden');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function setTweetButton(quote) {
    twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}