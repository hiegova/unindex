import hasIndex from './hasIndex';

test('returns true if index.ts file exist', () => {
  const fileList = ['test.ts', 'test.js', 'index.ts'];

  const result = hasIndex(fileList);

  expect(result).toBe(true);
});

test('returns true if index.js file exist', () => {
  const fileList = ['test.ts', 'test.js', 'index.js'];

  const result = hasIndex(fileList);

  expect(result).toBe(true);
});

test('returns true if /path/index.js file exist', () => {
  const fileList = ['/path/test.ts', '/path/test.js', '/path/index.js'];

  const result = hasIndex(fileList);

  expect(result).toBe(true);
});

test('returns false if no index file exist', () => {
  const fileList = ['test.ts', 'test.js', 'another.js'];

  const result = hasIndex(fileList);

  expect(result).toBe(false);
});
