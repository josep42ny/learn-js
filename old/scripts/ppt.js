// Logica
class Game {
  #view;
  #leaderboard;

  constructor() {
    this.#view = new View(this);
    this.#leaderboard = [{}];
  }

  run() {
    const VALID_MOVES = ['pedra', 'paper', 'tisores'],
      WIN_STATES = ['pedratisores', 'paperpedra', 'tisorespaper'];

    this.#playRound(VALID_MOVES, WIN_STATES);
  }

  #playRound(validMoves, winStates) {
    const playerMove = this.#getPlayerMove(validMoves),
      rivalMove = this.#getRivalMove(validMoves),
      gameState = playerMove + rivalMove;

    if (playerMove === rivalMove) {
      this.#addScore(playerMove, rivalMove, 'Empat');
      this.#view.draw(playerMove, rivalMove, 'Heu empatat');
    } else {
      const won = winStates.includes(gameState);
      this.#addScore(playerMove, rivalMove, won ? 'Jugador' : 'Rival');
      this.#view.draw(
        playerMove,
        rivalMove,
        won ? 'Has guanyat' : 'Has perdut'
      );
    }
    console.log(this.#leaderboard);
  }

  #getPlayerMove(constraints) {
    return Utils.askString('Juga', constraints);
  }

  #getRivalMove(constraints) {
    return constraints[Math.floor(Math.random() * constraints.length)];
  }

  #addScore(playerMove, rivalMove, winner) {
    this.#leaderboard.push({
      winner: winner,
      playerMove: playerMove,
      rivalMove: rivalMove,
    });
  }
}

class Utils {
  static askString(text, constraints = []) {
    while (true) {
      const input = prompt(text).toLowerCase();
      if (this.validateString(input, constraints)) {
        return input;
      }
    }
  }

  static validateString(value, constraints) {
    if (!value) return false;
    return constraints.includes(value);
  }
}

// Vista
class View {
  constructor() {
    const root = document.querySelector('#app'),
      handIds = ['playerHand', 'rivalHand'];

    handIds.forEach((id) => {
      const hand = document.createElement('IMG');
      hand.id = id;
      hand.classList = 'hand';
      hand.src = this.#moveToImagePath('paper');
      hand.addEventListener('mouseover', (e) => this.#handleHoverStart(e));
      root.appendChild(hand);
    });
  }

  draw(playerMove, rivalMove, result) {
    document.querySelector('#playerHand').src =
      this.#moveToImagePath(playerMove);
    document.querySelector('#rivalHand').src = this.#moveToImagePath(rivalMove);
  }

  #handleHoverStart(event) {
    event.target.src = this.#moveToImagePath('paper');
  }

  #moveToImagePath(move) {
    const MAP = {
      pedra: 'hand0.png',
      tisores: 'hand2.png',
      paper: 'hand5.png',
    };

    return `../assets/img/${MAP[move]}`;
  }
}

(() => {
  // initView();
  // play();
  new Game().run();
})();
