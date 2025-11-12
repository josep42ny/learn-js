import { Person } from '../model/Person.js';

export class PersonService {
  API_BASE_URL = 'https://randomuser.me/api/';

  /**
   *
   * @returns Promise<Persona>
   */
  getPerson() {
    return fetch(`${this.API_BASE_URL}?results=1&inc=name,email,gender,picture`)
      .then((response) => response.json())
      .then(
        (data) =>
          new Person(
            data.results[0].name.first,
            data.results[0].name.last,
            data.results[0].email,
            data.results[0].gender,
            data.results[0].picture.large,
            'NO DNI'
          )
      );
  }
}
