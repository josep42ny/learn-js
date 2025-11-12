import { CatService } from './src/services/cat.service.js';
import { drawCats } from './src/view/home.view.js';

const service = new CatService();
service.getCats().then(drawCats);
