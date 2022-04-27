import { DateTime } from './luxon.js';

const date = document.querySelector('.date');
const currentDate = () => {
  date.innerHTML = DateTime.now().toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
  setTimeout(currentDate, 1000);
};
export default currentDate;