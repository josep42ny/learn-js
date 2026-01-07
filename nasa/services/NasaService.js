import { Asteroid } from '../model/Asteroid.js';

export class NasaSerice {
  #get(date) {
    return fetch(
      `https://theteacher.codiblau.com/public/exercicis/nasa?date=${date}`
    )
      .then((response) => response.json())
      .then((json) => json.map((obj) => this.#toAsteroid(obj)));
  }

  async filter(dates) {
    if (!dates) {
      return null;
    }

    const p = [];
    dates.forEach((date) => {
      p.push(this.#get(date));
    });

    const asteroids = await Promise.all(p);
    return asteroids.flat();
  }

  #toAsteroid(rawAsteroid) {
    return new Asteroid(
      rawAsteroid.asteroid_name,
      rawAsteroid.asteroid_diameter_mm,
      rawAsteroid.asteroid_esperillos
    );
  }
}
