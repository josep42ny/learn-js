import { update } from '../views/index.view.js';
import { Rectangle } from '../model/Rectangle.js';

export default class ColorService {
  constructor() {
    this.get();
  }

  get(min = 0, max = 200) {
    const URL = `https://theteacher.codiblau.com/public/exercicis/other/color?min=${min}&max=${max}`;
    const METHOD = 'GET';
    const request = new XMLHttpRequest();
    request.onload = function () {
      update(
        new Rectangle(
          request.response.color,
          request.response.background,
          request.response.width,
          request.response.height
        )
      );
    };
    request.open(METHOD, URL);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/json');
    request.send();
  }
}
