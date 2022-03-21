import File from './file.helper';

describe('File helper', () => {
  test('Get lambda path', () => {
    const filename = 'src/helpers/file.helper.ts';
    expect(File.getPath(filename)).toBeTruthy();
  });
});
