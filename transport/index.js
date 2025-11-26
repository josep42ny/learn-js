/*
Creeu una taula d'usuaris associats als seus transports. Per això crearem una
estructura MVC amb les següents capes:
- Model: dos mòduls, un "User" i un altre "Transport". Un usuari té un únic
transport (objecte Transport)
User: username, name, surname1, surname2, transport
Transport: id, name, url
- Servei "UserTransportService" amb una funció "getUsers" on es retorni una
llista d'objectes "User" associat al seu respectiu transport.
- Vista: pintat de la taula d'usuaris amb els seus respectius transports.
Filtreu únicament els usuaris on el seu primer o segon cognom contingui la
lletra "H".
Afegiu al model usuari una propietat prototípica, el nom complet que serà una
funció amb el nom, primer cognom i segon cognoms concatenats.
Afegiu al model usuari una altar propietat prototípica "inicials" a partir d'aquest
esquelet:
const inicials = function () { }
usuari.inicials = inicials;

Cridades a la API
Per a cridar a l'API heu de cridar amb els següents paràmetres:
- Llista d'usuaris
URL: http://localhost:8080/exercicis/other/usuaris/list
Mètode: GET
Paràmetres entrada:
Resultat: JSON d'objectes amb els usuaris
- Transport
URL: http://localhost:8080/exercicis/other/usuaris/transport
Mètode: POST
Paràmetres entrada: Objecte amb els camps:
- idtransport: identificador del transport.
*/

import { UserTransportService } from './services/UserTransportService.js';

const service = new UserTransportService();
//service.getUsers().then(console.log);
service.getTransport().then(console.log);
