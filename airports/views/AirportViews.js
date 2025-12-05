export class AirportViews {
  constructor(callback, airports) {
    this.map = this.#initMap();
    this.#initTable(callback, airports);
  }

  drawAll(airports) {
    const table = document.querySelector('#app table');
    table.innerHTML = '';
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
      radius: 500,
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

  #initTable(callback, airports) {
    const root = document.querySelector('#app');
    const table = this.#element('TABLE');
    const trHeader = this.#element('TR');

    trHeader.appendChild(this.#element('TH', 'Code'));
    trHeader.appendChild(this.#element('TH', 'Name'));
    trHeader.appendChild(this.#element('TH', 'Latitude'));
    trHeader.appendChild(this.#element('TH', 'Longitude'));
    trHeader.appendChild(this.#element('TH', 'City'));

    /////// TODO ///////
    const searchbox = document.createElement('INPUT');
    searchbox.name = 'query';
    searchbox.addEventListener('input', async (e) => {
      const filtered = await callback(airports, e.target.value);
      console.log(filtered);
      this.drawAll(filtered);
    });

    table.appendChild(trHeader);
    root.appendChild(searchbox);
    root.appendChild(table);
  }

  #element(tag, inner = '') {
    const elem = document.createElement(tag);
    elem.innerHTML = inner;
    return elem;
  }
}
