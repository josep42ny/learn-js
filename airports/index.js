import { AirportService } from './services/AirportService.js';
import { AirportViews } from './views/AirportViews.js';

(() => {
  const service = new AirportService();
  const view = new AirportViews();
  service.get().then((airports) => view.drawAll(airports));
})();
