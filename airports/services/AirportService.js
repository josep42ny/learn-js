import Airport from '../model/Airport.js';

export class AirportService {
  get() {
    return fetch(`https://theteacher.codiblau.com/public/exercicis/airports`)
      .then((response) => response.json())
      .then((raw) => raw.map((r) => this.#mapAirport(r)));
  }

  #mapAirport(raw) {
    return new Airport(raw.code, raw.name, raw.lat, raw.lon, raw.city);
  }
}
