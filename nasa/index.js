import { getDates } from './assets/js/dates.js';
import { NasaSerice } from './services/NasaService.js';
import { AsteroidsView } from './views/AsteroidsView.js';
import { DatesView } from './views/DatesView.js';

(async () => {
  new DatesView(getDates());
  const view = new AsteroidsView();
  const service = new NasaSerice();
  service.get('2000-12-1').then(view.draw);
})();
