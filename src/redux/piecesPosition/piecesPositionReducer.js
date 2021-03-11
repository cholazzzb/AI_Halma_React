import {
  JUMP,
  SLIDE,
  PLAYER_1,
  PLAYER_2,
  PLAYER_3,
  PLAYER_4,
} from "./piecesPositionTypes";

import {
  INITIAL_POSITION_PLAYER_1,
  INITIAL_POSITION_PLAYER_2,
  INITIAL_POSITION_PLAYER_3,
  INITIAL_POSITION_PLAYER_4,
} from "./initialPosition";

const initialState = {
  test: JUMP,
  player1: INITIAL_POSITION_PLAYER_1,
  player2: INITIAL_POSITION_PLAYER_2,
  player3: INITIAL_POSITION_PLAYER_3,
  player4: INITIAL_POSITION_PLAYER_4,
};

const piecesPositionReducer = (state = initialState, action) => {
  switch (action.type) {
    case JUMP:
      return {
        ...state,
        test: JUMP,
      };
    case SLIDE:
      return {
        ...state,
        test: SLIDE,
      };
    case PLAYER_1:
      return {
        ...state,
        player1: action.payload,
      };
    case PLAYER_2:
      return {
        ...state,
        player2: action.payload,
      };
    case PLAYER_3:
      return {
        ...state,
        player3: action.payload,
      };
    case PLAYER_4:
      return {
        ...state,
        player4: action.payload,
      };

    default:
      break;
  }
  return state;
};

export default piecesPositionReducer;
