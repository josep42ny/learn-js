import { CarService } from './services/CarService.js';
import { CarListView } from './views/View.js';

const view = new CarListView();

const cum = new CarService();
cum.getAll().then(view.drawCars);
