import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  changeIsStart,
  changeTurn,
} from "../../redux/gameCondition/gameConditionActions";

function Control(props) {
  props.AIs.forEach((AI) => {
    AI.print10("HU");
  });

  const gameCondition = useSelector((state) => state.gameCondition);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log("in use effect control");
  }, [gameCondition.turn]);

  return (
    <div className="flex">
      Control Panel
      <div
        className="w-1/3 border-green-400 p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer
      "
        onClick={() => {
          dispatch(changeIsStart(true));
          dispatch(changeTurn(1));
        }}
      >
        Start
      </div>
      <div
        className="w-1/3 border-green-400 p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer"
        onClick={() => dispatch(changeIsStart(false))}
      >
        Stop
      </div>
      <div className="w-1/3 border-green-400 p-4 bg-gray-800 hover:bg-gray-700 cursor-pointer">
        Reset
      </div>
    </div>
  );
}

export default Control;
