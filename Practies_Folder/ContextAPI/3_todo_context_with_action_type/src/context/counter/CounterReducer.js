import {
  COUNT_INCREASE,
  COUNT_DECREASE,
  COUNT_RESET,
  COUNT_INCREASE_BY_FIVE,
  COUNT_DECREASE_BY_FIVE,
  CHANGE_COUNT,
  RESET_COUNT,
} from "./actionTypes";

export const counterReducer = (state, action) => {
  switch (action.type) {
    case COUNT_INCREASE:
      return state + 1;

    case COUNT_DECREASE:
      return state - 1;

    case COUNT_INCREASE_BY_FIVE:
      return state + 5;

    case COUNT_DECREASE_BY_FIVE:
      return state - 5;

    case COUNT_RESET:
      return 0;
  
    case CHANGE_COUNT:
      return state + action.payload;

    case RESET_COUNT:
      return 0;

    default:
      return state;
  }
};
