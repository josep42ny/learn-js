import { Cat } from '../model/Cat.js';

export class CatService {
  API_BASE_URL = 'https://api.thecatapi.com/v1/images/search';
  requestOptions = {
    method: 'GET',
    headers: new Headers({
      'Content-Type': 'application/json',
      'x-api-key':
        'live_b0deB6pQyzVCnSZfeKyEoH6ykmuG8XVHPJhHcXz7p7NIFxyab28NiOliyX5KsfuH',
    }),
    redirect: 'follow',
  };
  /**
   *
   * @returns Promise<Cat>
   */
  getCats() {
    return fetch(`${this.API_BASE_URL}?limit=20`, this.requestOptions)
      .then((response) => response.json())
      .then((data) => {
        let cats = [];
        data.forEach((point) => {
          cats.push(new Cat(point.id, point.url));
        });
        return cats;
      });
  }
}
