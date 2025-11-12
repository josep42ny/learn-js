export function draw(person) {
  const root = document.querySelector('#app');
  const isFemale = person.gender === 'female';

  for (let [key, value] of Object.entries(person)) {
    switch (key) {
      case 'firstName':
        root.appendChild(entry('Nom', value));
        break;
      case 'lastName':
        root.appendChild(entry('Cognom', value));
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
        root.appendChild(image(value));
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
