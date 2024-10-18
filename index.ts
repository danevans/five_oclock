import {
  getAllTimezones,
  getCountriesForTimezone,
} from 'countries-and-timezones';

const FIVE_PM = 17;

const tzs = getAllTimezones();

const zones = document.getElementById('zones');
const utc = document.getElementById('utc');

if (zones && utc) {
  const now = new Date();
  const utcHours = now.getUTCHours();

  const minutes = `0${now.getUTCMinutes()}`.slice(-2);
  utc.textContent = `${utcHours}:${minutes}`;

  let offsetHours: Array<Number> = [];
  // west of utc is BEHIND in time, negative. east of utc is AHEAD in time, positive
  if (utcHours === FIVE_PM) {
    offsetHours = [0];
  } else {
    offsetHours = [FIVE_PM - utcHours, -(24 + utcHours - FIVE_PM)];
  }
  Object.entries(tzs).forEach(([zone, details]) => {
    // floor should help include time zones that are not on the exact hour
    const target = Math.floor(details.dstOffset / 60);
    if (offsetHours.includes(target)) {
      const countries = getCountriesForTimezone(zone).map(
        (country) => country.name
      );
      countries.forEach((country) => {
        const li = document.createElement('li');
        li.textContent = `${country}, ${zone}, ${details.dstOffset / 60}`;
        zones.appendChild(li);
      });
    }
  });
}
