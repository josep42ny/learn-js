export class AsteroidsView {
  COLUMNS = new Map([
    ['name', 'Nom'],
    ['diameter', 'Diàmetre mín (m)'],
    ['isDangerous', 'És perillós?'],
  ]);

  constructor(dates, filterCallback) {
    const select = document.querySelector('#dates');
    dates.forEach((date) => {
      const option = document.createElement('OPTION');

      option.addEventListener('click', async (e) => {
        const asteroids = await filterCallback(e.target.value);
        this.draw(asteroids);
      });

      option.value = date.value;
      option.innerText = date.label;
      select.appendChild(option);
    });
  }

  draw(asteroids) {
    const tableContainer = document.querySelector('#taula');
    tableContainer.innerHTML = '';
    const table = document.createElement('TABLE');
    tableContainer.appendChild(table);
    this.#appendHeaders(table);
    asteroids.forEach((asteroid) => this.#appendAsteroid(table, asteroid));
  }

  #appendAsteroid(table, asteroid) {
    const row = table.insertRow();
    for (const key of this.COLUMNS.keys()) {
      const cell = row.insertCell();
      cell.innerText = asteroid[key];
    }
  }

  #appendHeaders(table) {
    const row = table.insertRow();
    for (const key of this.COLUMNS.values()) {
      const cell = row.insertCell();
      cell.innerText = key;
    }
  }
}
