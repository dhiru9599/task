// reducers.js

import { combineReducers } from 'redux';

const data = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.data;
    default:
      return state;
  }
};

export default combineReducers({
  data,
});
