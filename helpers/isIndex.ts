const fs = require('fs');

const isIndex = (filePath: string): boolean => {
  try {
    fs.readFileSync(filePath + '/index.js', { encoding: 'utf-8' });
    return true;
  } catch (e) {}

  try {
    fs.readFileSync(filePath + '/index.ts', { encoding: 'utf-8' });
    return true;
  } catch (e) {}

  return false;
};

export default isIndex;
