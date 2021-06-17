const getFixedPath = (path: string): string => {
  const pathSegments = path.split('/');
  const finalPathSegment = pathSegments[pathSegments.length - 1];

  return path + '/' + finalPathSegment;
};

export default getFixedPath;
