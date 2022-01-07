// eslint-disable-next-line import/prefer-default-export
export const getInquiries = async (propertyId, page = 0) => {
  const response = await fetch(
    `http://localhost:3007/inquiries?propertyId=${propertyId}&_page=${page}&_limit=3&_sort=id&_order=asc`
  );
  return response;
};
