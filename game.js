const questions = {
  minecraft: [
    {
      q: "What is needed to craft a torch?",
      options: ["Stick and Coal", "Stick and Iron", "Wood and Flint", "Stone and Coal"],
      answer: 0
    },
    {
      q: "Which mob explodes?",
      options: ["Zombie", "Skeleton", "Creeper", "Spider"],
      answer: 2
    },
    {
      q: "Which dimension has Ender Dragon?",
      options: ["Nether", "Overworld", "End", "Sky Dimension"],
      answer: 2
    },
    {
      q: "Which tool is used to mine obsidian?",
      options: ["Iron Pickaxe", "Stone Pickaxe", "Diamond Pickaxe", "Wooden Pickaxe"],
      answer: 2
    },
    {
      q: "What do you use to tame a wolf?",
      options: ["Meat", "Fish", "Bones", "Gold"],
      answer: 2
    }
  ],
  gk: [
    {
      q: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: 0
    },
    {
      q: "Who is the author of 'Harry Potter'?",
      options: ["J.K. Rowling", "Mark Twain", "Charles Dickens", "William Shakespeare"],
      answer: 0
    },
    {
      q: "What is the capital of Japan?",
      options: ["Beijing", "Seoul", "Bangkok", "Tokyo"],
      answer: 3
    },
    {
      q: "Which is the longest river in the world?",
      options: ["Amazon", "Ganga", "Nile", "Yangtze"],
      answer: 2
    },
    {
      q: "Which element has the chemical symbol 'O'?",
      options: ["Osmium", "Oxygen", "Gold", "Iron"],
      answer: 1
    }
  ]
};

let currentTopic = "";
let currentQuestion = 0;
let score = 0;

function startGame(topic) {
  currentTopic = topic;
  currentQuestion = 0;
  score = 0;

  document.getElementById("topic-select").style.display = "none";
  document.getElementById("quiz").style.display = "block";
  document.getElementById("result").style.display = "none";

  showQuestion();
}

function showQuestion() {
  const q = questions[currentTopic][currentQuestion];
  document.getElementById("question").textContent = q.q;

  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(index);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("next-btn").style.display = "none";
}

function selectAnswer(selectedIndex) {
  const correctIndex = questions[currentTopic][currentQuestion].answer;
  const optionButtons = document.querySelectorAll("#options button");

  optionButtons.forEach((btn, idx) => {
    btn.disabled = true;
    btn.style.backgroundColor = idx === correctIndex ? "#4CAF50" : (idx === selectedIndex ? "#f44336" : "#333");
  });

  if (selectedIndex === correctIndex) {
    score++;
  }

  document.getElementById("next-btn").style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < 5) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";
  document.getElementById("score").textContent = score;
}

function restartGame() {
  document.getElementById("topic-select").style.display = "block";
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "none";
}