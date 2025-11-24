import ColorService from './services/ColorService.js';
import { init } from './views/index.view.js';

/*
Fes un petit programa per a pintar un quadrat i el color del fons. Aquest
programa feu que es connecti al servidor a través de XMLHttpRequest per
obtenir les dades. El servidor us retornarà dos colors i dos valors (width i
height). Un dels colors serà per pintar el color de fons de la vostra web, l'altre
serà per pintar un div amb un rectangle de tamany donat pels dos valors. Les
dades de connexió són les següents:
- URL: https://theteacher.codiblau.com/public/exercicis/other/color
- Method: GET
- Paràmetres:
- min: integer. Altura mínima que tindrà el rectangle.
- max: integer. Altura màxima que tindrà el rectangle.
Aquesta funció us retornarà un objecte en format JSON amb 4 propietats:
- background: color hexadecimal que haureu de pintar el color de fons del body
- color: color hexadecimal que haureu de pintar el rectangle
- width: amplada del rectangle (en px)
- height: altura del rectangle (en px)
*/
const service = new ColorService();
init(service.get);
