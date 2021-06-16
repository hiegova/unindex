import * as fg from 'fast-glob';

const getFilesInDirSync = function (dirPath: string = '') {
  const path = dirPath === '/' ? '' : dirPath;

  return fg.sync(path + '/**/*', { dot: true });
};

export default getFilesInDirSync;
