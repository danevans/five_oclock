import { getAllTimezones, getCountriesForTimezone } from 'countries-and-timezones';
import { randomFactory } from './random-factory';

const FIVE_PM = 17;

const zonesList = document.getElementById('zones');
const utc = document.getElementById('utc');

const DRINKS = ['🍺', '🍻', '🥂', '🍷', '🥃', '🍸', '🍹', '🧉', '🍾', '🍶'] as const;
const randomDrink = randomFactory(DRINKS);

if (zonesList && utc) {
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
  Object.entries(getAllTimezones()).forEach(([zone, { dstOffset }]) => {
    // floor should help include time zones that are not on the exact hour
    const target = Math.floor(dstOffset / 60);
    if (offsetHours.includes(target)) {
      getCountriesForTimezone(zone).forEach(({ name }) => {
        const li = document.createElement('li');
        li.textContent = `${randomDrink()} ${name}, ${zone}, ${dstOffset / 60}`;
        zonesList.appendChild(li);
      });
    }
  });
}
