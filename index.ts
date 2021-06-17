import getFilesInDirSync from './helpers/getFilesInDirSync';
import hasIndex from './helpers/hasIndex';
import isIndex from './helpers/isIndex';
import whileRegex from './helpers/whileRegex';
import getFixedPath from './helpers/getFixedPath';
import * as fs from 'fs';
import * as path from 'path';

const dirPath = process.argv[2];
console.log('dirPath: =============================', dirPath);

const allFiles = getFilesInDirSync(dirPath);
const fileList = allFiles.filter((path) => !hasIndex([path]));

for (let i = 0; i < fileList.length; i++) {
  const filePath = fileList[i];
  const dirName = path.dirname(filePath);

  const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
  let fileContentFixed: string = fileContent;

  const importRegExp = /from ['"]([\.\/].*)['"]/g;

  whileRegex(importRegExp, fileContent, (path) => {
    const truePath = dirName + '/' + path;

    if (isIndex(truePath)) {
      fileContentFixed = fileContentFixed.replace(path, getFixedPath(path));
    }
  });

  fs.writeFileSync(filePath, fileContentFixed);
}
