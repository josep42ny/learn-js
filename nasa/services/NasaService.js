import { Asteroid } from '../model/Asteroid.js';

export class NasaSerice {
  get(date) {
    return fetch(
      `https://theteacher.codiblau.com/public/exercicis/nasa?date=${date}`
    )
      .then((response) => response.json())
      .then((json) => json.map((obj) => this.#toAsteroid(obj)));
  }

  async filter(date) {
    if (!date) {
      return null;
    }

    return await this.get(date);
  }

  #toAsteroid(rawAsteroid) {
    return new Asteroid(
      rawAsteroid.asteroid_name,
      rawAsteroid.asteroid_diameter_mm,
      rawAsteroid.asteroid_esperillos
    );
  }
}
