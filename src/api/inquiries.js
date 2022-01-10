import { MAX_PER_PAGE } from '../constants';

const limitCache = {};
export const getInquiries = async (propertyId) => {
  const limit = limitCache[propertyId] || 1;
  limitCache[propertyId] =
    limit >= 299 ? 1 : limit + Math.floor(Math.random() * MAX_PER_PAGE + 1);

  return (
    await fetch(
      `http://localhost:3007/inquiries?propertyId=${propertyId}&_limit=${limit}&_sort=id&_order=asc`
    )
  ).json();
};
