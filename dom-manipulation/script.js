let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
    { text: "The purpose of our lives is to be happy.", category: "Happiness" }
];

function showRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote-display').innerText = quote.text;
    document.getElementById('quote-category').innerText = `Category: ${quote.category}`;
}

function createAddQuoteForm() {
    const form = document.getElementById('quote-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const quoteText = document.getElementById('quote-text').value;
        const quoteCategory = document.getElementById('quote-category-input').value;

        quotes.push({ text: quoteText, category: quoteCategory });

        document.getElementById('quote-text').value = '';
        document.getElementById('quote-category-input').value = '';
    });
}

document.getElementById('new-quote').addEventListener('click', showRandomQuote);

createAddQuoteForm();
