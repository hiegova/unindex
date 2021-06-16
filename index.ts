import getFilesInDirSync from './helpers/getFilesInDirSync';
import hasIndex from './helpers/hasIndex';

const dirPath = process.argv[2];

const allFiles = getFilesInDirSync(dirPath);
const fileList = allFiles.filter((path) => !hasIndex([path]));
