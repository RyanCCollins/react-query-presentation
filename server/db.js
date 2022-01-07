const inquiriesData = require('./mockInquiries');
const homesData = require('./homes');

module.exports = {
  homes: homesData,
  inquiries: inquiriesData.map((item, index) => ({
    ...item,
    propertyId: Math.floor(index / 50) + 1,
  })),
};
