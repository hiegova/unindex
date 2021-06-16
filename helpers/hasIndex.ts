const hasIndex = (fileList: string[]): boolean => {
  return fileList.some((fileName) => /^index\./i.test(fileName));
};

export default hasIndex;
