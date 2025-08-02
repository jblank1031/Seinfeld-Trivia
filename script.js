// Trivia questions grouped into rounds. Each question has a text, an array of options,
// and the index (0‑based) of the correct answer. The order is fixed to increase
// difficulty across rounds.
const rounds = [
  [
    {
      question: "What is Jerry's neighbor Kramer's first name?",
      options: ["Bob", "Cosmo", "Frank", "George"],
      answer: 1,
    },
    {
      question:
        "What alias does George often use when pretending to be an architect or importer–exporter?",
      options: ["Art Vandelay", "Lloyd Braun", "Arthur Newman", "Dr. Van Nostrand"],
      answer: 0,
    },
    {
      question:
        "In the episode 'The Junior Mint,' what type of candy do Jerry and Kramer accidentally drop into a surgical patient?",
      options: ["Milk Duds", "Junior Mint", "M&M's", "Skittles"],
      answer: 1,
    },
    {
      question:
        "Which cookie does Jerry praise for its message of racial harmony, telling everyone to 'look to the cookie'?",
      options: [
        "Chocolate chip cookie",
        "Black‑and‑white cookie",
        "Oatmeal raisin cookie",
        "Snickerdoodle",
      ],
      answer: 1,
    },
    {
      question: "What is the name of Jerry Seinfeld's father?",
      options: ["Morty", "Harry", "Frank", "Stan"],
      answer: 0,
    },
    {
      question:
        "What phrase did Frank Costanza learn from an instructional tape to help control his anger?",
      options: ["Serenity now!", "Keep calm!", "Hakuna matata!", "Peace out!"],
      answer: 0,
    },
    {
      question:
        "Which vanity license plate does Kramer receive after a mix‑up at the DMV?",
      options: ["ASSMAN", "BIGMAN", "KRAMER1", "FUNNYGUY"],
      answer: 0,
    },
    {
      question:
        "George wants to name his future child after which number, inspired by Mickey Mantle's jersey?",
      options: ["Seven", "Twelve", "Twenty‑three", "Eighteen"],
      answer: 0,
    },
    {
      question:
        "Which three‑word phrase do the characters use to gloss over details, functioning like 'et cetera'?",
      options: [
        "Bada bing bada boom",
        "Yada yada yada",
        "Blah blah blah",
        "La di da",
      ],
      answer: 1,
    },
    {
      question:
        "In 'The Chinese Restaurant' episode, what name does the maître d' call instead of 'Costanza' when announcing a phone call for George?",
      options: ["Cartwright", "Cantstandya", "Costello", "Carter"],
      answer: 0,
    },
  ],
  [
    {
      question:
        "What book does Jerry owe a long‑overdue library fine for in 'The Library'?",
      options: ["On the Road", "Tropic of Cancer", "The Catcher in the Rye", "War and Peace"],
      answer: 1,
    },
    {
      question:
        "Kramer's girlfriend Leslie is a ________, which causes Jerry to agree to wear the puffy shirt without realizing it.",
      options: ["Low talker", "Fast talker", "Close talker", "Softy"],
      answer: 0,
    },
    {
      question:
        "What is the name of the male bra that Kramer creates with Frank Costanza?",
      options: ["The Bro", "The Mansiere", "The Lad‑bra", "The Man‑sling"],
      answer: 0,
    },
    {
      question:
        "What is George's ATM code, which is also the name of his favorite chocolate syrup?",
      options: ["Bosco", "Seven", "Jor‑El", "Vandelay"],
      answer: 0,
    },
    {
      question:
        "What is Jerry's ATM password, named after Superman's father, which he reveals to free a trapped man?",
      options: ["Jor‑El", "Kal‑El", "Clark", "Vandelay"],
      answer: 0,
    },
    {
      question:
        "What does the 'J' in J. Peterman stand for?",
      options: ["Jacopo", "John", "Jameson", "Julius"],
      answer: 0,
    },
    {
      question:
        "Which highway does Kramer adopt and then repaint into extra‑wide lanes after joining the Adopt‑A‑Highway program?",
      options: [
        "Arthur Burghardt Expressway",
        "Brooklyn‑Queens Expressway",
        "New York Thruway",
        "George Washington Bridge",
      ],
      answer: 0,
    },
    {
      question:
        "In the Costanza family's Festivus celebration, what object takes the place of a Christmas tree?",
      options: [
        "An undecorated aluminum pole",
        "A wooden pole with decorations",
        "A Festivus wreath",
        "An inflatable air dancer",
      ],
      answer: 0,
    },
    {
      question:
        "At Elaine's company party in 'The Little Kicks,' she famously dances to which song?",
      options: ["Shining Star", "Stayin' Alive", "Dancing Queen", "Uptown Funk"],
      answer: 0,
    },
    {
      question:
        "While pretending to be a marine biologist, what does George remove from a whale's blowhole?",
      options: ["A Titleist golf ball", "A bowling ball", "A baseball", "A sponge"],
      answer: 0,
    },
  ],
  [
    {
      question:
        "What is the Soup Nazi's real name, revealed during the series finale?",
      options: ["Yev Kassem", "Yogi Kasim", "Yakov Smirnoff", "Yevgeny Kramer"],
      answer: 0,
    },
    {
      question:
        "What is the name of the beltless trench coat invented by Morty Seinfeld?",
      options: ["The Executive", "The Innovator", "The Commander", "The President"],
      answer: 0,
    },
    {
      question:
        "Festivus traditions include which two rituals in addition to the pole?",
      options: [
        "Airing of Grievances and Feats of Strength",
        "Family dinner and Gift exchange",
        "Caroling and Eggnog",
        "Secret Santa and Board games",
      ],
      answer: 0,
    },
    {
      question: "'Seinfeld' is often described as a show about ______.",
      options: ["nothing", "friends", "food", "New York"],
      answer: 0,
    },
    {
      question: "Elaine starts a business selling only what part of a muffin?",
      options: ["Tops", "Bottoms", "Crumbs", "Whole muffins"],
      answer: 0,
    },
    {
      question:
        "Which character briefly becomes an underwear model for Calvin Klein?",
      options: ["Cosmo Kramer", "Jerry Seinfeld", "George Costanza", "David Puddy"],
      answer: 0,
    },
    {
      question:
        "In 'The Chinese Restaurant,' what food does Elaine attempt to swipe from a stranger's plate on a dare?",
      options: ["An egg roll", "A spring roll", "A wonton", "A dumpling"],
      answer: 0,
    },
    {
      question:
        "In 'The Bubble Boy' episode, a misprint on a Trivial Pursuit card causes a fight. The correct answer is 'The Moors', but the card says ______.",
      options: ["The Moops", "The Moofs", "The Mooks", "The Mooges"],
      answer: 0,
    },
    {
      question:
        "Kramer crafts a small statue of Jerry out of pasta. What type of pasta does he use?",
      options: ["Fusilli", "Spaghetti", "Rigatoni", "Penne"],
      answer: 0,
    },
    {
      question:
        "Frank Costanza insists that the male bra he and Kramer design should be called the ______.",
      options: ["Mansiere", "Bro", "Man bra", "Supporter"],
      answer: 0,
    },
  ],
];

// DOM elements
const startScreen = document.getElementById("startScreen");
const questionScreen = document.getElementById("questionScreen");
const intermediateScreen = document.getElementById("intermediateScreen");
const finalScreen = document.getElementById("finalScreen");

const playerNameInput = document.getElementById("playerName");
const startButton = document.getElementById("startButton");

const roundLabel = document.getElementById("roundLabel");
const questionCounter = document.getElementById("questionCounter");
const timerEl = document.getElementById("timer");
const questionText = document.getElementById("questionText");
const optionsContainer = document.getElementById("optionsContainer");

const roundResult = document.getElementById("roundResult");
const roundMessage = document.getElementById("roundMessage");
const nextRoundBtn = document.getElementById("nextRoundBtn");

const finalMessage = document.getElementById("finalMessage");
const finalScoreEl = document.getElementById("finalScore");
const finalScoreboard = document.getElementById("finalScoreboard");
const restartBtn = document.getElementById("restartBtn");

// Preview scoreboard on start screen
const scoreboardList = document.getElementById("scoreboardList");

// Game state variables
let currentRoundIndex = 0;
let currentQuestionIndex = 0;
let score = 0;
let playerName = "";
let timerInterval;
let timeLeft = 0;

// Load and display the high scores from localStorage
function loadScoreboard() {
  const scores = JSON.parse(localStorage.getItem("scores") || "[]");
  // Sort descending by score
  scores.sort((a, b) => b.score - a.score);
  // Show top 5 scores
  scoreboardList.innerHTML = "";
  scores.slice(0, 5).forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name}: ${entry.score}`;
    scoreboardList.appendChild(li);
  });
}

// Start the game
function startGame() {
  playerName = playerNameInput.value.trim();
  if (!playerName) {
    alert("Please enter your name before starting the game.");
    return;
  }
  score = 0;
  currentRoundIndex = 0;
  currentQuestionIndex = 0;
  startScreen.hidden = true;
  intermediateScreen.hidden = true;
  finalScreen.hidden = true;
  questionScreen.hidden = false;
  loadQuestion();
}

// Load the current question
function loadQuestion() {
  const round = rounds[currentRoundIndex];
  // If we've gone through all questions in the round, show round results
  if (currentQuestionIndex >= round.length) {
    showRoundResults();
    return;
  }
  const qObj = round[currentQuestionIndex];
  roundLabel.textContent = `Round ${currentRoundIndex + 1}`;
  questionCounter.textContent = `Q${currentQuestionIndex + 1} of ${round.length}`;
  questionText.textContent = qObj.question;
  // Clear previous options
  optionsContainer.innerHTML = "";
  qObj.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.addEventListener("click", () => handleAnswer(index));
    optionsContainer.appendChild(btn);
  });
  // Initialize timer
  timeLeft = 10;
  timerEl.textContent = `Time: ${timeLeft}s`;
  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      handleAnswer(-1); // treat as incorrect
    }
  }, 1000);
}

// Handle answer selection or timeout
function handleAnswer(selectedIndex) {
  clearInterval(timerInterval);
  const qObj = rounds[currentRoundIndex][currentQuestionIndex];
  if (selectedIndex === qObj.answer) {
    score++;
  }
  currentQuestionIndex++;
  // Brief delay to avoid rapid clicking issues
  setTimeout(loadQuestion, 200);
}

// Display round results and prepare for next round or final
function showRoundResults() {
  questionScreen.hidden = true;
  intermediateScreen.hidden = false;
  const questionsSoFar = (currentRoundIndex + 1) * rounds[currentRoundIndex].length;
  roundResult.textContent = `Round ${currentRoundIndex + 1} complete!`;
  roundMessage.textContent = `${playerName}, you have ${score} correct answer${score === 1 ? "" : "s"} out of ${questionsSoFar}.`;
  if (currentRoundIndex < rounds.length - 1) {
    nextRoundBtn.textContent = `Start Round ${currentRoundIndex + 2}`;
    nextRoundBtn.onclick = () => {
      currentRoundIndex++;
      currentQuestionIndex = 0;
      questionScreen.hidden = false;
      intermediateScreen.hidden = true;
      loadQuestion();
    };
  } else {
    nextRoundBtn.textContent = "See Final Scoreboard";
    nextRoundBtn.onclick = () => {
      intermediateScreen.hidden = true;
      showFinal();
    };
  }
}

// Show final results and update scoreboard
function showFinal() {
  finalScreen.hidden = false;
  finalMessage.textContent = `All rounds complete!`;
  finalScoreEl.textContent = `${playerName}, your final score is ${score} out of ${rounds.length * rounds[0].length}.`;
  // Update stored scores
  const scores = JSON.parse(localStorage.getItem("scores") || "[]");
  scores.push({ name: playerName, score });
  scores.sort((a, b) => b.score - a.score);
  localStorage.setItem("scores", JSON.stringify(scores));
  // Display overall scoreboard
  finalScoreboard.innerHTML = "";
  scores.slice(0, 10).forEach((entry) => {
    const li = document.createElement("li");
    li.textContent = `${entry.name}: ${entry.score}`;
    finalScoreboard.appendChild(li);
  });
  // Reset for new game
  restartBtn.onclick = () => {
    finalScreen.hidden = true;
    startScreen.hidden = false;
    loadScoreboard();
    playerNameInput.value = "";
  };
}

// Event listeners
startButton.addEventListener("click", startGame);

// Initialise scoreboard preview when the page loads
window.addEventListener("load", () => {
  loadScoreboard();
});