// variables

let btn = document.querySelector('#new-quote');
let quotes = document.querySelector('.quotes');
let saidBy = document.querySelector('.said-by')

const quotesLibraray = [{ 
    quotes: "Don’t just read the easy stuff. You may be entertained by it, but you will never grow from it.",
    saidBy: " Jim Rohn"
}, {
    quotes: "Don’t say, ‘If I could, I would.’ Say, ‘If I can, I will.",
    saidBy: " Jim Rohn"
}, {
    quotes: "The way to get started is to quit talking and begin doing.",
    saidBy: "Walt Disney"
}, {
    quotes: "If you spend too much time thinking about a thing, you'll never get it done.",
    saidBy: " Bruce Lee"
}, ];

btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotesLibraray.length);

    quotes.innerText = quotesLibraray[random].quotes;
    saidBy.innerText = quotesLibraray[random].saidBy;
}) 