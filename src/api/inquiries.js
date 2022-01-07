let limit = 0;
export const getInquiries = async (propertyId) => {
  limit = limit >= 299 ? 3 : limit + Math.floor(Math.random() * 4);
  return (
    await fetch(
      `http://localhost:3007/inquiries?propertyId=${propertyId}&_limit=${limit}&_sort=id&_order=asc`
    )
  ).json();
};
