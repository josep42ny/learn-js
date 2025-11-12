export function drawCats(cats) {
  cats.forEach(draw);
}

function draw(cat) {
  const root = document.querySelector('#app');
  root.appendChild(figure(cat.url, cat.id));
}

function figure(url, caption = '') {
  const fig = document.createElement('FIGURE');
  const cap = document.createElement('FIGCAPTION');
  cap.innerText = caption;

  fig.appendChild(image(url, 300));
  fig.appendChild(cap);
  return fig;
}

function image(url, width) {
  const img = document.createElement('IMG');
  img.src = url;
  img.width = width;

  return img;
}
