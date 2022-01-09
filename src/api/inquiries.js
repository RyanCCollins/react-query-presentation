import { MAX_PER_PAGE } from '../constants';

let limit = 0;
export const getInquiries = async (propertyId) => {
  limit =
    limit >= 299
      ? MAX_PER_PAGE
      : limit + Math.floor(Math.random() * MAX_PER_PAGE + 1);
  return (
    await fetch(
      `http://localhost:3007/inquiries?propertyId=${propertyId}&_limit=${limit}&_sort=id&_order=asc`
    )
  ).json();
};
