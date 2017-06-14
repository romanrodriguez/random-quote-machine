"use strict";
var quotes = [
    'Programs must be written for people to read, and only incidentally for machines to execute. - <em>Harold Abelson</em>',
    'So much technology, so little talent. - <em>Vernor Vinge</em>',
    'The greatest achievement of humanity is not its works of art, science, or technology, but the recognition of its own dysfunction. - <em>Eckhart Tolle</em>',
    'TV and the Internet are good because they keep stupid people from spending too much time out in public. - <em>Douglas Coupland</em>',
    'Computers are useless. They can only give you answers. - <em>Pablo Picasso</em>',
    'Just because something doesn’t do what you planned it to do doesn’t mean it’s useless. - <em>Thomas Edison</em>',
    'One machine can do the work of fifty ordinary men. No machine can do the work of one extraordinary man. - <em>Elbert Hubbard</em>',
    'Humanity is acquiring all the right technology for all the wrong reasons. - <em>R. Buckminster Fuller</em>',
    'Technological progress has merely provided us with more efficient means for going backwards. - <em>Aldous Huxley</em>',
    'The human spirit must prevail over technology. - <em>Albert Einstein</em>'
];
// Call Math.floor() function, which takes a parameter
// and rounds the number downward to the nearest integer.
// Pass in Math.random() as a parameter into Math.floor().
// The Math.random() function will generate a random decimal
// number between 0 and 1. We multiply it by the number of
// quotes.length array to generate a random number.
function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    // To randomly retrieve a quote from the quotes array and place
    // the quote into our HTML. Use the .innerHTML method to pass
    // a randomly retrieved quote as the value.
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

// Twitter button event handler
var quoteContainer = document.getElementById('quoteDisplay');
var textContent = quoteContainer.textContent;

$('#tweet').click(function() {
    window.open('https://twitter.com/intent/tweet?text=' + textContent);
});


// $('#tweet').click(function(){
// 	var tweetQuote = $('#quoteDisplay').innerHTML;
// 	window.open('https://twitter.com/intent/tweet?text=' + tweetQuote);
// });
