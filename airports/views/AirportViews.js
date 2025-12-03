export class AirportViews {
  constructor() {
    this.map = this.#initMap();
    this.#initTable();
  }

  drawAll(airports) {
    for (const airport of airports) {
      this.draw(airport);
    }
  }

  draw(airport) {
    const table = document.querySelector('#app table');
    const tr = this.#element('TR');

    tr.appendChild(this.#element('TD', airport.code));
    tr.appendChild(this.#element('TD', airport.name));
    tr.appendChild(this.#element('TD', airport.latitude));
    tr.appendChild(this.#element('TD', airport.longitude));
    tr.appendChild(this.#element('TD', airport.city));

    const marker = L.circle([airport.latitude, airport.longitude], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 1,
    });
    // const marker = L.marker([airport.latitude, airport.longitude]);
    marker.bindPopup(
      `<h5>${airport.code}</h5>${airport.name}<br><small>${airport.city}</small>`
    );
    marker.addTo(this.map);

    table.appendChild(tr);
  }

  #initMap() {
    const map = L.map('map').setView([0, 0], 2);
    L.tileLayer(
      'https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_nolabels/{z}/{x}/{y}.png',
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }
    ).addTo(map);
    return map;
  }

  #initTable() {
    const root = document.querySelector('#app');
    const table = this.#element('TABLE');
    const trHeader = this.#element('TR');

    trHeader.appendChild(this.#element('TH', 'Code'));
    trHeader.appendChild(this.#element('TH', 'Name'));
    trHeader.appendChild(this.#element('TH', 'Latitude'));
    trHeader.appendChild(this.#element('TH', 'Longitude'));
    trHeader.appendChild(this.#element('TH', 'City'));

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
