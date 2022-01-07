import { combineReducers } from 'redux';
import propertiesReducer from './properties';
import inquiriesReducer from './inquiries';

const rootReducer = combineReducers({
  properties: propertiesReducer,
  inquiries: inquiriesReducer,
});

export default rootReducer;
