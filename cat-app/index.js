import { CatService } from './src/services/cat.service.js';
import { drawCats } from './src/view/home.view.js';

const service = new CatService();
service.getCats(2).then(drawCats);

document
  .querySelector('#next')
  .addEventListener('click', () => service.getCats(2, 1).then(drawCats));
document.querySelector();
