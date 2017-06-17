var tweetUrl = "";
var quotes = [
    'Programs must be written for people to read, and only incidentally for machines to execute. - Harold Abelson',
    'So much technology, so little talent. - Vernor Vinge',
    'The greatest achievement of humanity is not its works of art, science, or technology, but the recognition of its own dysfunction. - Eckhart Tolle',
    'TV and the Internet are good because they keep stupid people from spending too much time out in public. - Douglas Coupland',
    'Computers are useless. They can only give you answers. - Pablo Picasso',
    'Just because something doesn’t do what you planned it to do doesn’t mean it’s useless. - Thomas Edison',
    'One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man. - Elbert Hubbard',
    'Humanity is acquiring all the right technology for all the wrong reasons. - R. Buckminster Fuller',
    'Technological progress has merely provided us with more efficient means for going backwards. - Aldous Huxley',
    'The human spirit must prevail over technology. - Albert Einstein'
];

function newQuote() {
	// Call Math.floor() function, which takes a parameter
	// and rounds the number downward to the nearest integer.
	// Pass in Math.random() as a parameter into Math.floor().
	// The Math.random() function will generate a random decimal
	// number between 0 and 1. We multiply it by the number of
	// quotes.length array to generate a random number.
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    var randomQuote = quotes[randomNumber];
    // To randomly retrieve a quote from the quotes array and place
    // the quote into our HTML. Use the .innerHTML method to pass
    // a randomly retrieved quote as the value.
    document.getElementById('quoteDisplay').innerHTML = randomQuote;
    var shareQuote = randomQuote;
    // Use regex to replace spaces in a string with + to work with the URL.
    shareQuote.replace(/\s/g, "+");
    tweetUrl = "https://twitter.com/intent/tweet?text=" + randomQuote;
    document.getElementById('tweet').setAttribute("href", tweetUrl);
}