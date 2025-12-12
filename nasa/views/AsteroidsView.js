export class AsteroidsView {
  draw(asteroids) {
    const tableContainer = document.querySelector('#taula');
    const table = document.createElement('TABLE');
    tableContainer.appendChild(table);

    for (const asteroid in asteroids) {
      this.#appendAsteroid(table, asteroid);
    }
  }

  #appendAsteroid(table, asteroid) {
    const row = table.insertRow();
    const cell = row.insertCell();
    cell.innerText = asteroid.name;
  }
}
