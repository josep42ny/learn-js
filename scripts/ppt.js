(() => {
  initView();
  play();
})();

// Logica
const LEADERBOARD = [{}];

function play() {
  const VALID_MOVES = ['pedra', 'paper', 'tisores'],
    WIN_STATES = ['pedratisores', 'paperpedra', 'tisorespaper'];

  const playerMove = getPlayerMove(VALID_MOVES),
    rivalMove = getRivalMove(VALID_MOVES),
    gameState = playerMove + rivalMove;

  if (playerMove === rivalMove) {
    draw(playerMove, rivalMove, 'Heu empatat');
  } else {
    draw(
      playerMove,
      rivalMove,
      WIN_STATES.includes(gameState) ? 'Has guanyat' : 'Has perdut'
    );
  }
}

function getPlayerMove(constraints) {
  return askString('Juga', constraints);
}

function getRivalMove(constraints) {
  return constraints[Math.floor(Math.random() * constraints.length)];
}

function addScore(playerMove, rivalMove, winner) {
  LEADERBOARD.push({
    winner: winner,
    playerMove: playerMove,
    rivalMove: rivalMove,
  });
}

// // Utils
function askString(text, constraints = []) {
  while (true) {
    const input = prompt(text).toLowerCase();

    if (validateString(input, constraints)) {
      return input;
    }
  }
}

function validateString(value, constraints) {
  if (!value) return false;
  return constraints.includes(value);
}

// Vista
function initView() {
  const root = document.querySelector('#app'),
    handIds = ['playerHand', 'rivalHand'];

  handIds.forEach((id) => {
    (hand = document.createElement('IMG')), (hand.id = id);
    hand.classList = 'hand';
    hand.src = moveToImagePath('paper');
    hand.addEventListener('mouseover', handleHoverStart);
    root.appendChild(hand);
  });
}

function draw(playerMove, rivalMove, result) {
  document.querySelector('#playerHand').src = moveToImagePath(playerMove);
  document.querySelector('#rivalHand').src = moveToImagePath(rivalMove);
}

function handleHoverStart(event) {
  event.target.src = moveToImagePath('paper');
}

function moveToImagePath(move) {
  const MAP = {
    pedra: 'hand0.png',
    tisores: 'hand2.png',
    paper: 'hand5.png',
  };

  return `../assets/img/${MAP[move]}`;
}
