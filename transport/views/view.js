export class UserTransportView {
  drawAll(users) {
    this.#initTable();
    for (let user of users) {
      this.drawUser(user);
    }
  }

  drawUser(user) {
    const table = document.querySelector('#app table');
    const tr = this.#element('TR');

    tr.appendChild(this.#element('TD', user.name));
    tr.appendChild(this.#element('TD', user.surname1));
    tr.appendChild(this.#imgElement(user.transport));

    table.appendChild(tr);
  }

  #initTable() {
    const root = document.querySelector('#app');
    const table = this.#element('TABLE');
    const trHeader = this.#element('TR');

    trHeader.appendChild(this.#element('TH', 'First Name'));
    trHeader.appendChild(this.#element('TH', 'Last Name'));
    trHeader.appendChild(this.#element('TH', 'Transport'));

    table.appendChild(trHeader);
    root.appendChild(table);
  }

  #element(tag, inner = '') {
    const elem = document.createElement(tag);
    elem.innerHTML = inner;
    return elem;
  }

  #imgElement(url) {
    const img = document.createElement('IMG');
    img.src = url;
    return img;
  }
}
