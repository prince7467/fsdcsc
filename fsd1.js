const jokeText = document.getElementById('joke');
const characterCount = document.getElementById('character-count');
const getJokeButton = document.getElementById('get-joke');
const clearJokeButton = document.getElementById('clear-joke');

const jokes = [
  "I tried starting a hot air balloon business, but it never took off.",
  "I used to think I was indecisive, but now I'm not so sure.",
  "I tried to catch fog yesterday morning, but I missed it.",
];

getJokeButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * jokes.length);
  jokeText.textContent = jokes[randomIndex];
  characterCount.textContent = `Character count: ${jokes[randomIndex].length}`;
});

clearJokeButton.addEventListener('click', () => {
  jokeText.textContent = 'Press the button for a joke!';
  characterCount.textContent = 'Character count: 0';
});