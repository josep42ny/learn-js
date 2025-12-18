import { getDates } from './assets/js/dates.js';
import { NasaSerice } from './services/NasaService.js';
import { AsteroidsView } from './views/AsteroidsView.js';

(async () => {
  const service = new NasaSerice();
  new AsteroidsView(getDates(), (args) => service.filter(args));
})();
