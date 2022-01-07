// eslint-disable-next-line import/prefer-default-export
export const getProperties = async () =>
  (await fetch('http://localhost:3007/homes')).json();

export const getProperty = async (propertyId) =>
  (await fetch(`http://localhost:3007/homes/${propertyId}`)).json();
