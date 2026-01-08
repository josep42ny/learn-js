import { Entry } from "../model/Entry.js";

export class GalleryService {
  getCategories() {
    return fetch("https://theteacher.codiblau.com/public/exercicis/galeria/categories-list").then((data) => data.json());
  }

  getImages() {
    return fetch("https://theteacher.codiblau.com/public/exercicis/galeria/list")
      .then((data) => data.json())
      .then((rawImages) => rawImages.map((image) => this.#mapImage(image)))
      .then((images) => images.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }

  postEntry() {
    const title = document.querySelector("#form-titol").value;
    const url = document.querySelector("#form-url").value;
    const date = document.querySelector("#form-data").value;
    const category = document.querySelector("#form-categoria").value;

    return fetch("https://theteacher.codiblau.com/public/exercicis/galeria/save", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        titol: title,
        url: url,
        data: date,
        categoria: category,
      }),
    });
  }

  #mapImage(raw) {
    return new Entry(raw.iditem, raw.titol, raw.url, raw.data, raw.categoria);
  }
}
