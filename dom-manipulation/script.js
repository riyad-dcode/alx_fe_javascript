let quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Motivation" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", category: "Life" },
    { text: "The purpose of our lives is to be happy.", category: "Happiness" }
];


function loadQuotes() {
    const storedQuotes = localStorage.getItem('quotes');
    if (storedQuotes) {
        quotes = JSON.parse(storedQuotes);
    }
}


function showRandomQuote() {
    if (quotes.length === 0) {
        document.getElementById('quote-text').innerHTML = "No quotes available.";
        return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote-text').innerHTML = quotes[randomIndex].text;
}


function createAddQuoteForm(event) {
    event.preventDefault();
    const quoteText = document.getElementById('quote-text-input').value;
    const quoteCategory = document.getElementById('quote-category-input').value;

    const newQuote = { text: quoteText, category: quoteCategory };
    quotes.push(newQuote);
    localStorage.setItem('quotes', JSON.stringify(quotes));

    document.getElementById('quote-text-input').value = '';
    document.getElementById('quote-category-input').value = '';
}


function exportQuotes() {
    const json = JSON.stringify(quotes, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quotes.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}


function importQuotes(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const importedQuotes = JSON.parse(e.target.result);
            quotes = quotes.concat(importedQuotes);
            localStorage.setItem('quotes', JSON.stringify(quotes));
        };
        reader.readAsText(file);
    }
}


document.getElementById('show-quote-btn').addEventListener('click', showRandomQuote);
document.getElementById('quote-form').addEventListener('submit', createAddQuoteForm);
document.getElementById('export-btn').addEventListener('click', exportQuotes);
document.getElementById('import-file').addEventListener('change', importQuotes);


loadQuotes();
