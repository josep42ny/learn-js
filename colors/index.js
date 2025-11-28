import ColorService from './services/ColorService.js';
import { init } from './views/index.view.js';

const service = new ColorService();
init(service.get);
