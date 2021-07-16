import {GETAPI} from '../type';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETAPI:
      return [...action.payload];

    default:
      return state;
  }
};
