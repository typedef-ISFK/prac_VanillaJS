const quotes = [
  {
    "quote": "The only thing we have to fear is fear itself.",
    "author": "Franklin D. Roosevelt"
  },
  {
    "quote": "In the end, we will remember not the words of our enemies, but the silence of our friends.",
    "author": "Martin Luther King Jr."
  },
  {
    "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "quote": "What lies behind us and what lies before us are tiny matters compared to what lies within us.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "The way to get started is to quit talking and begin doing.",
    "author": "Walt Disney"
  },
  {
    "quote": "I have not failed. I've just found 10,000 ways that won't work.",
    "author": "Thomas A. Edison"
  },
  {
    "quote": "It is never too late to be what you might have been.",
    "author": "George Eliot"
  },
  {
    "quote": "You must be the change you wish to see in the world.",
    "author": "Mahatma Gandhi"
  },
  {
    "quote": "An investment in knowledge pays the best interest.",
    "author": "Benjamin Franklin"
  }
]

const quote = document.getElementById("quote-text");
const author = document.getElementById("quote-author");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
