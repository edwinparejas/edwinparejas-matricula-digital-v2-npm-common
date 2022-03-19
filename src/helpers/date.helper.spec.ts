import * as date from './date.helper';

describe('Date helper', () => {
  test('Convert date to string in short format', () => {
    const d = new Date(2022, 2, 18);
    expect(date.toString(d)).toBe('18/03/2022');
  });

  test('Convert date to string in long format', () => {
    const d = new Date(2022, 2, 18, 23, 17, 5);
    expect(date.toString(d, 'long')).toBe('18/03/2022 11:17:05 pm');
  });

  test('Convert date to number in miliseconds', () => {
    const d = new Date(2022, 2, 18, 23, 17, 5);
    expect(date.dateToEpoch(d)).toBe(1647663425000);
  });

  test('Convert miliseconds to date', () => {
    const miliseconds = 1647663425000;
    expect(date.epochToDate(miliseconds)).toStrictEqual(new Date('2022-03-19T04:17:05.000Z'));
  });

  test('Get current date in miliseconds', () => {
    const d = new Date();
    const epoch = date.dateToEpoch(d);
    expect(date.getEpoch()).toBe(epoch);
  });
});
