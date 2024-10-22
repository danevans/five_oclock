import {
  getAllTimezones,
  getCountriesForTimezone,
} from 'countries-and-timezones';

const FIVE_PM = 17;

const tzs = getAllTimezones();

const zones = document.getElementById('zones');
const utc = document.getElementById('utc');

const DRINKS = ['🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🍶'];
let remainingDrinks = [...DRINKS];

function randomDrink() {
  if (remainingDrinks.length === 0) {
    remainingDrinks = [...DRINKS];
  }
  const idx = Math.floor(Math.random() * remainingDrinks.length);
  return remainingDrinks.splice(idx, 1)[0];
}

if (zones && utc) {
  const now = new Date();
  const utcHours = now.getUTCHours();

  const minutes = `0${now.getUTCMinutes()}`.slice(-2);
  utc.textContent = `${utcHours}:${minutes}`;

  let offsetHours: Array<Number> = [];
  // west of utc is BEHIND in time, negative. east of utc is AHEAD in time, positive
  if (utcHours === FIVE_PM) {
    offsetHours = [0];
    utc.setAttribute('title', `offset: 0`);
  } else {
    // some of these offsets are never actually used...
    // there are at least a couple of times (3am, 4am) where there could be both offsets
    const one = FIVE_PM - utcHours;
    const two = -(24 + utcHours - FIVE_PM);
    offsetHours = [one, two];
    utc.setAttribute('title', `offsets: ${one} or ${two}`);
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
        li.textContent = `${randomDrink()} ${country}, ${zone}, ${
          details.dstOffset / 60
        }`;
        zones.appendChild(li);
      });
    }
  });
}
