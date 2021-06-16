const hasIndex = (filePathList: string[]): boolean => {
  return filePathList.some((filePath) => /\/index\./i.test(filePath));
};

export default hasIndex;
