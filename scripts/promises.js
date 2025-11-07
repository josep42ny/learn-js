const API_BASE_URL = 'https://randomuser.me/api/';

fetch(`${API_BASE_URL}?results=1&inc=name,email,gender,picture`)
  .then((response) => response.json())
  .then(draw);

function draw(data) {
  const root = document.querySelector('#app');
  const person = data.results[0];
  const isFemale = person.gender === 'female';

  for (let [key, value] of Object.entries(person)) {
    switch (key) {
      case 'name':
        root.appendChild(entry('Nom', value.first));
        root.appendChild(entry('Cognom', value.last));
        break;
      case 'email':
        root.appendChild(entry('E-mail', value));
        break;
      case 'gender':
        const css = isFemale ? 'female' : 'male';
        const name = isFemale ? 'Femení' : 'Masculí';
        root.appendChild(entry('Genere', name, css));
        break;
      case 'picture':
        root.appendChild(image(value.large));
        break;
      default:
        break;
    }
  }
}

function entry(name, value, classlist) {
  const spn = document.createElement('SPAN');
  const par = document.createElement('P');

  par.innerText = `${name}: `;
  spn.innerText = value;
  if (classlist) spn.classList = classlist;

  par.appendChild(spn);
  return par;
}

function image(url) {
  const img = document.createElement('IMG');
  img.src = url;
  return img;
}
