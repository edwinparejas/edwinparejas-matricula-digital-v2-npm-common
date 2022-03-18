/**
 * Convert date to number in miliseconds (epoch format)
 * @param {Date} date Date
 * @returns {number} Miliseconds (epoch format)
 */
export const dateToEpoch = (date: Date): number => date.getTime();

/**
 * Convert miliseconds (epoch format) to date
 * @param {number} miliseconds Miliseconds (epoch format)
 * @returns {Date} Date
 */
export const epochToDate = (miliseconds: number): Date => {
  // eslint-disable-next-line prefer-const
  let date = new Date(0);
  date.setMilliseconds(miliseconds);

  return date;
};

/**
 * Get current date in  miliseconds (epoch format)
 * @param {?(now|today)} type Date type - 'now' by default
 * @returns {number} Miliseconds (epoch format)
 */
export const getEpoch = (type = 'now'): number => {
  // eslint-disable-next-line prefer-const
  let date = new Date();

  if (type === 'today') {
    date.setHours(0, 0, 0, 0);
  }

  return dateToEpoch(date);
};

/**
 * Compare two dates
 * @param {Date|number} d1 Date one
 * @param {Date|number} d2 Date two
 * @param {?(e|ne)} operator Operator type - 'e' by default
 * @returns {boolean} Comparison result
 */
export const compare = (
  d1: Date | number,
  d2: Date | number,
  operator = 'e',
): boolean => {
  const date1 = typeof d1 === 'number' ? d1 : dateToEpoch(d1);
  const date2 = typeof d2 === 'number' ? d2 : dateToEpoch(d2);

  if (operator === 'ne') {
    return date1 !== date2;
  }

  return date1 === date2;
};

export const toString = (date: Date | number, type = 'short'): string => {
  if (typeof date === 'number') {
    date = epochToDate(date);
  }

  if (type === 'long') {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);

    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    const strHours = hours < 10 ? '0' + hours : hours;
    const strMinutes = minutes < 10 ? '0' + minutes : minutes;
    const strSeconds = seconds < 10 ? '0' + seconds : seconds;

    return `${day}/${month}/${year} ${strHours}:${strMinutes}:${strSeconds} ${ampm}`;
  }

  const year = date.getFullYear();
  const month = ('0' + (date.getMonth() + 1)).slice(-2);
  const day = ('0' + date.getDate()).slice(-2);

  return `${day}/${month}/${year}`;
};

export const getAge = (
  birthDate: number | Date,
  today: number | Date = new Date(),
): number => {
  const ageDifMs =
    (typeof today === 'number' ? today : dateToEpoch(today)) -
    (typeof birthDate === 'number' ? birthDate : dateToEpoch(birthDate));
  const ageDate = new Date(ageDifMs);

  return Math.abs(ageDate.getUTCFullYear() - 1970);
};
