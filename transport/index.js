import { UserTransportService } from './services/UserTransportService.js';
import { UserTransportView } from './views/view.js';

(async () => {
  const service = new UserTransportService();
  const view = new UserTransportView();

  service.getUsers().then((users) => view.drawAll(users));
})();
