// eslint-disable-next-line import/prefer-default-export
export const getProperties = async () => {
  const response = await fetch('http://localhost:3007/homes');
  return response;
};
