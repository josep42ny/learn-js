export class User {
  #username;
  #name;
  #surname1;
  #surname2;
  #transport;

  constructor(username, name, surname1, surname2, transport) {
    this.#username = username;
    this.#name = name;
    this.#surname1 = surname1;
    this.#surname2 = surname2;
    this.#transport = transport;
  }

  get username() {
    return this.#username;
  }
  set username(username) {
    this.#username = username;
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

  get surname1() {
    return this.#surname1;
  }
  set surname1(surname1) {
    this.#surname1 = surname1;
  }

  get surname2() {
    return this.#surname2;
  }
  set surname2(surname2) {
    this.#surname2 = surname2;
  }

  get transport() {
    return this.#transport;
  }
  set transport(transport) {
    this.#transport = transport;
  }
}
