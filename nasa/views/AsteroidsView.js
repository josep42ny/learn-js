export class AsteroidsView {
  COLUMNS = new Map([
    ['name', 'Nom'],
    ['diameter', 'Diàmetre mín (m)'],
    ['isDangerous', 'És perillós?'],
  ]);
  asteroids = [];
  currentPage = 0;

  constructor(dates, filterCallback) {
    const anterior = document.querySelector('#anterior');
    anterior.addEventListener('click', () => this.changePage(-1));
    anterior.style.display = 'none';
    const seguent = document.querySelector('#seguent');
    seguent.addEventListener('click', () => this.changePage(+1));
    seguent.style.display = 'none';

    const select = document.querySelector('#dates');
    const handleSearch = async () => {
      const selectedDates = Array.from(select.options)
        .filter((option) => option.selected)
        .map((option) => option.value);

      this.asteroids = await filterCallback(selectedDates);
      this.draw();
      this.currentPage = 0;
      if (this.asteroids.length > 5) {
        seguent.style.display = 'block';
      } else {
        seguent.style.display = 'none';
      }
    };
    document.querySelector('#cerca').addEventListener('click', handleSearch);

    dates.forEach((date) => {
      const option = document.createElement('OPTION');
      option.value = date.value;
      option.innerText = date.label;
      select.appendChild(option);
    });
  }

  changePage(delta) {
    const newPage = this.currentPage + delta;
    if (newPage * 5 > this.asteroids.length - 5 || newPage < 0) {
      return;
    }

    const seguent = document.querySelector('#seguent');
    if ((newPage + 1) * 5 > this.asteroids.length - 5) {
      seguent.style.display = 'none';
    } else {
      seguent.style.display = 'block';
    }

    const anterior = document.querySelector('#anterior');
    if (newPage <= 0) {
      anterior.style.display = 'none';
    } else {
      anterior.style.display = 'block';
    }

    this.currentPage = newPage;
    this.draw();
  }

  draw() {
    if (this.asteroids.length === 0) {
      return;
    }

    const tableContainer = document.querySelector('#taula');
    tableContainer.innerHTML = '';
    const table = document.createElement('TABLE');
    tableContainer.appendChild(table);
    this.#appendHeaders(table);

    console.log(this.currentPage);
    for (
      let i = (this.currentPage + 1) * 5;
      i < (this.currentPage + 1) * 5 + 5;
      i++
    ) {
      if (this.asteroids.length <= i) break;
      this.#appendAsteroid(table, this.asteroids[i]);
    }
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
