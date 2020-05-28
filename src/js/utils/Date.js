const sixDaysInMillisecond = 6 * 24 * 60 * 60 * 1000;
const today = new Date();
const weekAgo = new Date(new Date().getTime() - sixDaysInMillisecond);

const year = today.getFullYear();
const month = today.getMonth();
const day = today.getDate();

const yearWeekAgo = weekAgo.getFullYear();
const mountWeekAgo = weekAgo.getMonth();
const dayWeekAgo = weekAgo.getDate();

const FROM = `${yearWeekAgo}-${mountWeekAgo + 1}-${dayWeekAgo}`;
const TO = `${year}-${month + 1}-${day}`;

const MONTHS = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
const WEEKDAYS = [ 'ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

export {FROM , TO, MONTHS, WEEKDAYS};