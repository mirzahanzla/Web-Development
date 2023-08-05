function clearAll() {
  const meme = document.querySelector(".meme-content");
  const joke = document.querySelector(".joke-content");
  const quote = document.querySelector(".quote-content");
  const riddle = document.querySelector(".riddle-content");

  meme.innerHTML = "";
  joke.innerHTML = "";
  quote.innerHTML = "";
  riddle.innerHTML = "";
}

function showMeme() {
  // Value should be a string representing image URL
  const randomMemeUrl = getRandomData("memes");

  const memeContainer = document.querySelector(".meme-content");
  const newMeme = document.createElement("img");
  newMeme.setAttribute("src", randomMemeUrl);

  clearAll();

  // Add the new img to the document
  memeContainer.appendChild(newMeme);
}

function showJoke() {
  // Value should be a string representing the joke
  const randomJokeText = getRandomData("jokes");

  const jokeContainer = document.querySelector(".joke-content");
  const newJoke = document.createElement("p");
  newJoke.textContent = randomJokeText;

  clearAll();

  // Add the new img to the document
  jokeContainer.appendChild(newJoke);
}

function showQuote() {
  // Value should be in format: { quote: '', author: '' }
  const randomQuote = getRandomData("quotes");

  const quoteContainer = document.querySelector(".quote-content");

  const newQuoteText = document.createElement("p");
  const newQuoteAuthor = document.createElement("p");
  newQuoteText.textContent = randomQuote.quote;
  newQuoteAuthor.textContent = "- " + randomQuote.author;

  clearAll();

  quoteContainer.appendChild(newQuoteText);
  quoteContainer.appendChild(newQuoteAuthor);
}

function showRiddle() {
  // Value should be in format: { question: '', answer: '' }
  const randomRiddle = getRandomData("riddles");

  const riddleContainer = document.querySelector(".riddle-content");

  const newRiddleText = document.createElement("p");
  const newRiddleAnswer = document.createElement("p");

  newRiddleText.textContent = randomRiddle.question;
  newRiddleAnswer.textContent = "- " + randomRiddle.answer;
  newRiddleAnswer.setAttribute("id", "riddle-answer");

  clearAll();

  newRiddleAnswer.hidden = true;

  riddleContainer.appendChild(newRiddleText);
  riddleContainer.appendChild(newRiddleAnswer);
}

function revealAnswers() {
  const riddleContent = document.querySelector(".riddle-content");
  const riddle = riddleContent.querySelector("p");
  const riddleAnswer = document.querySelector("#riddle-answer");

  if (riddle && riddleAnswer.hidden) {
    riddleAnswer.hidden = false;
  } else if (riddle && riddleAnswer) {
    alert("The riddle answer is already exposed!");
  } else {
    alert("There is no riddle to show the answer for!");
  }
}

function getRandomData(type) {
  return data[type][ran(data[type].length)];
}

// Source: https://www.thecoderpedia.com/blog/programming-memes/, Reddit
const memes = [
  "https://i.redd.it/a0v87gwzoge61.jpg",
  "https://i.redd.it/q29egav34ee61.jpg",
  "https://i.redd.it/iij16swxjie61.jpg",
  "https://i.redd.it/vek7dm2hrge61.jpg",
  "https://www.testbytes.net/wp-content/uploads/2019/06/Untitled-8.png",
  "https://miro.medium.com/max/1000/0*Ua695vjzFHV6VNOX.png",
  "https://pbs.twimg.com/media/EKkPagPXkAA__Qo.jpg",
  "https://code-love.com/wp-content/uploads/2019/03/download.jpeg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Error-in-Code-896x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Coding-Meme-Code-Comments-be-Like-925x1024.jpg",
  "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Internet-Explorer-Joke-915x1024.jpg",
];

// Sourced from: http://www.devtopics.com/best-programming-jokes/
const jokes = [
  "Why don't scientists trust atoms? Because they make up everything.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
  "Why don't ants get sick? They have tiny ant-bodies.",
  "Why was the math book sad? Because it had too many problems.",
  "Why don't oysters share their pearls? Because they're shellfish.",
  "Why don't ghosts go out in the rain? They're afraid of their own boo-boos.",
  "Why was the computer cold? It left its Windows open.",
  "Why did the cookie go to the doctor? Because it was feeling crumbly.",
  "Why did the frog call his insurance company? He had a jump in his car.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why do bees hum? They don't know the words.",
  "Why did the can crusher quit his job? Because it was soda pressing.",
  "Why do seagulls fly over the sea? Because if they flew over the bay, they would be bagels.",
  "Why don't scientists trust atoms? Because they make up everything.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
  "Why don't ants get sick? They have tiny ant-bodies.",
  "Why was the math book sad? Because it had too many problems.",
  "Why don't oysters share their pearls? Because they're shellfish.",
  "Why don't ghosts go out in the rain? They're afraid of their own boo-boos.",
  "Why was the computer cold? It left its Windows open.",
  "Why did the cookie go to the doctor? Because it was feeling crumbly.",
  "Why did the frog call his insurance company? He had a jump in his car.",
  "Why don't skeletons fight each other? They don't have the guts.",
  "Why do bees hum? They don't know the words.",
  "Why did the can crusher quit his job? Because it was soda pressing.",
  "Why do seagulls fly over the sea? Because if they flew over the bay, they would be bagels.",
  "Why don't scientists trust atoms? Because they make up everything.",
  "Why did the tomato turn red? Because it saw the salad dressing.",
  "I'm reading a book on anti-gravity. It's impossible to put down!",
  "Why did the scarecrow win an award? Because he was outstanding in his field.",
  "Why did the hipster burn his tongue? He drank his coffee before it was cool.",
  "Why don't ants get sick? They have tiny ant-bodies.",
  "Why was the math book sad? Because it had too many problems.",
  "Why don't oysters share their pearls? Because they're shellfish.",
  "Why don't ghosts go out in the rain? They're afraid of their own boo-boos.",
  "Why was the computer cold? It left its Windows open."
];

// source: https://www.goodreads.com/quotes/tag/programming
const quotes = [
  {
    quote:
      "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "Harold Abelson",
  },
  {
    quote:
      "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
    author: "Rick Cook",
  },
  {
    quote:
      "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
    author: "John Woods",
  },
  {
    quote:
      "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
  {
    quote: "Truth can only be found in one place: the code.",
    author: "Robert C. Martin",
  },
  {
    quote:
      "That's the thing about people who think they hate computers. What they really hate is lousy programmers.",
    author: "Larry Niven",
  },
  {
    quote:
      "You've baked a really lovely cake, but then you've used dog shit for frosting.",
    author: "Steve Jobs",
  },
  {
    quote:
      "A language that doesn't affect the way you think about programming is not worth knowing.",
    author: "Alan J. Perlis",
  },
  {
    quote:
      "The most disastrous thing that you can ever learn is your first programming language.",
    author: "Alan Kay",
  },
  {
    quote:
      "The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.",
    author: "Joseph Weizenbaum",
  },
  {
    quote:
      "Everyone knows that debugging is twice as hard as writing a program in the first place. So if you're as clever as you can be when you write it, how will you ever debug it?",
    author: "Brian Kernighan",
  },
  {
    quote:
      "No matter which field of work you want to go in, it is of great importance to learn at least one programming language.",
    author: "Ram Ray",
  },
];

// Source: https://www.rd.com/list/challenging-riddles/
const riddles = [
  {
    question:
      "I speak without a mouth and hear without ears. I have no body, but I come alive with wind. What am I?",
    answer: "An echo",
  },
  {
    question:
      "You measure my life in hours and I serve you by expiring. I’m quick when I’m thin and slow when I’m fat. The wind is my enemy. ",
    answer: "A Candle",
  },
  {
    question:
      "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I? ",
    answer: "A Map",
  },
  {
    question:
      "What is seen in the middle of March and April that can’t be seen at the beginning or end of either month?",
    answer: 'The letter "R"',
  },
  {
    question:
      "You see a boat filled with people. It has not sunk, but when you look again you don’t see a single person on the boat. Why?",
    answer: "All the people were married",
  },
  {
    question:
      "What word in the English language does the following: the first two letters signify a male, the first three letters signify a female, the first four letters signify a great, while the entire world signifies a great woman. What is the word?",
    answer: "Heroine",
  },
];

function ran(len) {
  return Math.floor(Math.random() * len);
}

const data = {
  memes,
  jokes,
  quotes,
  riddles,
};
