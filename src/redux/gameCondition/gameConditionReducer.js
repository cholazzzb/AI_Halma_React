import { act } from "@testing-library/react";
import { IS_START, TURN } from "./gameConditionTypes";

const initialState = {
  isStart: false,
  turn: 0,
};

const gameConditionReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_START:
      return {
        ...state,
        isStart: action.payload,
      };

    case TURN:
      return {
        ...state,
        turn: action.payload,
      };
    default:
      return state;
  }
};

export default gameConditionReducer;
