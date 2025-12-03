import { AirportService } from '../services/AirportService.js';

export class AirportList {
  constructor() {
    const service = new AirportService();
    this.airports = service.get();
  }
}
