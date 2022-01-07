export const selectProperties = (state) => state.properties.data;
export const selectPropertiesLoading = (state) => state.properties.loading;
export const selectPropertiesError = (state) => state.properties.error;
export const selectPropertiesCount = (state) => state.properties.data.length;
export const selectProperty = (state, id) =>
  state.properties.data.find((item) => item.id === id);
