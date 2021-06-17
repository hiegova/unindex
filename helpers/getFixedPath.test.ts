import getFixedPath from './getFixedPath';

test('returns fixed path', () => {
  const initialPath = '../dir_name_1/dir_name_1/file_name';
  const expectedPath = '../dir_name_1/dir_name_1/file_name/file_name';

  const result = getFixedPath(initialPath);

  expect(result).toBe(expectedPath);
});

test('returns fixed path', () => {
  const initialPath = './file_name';
  const expectedPath = './file_name/file_name';

  const result = getFixedPath(initialPath);

  expect(result).toBe(expectedPath);
});

test('returns fixed path', () => {
  const initialPath = '../file_name';
  const expectedPath = '../file_name/file_name';

  const result = getFixedPath(initialPath);

  expect(result).toBe(expectedPath);
});
