import { IS_START, TURN } from "./gameConditionTypes";

export const changeIsStart = (newState) => {
  return {
    type: IS_START,
    payload: newState,
  };
};

export const changeTurn = (newTurn) => {
  return {
    type: TURN,
    payload: newTurn
  }
}
