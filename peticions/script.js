(async () => await init())();

// Vista
const root = document.querySelector('#app');
const list = document.createElement('UL');
root.appendChild(list);

function addEntry(value) {
  const entry = document.createElement('li');
  entry.innerText = value;

  list.appendChild(entry);
}

// Servei
async function init() {
  const p = [];

  for (let i = 1; i <= 10; i++) {
    p.push(
      fetch(
        `https://theteacher.codiblau.com/public/exercicis/other/asincron-get?num=${i}`
      ).then((data) => data.text())
    );
  }

  const rs = await Promise.all(p);
  for (let r of rs) {
    addEntry(r);
  }
}
