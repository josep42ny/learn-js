import { Transport } from '../model/Transport.js';
import { User } from '../model/User.js';

export class UserTransportService {
  async getUsers() {
    return await fetch(
      `https://theteacher.codiblau.com/public/exercicis/other/usuaris/list`
    )
      .then((response) => response.json())
      .then((users) => {
        const n = [];
        for (let user of users) {
          n.push(this.#mapUser(user));
        }
        console.log(n);
        return Promise.all(n);
      });
  }

  getTransport(id) {
    return fetch(
      `https://theteacher.codiblau.com/public/exercicis/other/usuaris/transport`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `idtransport=${id}`,
      }
    ).then((response) => response.json());
  }

  #mapUser(rawUser) {
    return this.getTransport(rawUser.transport_idtransport)
      .then((data) => this.#mapTransport(data))
      .then((transport) => {
        return new User(
          rawUser.username,
          rawUser.nom,
          rawUser.cognom1,
          rawUser.cognom2,
          transport.url
        );
      });
  }

  #mapTransport(rawTransport) {
    return new Transport(rawTransport.id, rawTransport.name, rawTransport.url);
  }
}
