export const selectInquiries = (state) =>
  state.inquiries.data.sort((a, b) => b.id - a.id);
export const selectInquiriesLoading = (state) => state.inquiries.loading;
export const selectInquiriesUpdating = (state) => state.inquiries.updating;
export const selectInquiriesError = (state) => state.inquiries.error;
export const selectInquiriesCount = (state) => state.inquiries.data.length;
