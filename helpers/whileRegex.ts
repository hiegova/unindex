const whileRegex = (
  regexp: RegExp,
  fileContent: string,
  callback: (path: string) => void,
) => {
  let execResult: RegExpExecArray | null = null;

  while ((execResult = regexp.exec(fileContent))) {
    let path = execResult[1];

    callback(path);
  }
};

export default whileRegex;
