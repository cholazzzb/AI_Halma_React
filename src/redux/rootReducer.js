import { combineReducers } from "redux";
import gameConditionReducer from "./gameCondition/gameConditionReducer";
import piecesPositionReducer from "./piecesPosition/piecesPositionReducer";

const rootReducer = combineReducers({
  gameCondition: gameConditionReducer,
  piecesPosition: piecesPositionReducer,
});

export default rootReducer;
