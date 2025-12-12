export class DatesView {
  constructor(dates) {
    const select = document.querySelector('#dates');
    dates.forEach((date) => {
      const option = document.createElement('OPTION');
      option.value = date.value;
      option.innerText = date.label;
      select.appendChild(option);
    });
  }
}
