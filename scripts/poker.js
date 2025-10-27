((_) => {
  const values = [
    'ace',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    'jack',
    'queen',
    'king',
  ];
  const suits = ['spades', 'diamonds', 'hearts', 'clubs'];

  const deck = initDeck(suits, values);
  console.log(deck);
})();

// Model
class Card {
  constructor(numero, pal) {
    this.numero = numero;
    this.pal = pal;
  }
}

// Logic
function parella(ma) {
  for (let i = 0; i < ma.length; i++) {
    for (let j = i + 1; j < ma.length; j++) {
      if (ma[i].numero === ma[j].numero) {
        return true;
      }
    }
  }
  return false;
}

function initDeck(suits, values) {
  const deck = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      deck.push(new Card(numeros[j], pals[i]));
    }
  }

  return deck;
}

function pullCards(amount = 5, deck) {
  const cards = [];
  const shuffled = deck.sort(() => Math.random() - 0.5);
  if (amount < shuffled.length) {
    return cards;
  }

  for (let i = 0; i < amount; i++) {
    cards.push(shuffled[i]);
  }

  return cards;
}

// View
function draw() {
  const app = document.querySelector('#app');
  app.innerHTML = '<button onclick="jugar()">Play!</button>';

  for (let i = 0; i < player.length; i++) {
    const carta = player[i].numero + '_of_' + player[i].pal + '.png';
    app.innerHTML +=
      '<img style="width:100px" src="/assets/img/cards/' + carta + '">';
  }

  //Comprovació de guanyar
  if (parella(player)) {
    app.innerHTML += '<p>Has guanyat amb Parella</p>';
  }
}

function drawWinner(isWin) {
  document.querySelector('#resultat').innerText = isWin ? 'Yay' : 'Nay';
}
