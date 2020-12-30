//possibly write array by season and nest season array's inside quote array
let quotesSeason1 = [
    'Michael: This is our receptionist, Pam. Pam! Pam-Pam! Pam Beesly. Pam has been with us for… forever. Right, Pam?     Pam: Well. I don’t know.    Michael: If you think she’s cute now, you should have seen her a couple of years ago.',
    'Michael: Any messages?   Pam: Uh, yeah. Just a fax.     Michael: Oh! Pam, this is from Corporate. How many times have I told you? There’s a special filing cabinet for things from corporate.     Pam: You haven’t told me.      Michael: It’s called the wastepaper basket! Look at that! Look at that face.',
    'Michael: People say I am the best boss. They go, “God we’ve never worked in a place like this before. You’re hilarious.” “And you get the best out of us.” (shows the camera his WORLD’S BEST BOSS mug) I think that pretty much sums it up. I found it at Spencer Gifts.'
];
let new-quote = document.querySelector('.new-quote');
// new-quote.addEventListener('click', displayQuote);

function displayQuote() {
    let quotesRandom = Math.floor(Math.random() * quotesSeason1.length);

    // display the quote of that index
    let div = document.querySelector('#js-quote-text');
    let quote = `<div class="card">
<img src="icons/favicon.png">
<p>${quotes[index]}</p>
<img src="icons/favicon.png">
</div>
`;
    div.innerHTML = quote;
}
new-quote.addEventListener('click', displayQuote;