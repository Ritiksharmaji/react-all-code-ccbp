import {
  COUNT_INCREASE,
  COUNT_DECREASE,
  COUNT_RESET,
  COUNT_INCREASE_BY_FIVE,
  COUNT_DECREASE_BY_FIVE,
  CHANGE_COUNT,
  RESET_COUNT,
} from "./actionTypes";

// static action creators
export const increase = () => ({ type: COUNT_INCREASE });
export const decrease = () => ({ type: COUNT_DECREASE });
export const reset = () => ({ type: COUNT_RESET });
export const increaseByFive = () => ({ type: COUNT_INCREASE_BY_FIVE });
export const decreaseByFive = () => ({ type: COUNT_DECREASE_BY_FIVE });

// dynamic payload action creator
export const changeCount = (value) => ({
  type: CHANGE_COUNT,
  payload: value,
});

export const resetCount = () => ({
  type: RESET_COUNT,
});