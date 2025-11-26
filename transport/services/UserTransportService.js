import { User } from '../model/User.js';

export class UserTransportService {
  getUsers() {
    return fetch(
      `https://theteacher.codiblau.com/public/exercicis/other/usuaris/list`
    )
      .then((response) => response.json())
      .then((users) => {
        const n = [];
        for (let user of users) {
          n.push(this.mapUser(user));
        }
        return n;
      });
  }

  getTransport() {
    return fetch(
      `https://theteacher.codiblau.com/public/exercicis/other/usuaris/transport`,
      {
        method: 'POST',
        headers: {
          ContentType: 'application/x-www-form-urlencoded',
        },
        body: {
          idtransport: 3,
        },
      }
    ).then((response) => console.log(response));
  }

  mapUser(rawUser) {
    return new User(
      rawUser.username,
      rawUser.nom,
      rawUser.cognom1,
      rawUser.cognom2,
      rawUser.transport_idtransport
    );
  }
}
