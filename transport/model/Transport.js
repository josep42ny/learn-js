export class Transport {
  #id;
  #name;
  #url;

  constructor(id, name, url) {
    this.id = id;
    this.name = name;
    this.url = url;
  }

  get id() {
    return this.#id;
  }
  set id(id) {
    this.#id = id;
  }

  get name() {
    return this.#name;
  }
  set name(name) {
    this.#name = name;
  }

  get url() {
    return this.#url;
  }
  set url(url) {
    this.#url = url;
  }
}
