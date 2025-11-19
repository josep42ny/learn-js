export class CarListView {
  constructor() {
    this.#init();
  }

  #init() {
    const root = document.querySelector('#carList');
    root.appendChild(
      this.#buildInput((e) => {
        console.log(e.target.value);
      })
    );
    root.appendChild(
      this.#buildInput((e) => {
        console.log(e.target.value);
      })
    );
    root.appendChild(
      this.#buildInput((e) => {
        console.log(e.target.value);
      })
    );
  }

  drawCars(cars) {
    const root = document.querySelector('#carList');

    for (let car of cars) {
      const elem = document.createElement('LI');
      elem.innerText = `${car.name} ${car.power} ${car.year}`;
      root.appendChild(elem);
    }
  }

  #buildCarElement(car) {
    const elem = document.createElement('LI');
    elem.innerText = `${car.name} ${car.power} ${car.year}`;
    return elem;
  }

  #buildInput(callback, type = 'text') {
    const input = document.createElement('INPUT');
    input.type = type;
    input.addEventListener('input', callback);
    return input;
  }
}
