export function init(callback) {
  const root = document.querySelector('#app');

  const btn = document.createElement('BUTTON');
  btn.addEventListener('click', () => callback(100, 200));
  btn.innerText = 'Generate';
  root.appendChild(btn);
  fetch;

  const element = document.createElement('DIV');
  element.id = 'rectangle';
  root.appendChild(element);
}

export function update(rectangle) {
  const element = document.querySelector('#rectangle');
  element.style.width = `${rectangle.height}px`;
  element.style.height = `${rectangle.width}px`;
  element.style.backgroundColor = `#${rectangle.surfaceColor}`;
  document.body.style.backgroundColor = `#${rectangle.backgroundColor}`;
}
