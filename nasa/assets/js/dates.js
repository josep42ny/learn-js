export function getDates() {
  moment.locale('ca');

  let d = moment();

  const result = [];

  for (let i = 0; i < 365; i++) {
    d = d.subtract(1, 'days');
    result.push({
      value: d.format('YYYY-MM-DD'),
      label: d.format('D [de] MMMM [de] YYYY'),
    });
  }
  return result;
}

export function getSelectValues(select) {
  const options = select && select.options;
  return Array.from(options)
    .filter((opt) => opt.selected)
    .map((opt) => opt.value || opt.text);
}
