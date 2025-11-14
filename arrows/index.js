function handler1(params) {
  console.log(this);
}

function handler2(params) {
  console.log(this);
}

function draw() {
  const root = document.querySelector('#app');

  root.appendChild(createButton('Button 1', handler1));
  root.appendChild(createButton('Button 2', () => console.log(this)));
}

function createButton(text, clickHandler) {
  const b = document.createElement('BUTTON');
  b.innerText = text;
  b.addEventListener('click', clickHandler);
  return b;
}

draw();
