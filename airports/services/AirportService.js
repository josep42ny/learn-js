import Airport from '../model/Airport.js';

export class AirportService {
  get() {
    return fetch(`https://theteacher.codiblau.com/public/exercicis/airports`)
      .then((response) => response.json())
      .then((raw) => raw.map((r) => this.#mapAirport(r)));
  }

  async filter(airports, text) {
    if (!text) {
      return airports;
    }

    let filteredAirports = airports;
    if (!airports) {
      filteredAirports = await this.get();
    }

    return filteredAirports.filter(
      (airport) =>
        airport.name !== null &&
        airport.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  #mapAirport(raw) {
    return new Airport(raw.code, raw.name, raw.lat, raw.lon, raw.city);
  }
}
