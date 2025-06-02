if (localStorage.getItem("isLoggedIn") !== "true") {
      window.location.replace("index.html");
    }

const heartsContainer = document.querySelector('.floating-hearts');

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = (Math.random() * 100) + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    heart.style.opacity = (0.3 + Math.random() * 0.7);
    heartsContainer.appendChild(heart);

    setTimeout(() => {
    heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);

const questions = [
    {
    clue: "what musical brought us closer to each other",
    options: ["high school musical", "dear evan hansen", "hamilton"],
    answer: "high school musical"
    },
    {
    clue: "what was the first movie we watched together?",
    options: ["titanic", "phineas and ferb", "matilda"],
    answer: "matilda"
    },
    {
    clue: "what word we often say in valorant when we were still friends?",
    options: ["geatay", "hehi", "immong mama"],
    answer: "hehi"
    },
    {
    clue: "how often should we make love?",
    options: ["once a day", "night time", "everyday"],
    answer: "everyday"
    },
    {
    clue: "when did we first meet?",
    options: ["march 22", "march 23", "april 04"],
    answer: "march 22"
    },
    {
    clue: "what was the musical we first listened to?",
    options: ["dear evan hansen", "hamilton", "high school musical"],
    answer: "high school musical"
    },
    {
    clue: "where do we match the most?",
    options: ["games", "food", "in everything"],
    answer: "in everything"
    },
    {
    clue: "you are my?",
    options: ["babygirl", "partner", "cinnamoroll girl"],
    answer: "babygirl"
    },
    {
    clue: "and i am your?",
    options: ["best boy", "babygirl", "honeybunch"],
    answer: "best boy"
    },
    {
    clue: "what gesture did we do last may 30?",
    options: ["pinky promise", "flying kiss", "naay nasunog"],
    answer: "pinky promise"
    }
];

function startQuiz() {
    const quizArea = document.getElementById('quizArea');
    quizArea.innerHTML = '';

    questions.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'question';
    div.innerHTML = `<p>${index + 1}. ${item.clue}</p>`;

    item.options.forEach((opt, optIndex) => {
        const optionId = `q${index}_opt${optIndex}`;
        const label = document.createElement('label');
        label.htmlFor = optionId;
        label.innerHTML = `<input type="radio" name="q${index}" value="${opt}" id="${optionId}" /> ${opt}`;
        div.appendChild(label);
    });

    quizArea.appendChild(div);
    });

    const submitBtn = document.createElement('button');
    submitBtn.className = 'game-button';
    submitBtn.innerText = 'Submit Answers';
    submitBtn.onclick = checkAnswers;
    quizArea.appendChild(submitBtn);
}

function checkAnswers() {
    let correct = 0;

    questions.forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    if (selected && selected.value === item.answer) {
        correct++;
    }
    });

      if (correct === questions.length) {
        Swal.fire({
          title: 'You did it! 💕 uwu',
          text: 'I think we should make love tonight 😘',
          icon: 'success',
          confirmButtonText: 'Proceed! (✿◠‿◠)'
        }).then(() => {
          window.location.href = 'letters.html';
        });
      } else {
        Swal.fire({
          title: 'Hmm...?',
          text: `You got ${correct} out of ${questions.length}. Try again, baby~ (◕︵◕)`,
          icon: 'info',
          confirmButtonText: 'I will! (≧◡≦)'
        }).then(() => {
          startQuiz();
        });
      }
    }

function logout() {
    Swal.fire({
    title: 'Logging out?',
    text: "We'll be right here waiting 💜",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#a259ff',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, log me out'
    }).then((result) => {
    if (result.isConfirmed) {
        localStorage.removeItem("isLoggedIn");
        window.location.replace("index.html");
    }
    });
}