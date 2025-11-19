import { Car } from '../model/Car.js';

export class CarService {
  API_BASE_URL =
    'https://raw.githubusercontent.com/vega/vega/refs/heads/main/docs/data/cars.json';

  getAll() {
    return fetch(this.API_BASE_URL)
      .then((response) => response.json())
      .then((data) => this.#parse(data));
  }

  #parse(cars) {
    return cars.map((car) => this.#parseCar(car));
  }

  #parseCar(carJson) {
    return new Car(carJson.Name, carJson.Horsepower, carJson.Year);
  }
}
