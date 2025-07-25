function showMessage() {
  document.getElementById('card').classList.add('hidden');
  document.getElementById('message').classList.remove('hidden');
  startFlowerRain();
  startConfetti();
  playMusic();
}

function showSpeech() {
  document.getElementById('message').classList.add('hidden');
  document.getElementById('speech').classList.remove('hidden');
  startFlowerRain();
  startConfetti();
}

function startFlowerRain() {
  for (let i = 0; i < 30; i++) {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = 2 + Math.random() * 3 + 's';
    document.body.appendChild(flower);

    setTimeout(() => {
      flower.remove();
    }, 5000);
  }
}

function startConfetti() {
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = 2 + Math.random() * 2 + 's';
    confetti.style.backgroundColor = getRandomColor();
    document.body.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

function getRandomColor() {
  const colors = ['#f44336', '#e91e63', '#9c27b0', '#3f51b5', '#2196f3', '#4caf50', '#ff9800', '#ffeb3b'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function playMusic() {
  const audio = document.getElementById('bg-music');
  audio.play();
}
