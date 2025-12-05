import { AirportService } from './services/AirportService.js';
import { AirportViews } from './views/AirportViews.js';

(async () => {
  const service = new AirportService();
  const airports = await service.get();

  const view = new AirportViews(service.filter, airports);

  view.drawAll(airports);
})();
