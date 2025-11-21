import { CarService } from '../services/CarService.js';
import { CarListView } from '../views/View.js';

export class CarList {
  constructor() {
    this.view = new CarListView();
    this.service = new CarService();
    this.service.getAll().then((cars) => (this.cars = cars));
    this.view.init(this.getByName.bind(this));
  }

  getByName(name) {
    const filteredCars = this.cars.filter((car) =>
      car.name.toLowerCase().includes(name.toLowerCase())
    );
    this.view.drawCars(filteredCars);
  }
}
