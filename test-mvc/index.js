import { PersonService } from './src/services/person.service.js';
import { draw } from './src/view/home.view.js';

const service = new PersonService();
service.getPerson().then((person) => {
  draw(person);
});
