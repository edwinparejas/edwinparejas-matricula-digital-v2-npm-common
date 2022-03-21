import String from './string.helper';

describe('String helper', () => {
  test('Convert string to date', () => {
    const d = '20/08/2022';
    expect(String.toDate(d)).toStrictEqual(new Date('2022-08-20T05:00:00.000Z'));
  });
});
